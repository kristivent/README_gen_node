// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the intended use for the project?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are the testing instructions?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license was used?',
        choices: ['mit', 'none']
      },
      {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
      },
    ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
