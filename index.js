// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./utils/shapes.js');

// TODO: Create an array of questions for user input
function userInput(){
    return inquirer.prompt([
    
    
    
    ])};

// TODO: Create a function to create SVG file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.svg`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.svg has been generated.`))
}

// TODO: Create a function to initialize app
async function init() {
    let answers = await userInput();
    writeToFile((answers.fileName),(generateMarkdown(answers)));
}


// Function call to initialize app
init();
