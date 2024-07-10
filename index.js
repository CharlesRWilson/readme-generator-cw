// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process, if any:",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage information?",
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidelines?",
    },
    {
        type: "input",
        name: "tests",
        message: "What are the test instructions?",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["MIT", "GPLv3", "Apache 2.0", "BSD 3-Clause", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",}
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //const markdown = generateMarkdown("GPL")
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README file!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile("README.md", markdown);
    });
}

// Function call to initialize app
init();
