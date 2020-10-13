const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

const questions = [
  {
    type: "questions",
    name: "User",
    message: "What is your GitHub username?"
  },{
    type: "questions",
    name: "email",
    message: "What is your email address?"
  },
  {
    type: "input",
    name: "projectname",
    message: "What is your project's name?"
  },
  {
    type: "questions",
    name: "description",
    message: "Please write a short description of your project"
  },
  {
    type: "questions",
    name: "license",
    message: "What kind of license should your project have?",
  },
  {
    type: "questions",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i"
  },
  {
    type: "questions",
    name: "test",
    message: "What command should be run to run tests?",
  },
  {
    type: "questions",
    name: "Usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "questions",
    name: "Contributor",
    message: "What does the user need to know about contributing to the repo?",
  }
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions)
  .then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({...inquirerResponses}));
  })
}

init();
