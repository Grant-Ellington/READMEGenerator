// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fileName = "README.md"
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'synopsis',
        message: 'Eneter a short synopsis of you projecct?',
    },
    {
        type: 'input',
        name: 'tech1',
        message: 'What is one technology that you used?',
    },
    {
        type: 'input',
        name: 'tech2',
        message: 'What is another technology you used?',
    },
    {
        type: 'input',
        name: 'tech3',
        message: 'What is another technology you used?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        },
    {
        type: 'input',
        name: 'usage',
        message:'What are your Usage Insrunctions?',
        },
    {
        type: 'input',
        name: 'contGuide',
        message: 'Who are your constribution guidleines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are your test?'  

    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you need?',
        choices: [
            'MIT',
            'GNU GLPv3',
            '',
        ]
    },
    {
        type: 'input',
        name: 'gitUser',
        message: 'What are your GitHub user name?'  

    },
    {
        type: 'input',
        name: 'email',
        message: 'What are your email address?'  

    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('dist/README1.md', data, (err) =>
    err ? console.log(err) :console.log('success'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const license = data.license;
        console.log(generateMarkdown.renderLicenseBadge(license));
        console.log(generateMarkdown.renderLicenseLink(license));
        console.log(generateMarkdown.renderLicenseSection(license));
        writeToFile(generateMarkdown.generateMarkdown(data, generateMarkdown.renderLicenseSection(license)));
        
    })
}

// Function call to initialize app
init();
