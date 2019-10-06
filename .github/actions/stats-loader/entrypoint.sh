#!/bin/bash

git config user.name "GitHub Action Bot"
git config user.email "<>"

git checkout -B master origin/master

git remote set-url origin https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git

node /load-data.js > src/data/data.json

git add src/data/data.json

git commit -m "Updating data.json"
git push origin HEAD:master
