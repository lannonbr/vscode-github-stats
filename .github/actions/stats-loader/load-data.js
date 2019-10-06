const { db } = require("./firebase-wrapper");

db.collection("hourly-stats")
  .orderBy("timestamp", "desc")
  .limit(336)
  .get()
  .then(querySnapshot => {
    let data = querySnapshot.docs;

    data = data.map(dataPoint => dataPoint.data());

    let str = JSON.stringify(data);

    console.log(str);
  });
