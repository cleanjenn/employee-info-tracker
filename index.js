// add requirements for page to start
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./src/Temp");
const validator = require("email-validator");

// functions to write to a file
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let empArr = [];   //employeeArray
let empStr = ``;

console.clear();
console.log("_________________________________");
console.log("Your Employee list begins here!")

// begin the function to promp the questions
async function master() {
    try {
        await prompt()

        for (let i = 0; i < empArr.length; i++) {
            emp = empStr + html.generateCard(empArr[i]);
        }
        let finalPage = html.generateHTML(empStr)

        console.clear();
        console.log("_________________________________");
        console.log("Creating index.html file....");
        console.log("_________________________________");

        writeFileAsync("./dist/index.html", finalPage);

        console.clear();
        console.log("_________________________________");
        console.log("index.html file created successfully");
        console.log("_________________________________");
    } catch (err){
        return console.log(err);
    }
};

// begin app 
master();