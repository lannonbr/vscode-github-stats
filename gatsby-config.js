const path = require("path")

module.exports = {
  siteMetadata: {
    title: "VSCode Stats",
    source: "https://github.com/lannonbr/vscode-github-stats",
    repoNameWithOwner: "microsoft/vscode",
  },
  plugins: [
    {
      resolve: `gatsby-theme-github-stats`,
      options: {
        dataPath: path.join(__dirname, `src`, `data`),
      },
    },
  ],
}
