const fetch = require("node-fetch");
const moment = require("moment");

const { db } = require("./firebase-wrapper");

require("dotenv").config();

let query = JSON.stringify({
  query: `
    query {
      repository(owner: "gatsbyjs", name:"gatsby") {
        openIssues: issues(states:OPEN) {
          totalCount
        }
        closedIssues: issues(states:CLOSED) {
          totalCount
        }
        openPRs: pullRequests(states:OPEN) {
          totalCount
        }
        closedPRs: pullRequests(states:CLOSED) {
          totalCount
        }
        mergedPRs: pullRequests(states:MERGED) {
          totalCount
        }
        stargazers {
          totalCount
        }
      }
    }`
});

function queryGitHub(query) {
  const url = "https://api.github.com/graphql";
  const options = {
    method: "POST",
    body: query,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`
    }
  };

  return fetch(url, options)
    .then(resp => resp.json())
    .then(data => {
      return data.data.repository;
    });
}

let run = async () => {
  let resp = await queryGitHub(query);

  let now = moment().unix();

  let docRef = db.collection("hourly-stats").doc(now.toString());

  let data = {
    timestamp: now,
    openIssues: resp.openIssues.totalCount,
    closedIssues: resp.closedIssues.totalCount,
    openPRs: resp.openPRs.totalCount,
    closedPRs: resp.closedPRs.totalCount,
    mergedPRs: resp.mergedPRs.totalCount,
    stars: resp.stargazers.totalCount
  };

  await docRef.set(data);
};

run();
