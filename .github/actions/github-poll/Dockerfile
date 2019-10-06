FROM node:10-stretch

LABEL "com.github.actions.name"="Gatsby Stats Poller"
LABEL "com.github.actions.description"="Upload stats from GitHub API to Firestore"
LABEL "com.github.actions.icon"="upload"
LABEL "com.github.actions.color"="purple"

LABEL "repository"="http://github.com/lannonbr/gatsby-github-stats"
LABEL "homepage"="http://github.com/lannonbr/gatsby-github-stats"
LABEL "maintainer"="Benjamin Lannon <benjamin@lannonbr.com>"

ADD package.json /package.json
ADD yarn.lock /yarn.lock

ADD index.js /index.js
ADD firebase-wrapper.js /firebase-wrapper.js

RUN yarn

ENTRYPOINT [ "node", "/index.js" ]