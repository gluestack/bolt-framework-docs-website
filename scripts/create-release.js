/* eslint-disable no-console */
const readline = require("readline");
const { edit } = require("external-editor");
const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const simpleGit = require("simple-git");

var pjson = require("../package.json");

require("dotenv").config();
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({ auth: process.env.GITHUB_PERSONAL_TOKEN });
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let response;
let releaseBranchName;

const OWNER = "gluestack";
const REPO = "bolt-framework-docs-website";
const BASE = "main";

function createBranch(branchName) {
  console.log(`Creating Branch ${branchName}`);
  execSync(`git checkout -b ${branchName}`);
  console.log(`Created branch ${branchName}`);
}

function pushToGithub(version) {
  console.log("Pushing Branch");
  const prTitle = `release: version ${version}`;
  execSync(`git push origin ${releaseBranchName}`);
  console.log("Creating PR");
  createPRforGithub(prTitle);
}

function createPRforGithub(title) {
  octokit.rest.pulls.create({
    owner: OWNER,
    repo: REPO,
    title: title,
    base: BASE,
    head: releaseBranchName,
  });
  console.log("Created PR!");
}

function runVersionUpCommand(version) {
  spawnSync("yarn", ["version", `--new-version=${version}`], {
    stdio: "inherit",
  });

  // read package json
  // write package json
  // update package.json file lastStorybookUpdatedTimestamp to current timestamp
  const fileName = path.join(__dirname, "../package.json");
  delete require.cache[require.resolve(fileName)];
  const file = require(fileName);
  file.lastStorybookUpdatedTimestamp = Date.now();
  fs.writeFileSync(fileName, JSON.stringify(file, null, 2));
  // Set the author information for the commit
  const author = {
    name: "gluestackadmin",
    email: "dev@gluestack.io",
  };

  // Set the commit message
  const commitMessage = "chore: version updated to " + version;

  // Set the authorization key
  const authKey = process.env.GITHUB_PERSONAL_TOKEN;

  // Create a simple-git instance and set the remote URL
  const git = simpleGit({
    baseDir: path.join(__dirname, ".."),
    remote: `https://${authKey}@github.com/gluestack/bolt-framework-docs-website.git`,
  });

  // Stage the changes
  git
    .add(".")
    .then(() => {
      // Commit the changes with the author and commit message
      return git.commit(commitMessage, null, {
        "--author": `${author.name} <${author.email}>`,
      });
    })
    .then(() => {
      console.log("Changes committed successfully.");
      pushToGithub(version);
    })
    .catch((error) => {
      console.error("Error committing changes:", error);
    });
}

const currentVersion = pjson.version;

rl.question(
  `Enter package version: (current verison: ${currentVersion}) `,
  (version) => {
    version = version.trim();
    if (version) {
      rl.question("Enter summary of fixes: ", (summary) => {
        if (summary === "") {
          response = edit("\n\n# Please enter a summary for your changes.", {
            postfix: ".md",
          });
        }
        console.log(`Version: ${version}`);
        console.log(`Summary of fixes: ${summary}`);
        const branchName = `release/${version}`;
        releaseBranchName = branchName;
        createBranch(branchName);

        runVersionUpCommand(version);
        rl.close();
      });
    }
  }
);
