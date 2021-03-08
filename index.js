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
            empStr = empStr + html.generateCard(empArr[i]);
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

async function prompt() {

    let response = "";

    do{
        try{
            let response1 = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter the employee's name?: ",
                validate: function validateName(name) {
                    return name !== '';
                }
            },
            {
                type: "input",
                name: "id",
                message: "Please enter the employee's ID?: ",
                validate: function validateName(name) {
                    return name !== '';
                }
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the employee's email address? ",
                validate: function validateEmail(name) {
                    return validator.validate(name);
                }
            },
            {
                type: "list",
                name: "role",
                message: "What what is the employee's role?",
                choices: [
                    "Engineer",
                    "Intern",
                    "Manager"
                ]
            }
        ]);

        let response2 =""

        if (response1.role === 'Engineer') {
            response2 = await inquirer.prompt([
                {
                    type: "input",
                    name: "a",
                    message: "Please enter the employee's github username?",
                    validate: function validateName(name) {
                        return name !== ''; 
                    }
                }
        ]);

        const engineer = new Engineer(response1.name, response1.id, response1.email, response2.a);
        empArr.push(engineer);

        } else if (response1.role === 'Intern') {
            response2 = await inquirer.prompt([
                {
                    type: "input",
                    name: "b",
                    message: "Please enter the school the employee is attending?",
                    validate: function validatName(name) {
                        return name !== '';
                    }
                }
            ]);

            const intern = new Intern(response1.name, response1.id, response1.email, response2.b);
            empArr.push(intern);

        } else if (response1.role === "Manager") {
            response2 = await inquirer.prompt([
                {
                    type: "input",
                    name: "c",
                    message: "Please enter the employee's office number?:",
                    validate: function validateName(name) {
                        return name !== '';
                    },
                },
            ]);

            // Add to team Array
            const manager = new Manager(response1.name, response1.id, response1.email, response2.c);
            empArr.push(manager);
        }
    } catch (err) {
        return console.log(err);
    }

    response = await inquirer.prompt([
        {
            type: "list",
            name: "finish",
            message: "Would you like to continue?",
            choices: [
                "Yes",
                "No"
            ]
        },]);

    } while (response.finish === "Yes");
}

// begin app 
master();