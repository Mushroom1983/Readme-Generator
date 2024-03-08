const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },

    {
        type: "input",
        name: "description",
        message: "Describe your project.",
    },

    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },

    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
    },

    {
        type: "list",
        name: "license",
        message: "Choose a license for your project.",
    },

    {
        type: "input",
        name: "installCommand",
        message: "What command should be run to install dependencies?",
    },
        
    {
        type: "input",
        name: "usageInstructions",
        message: "What are the steps required to use your project?",
    },

    {
        type: "input",
        name: "testInstructions",
        message: "What command should be run to run tests?",
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
