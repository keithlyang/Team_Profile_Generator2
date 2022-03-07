// To validate email in inquirer


const inquirer = require("inquirer");
const Manager = require("./workers/Manager");
const Engineer = require("./workers/Engineer");
const Intern = require("./workers/Intern");
const generateHTML = require("./html")
const arrEmployees = [];

// Displays questions for adding manager
const addManager = () => {
    inquirer.prompt([
        {  // team manager’s name, employee ID, email address, and office number
            type: 'input',
            message: 'What the manager name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What the role id?',
            name: 'role'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: "What the manager's office number?",
            name: 'officeNum'
        },
    ]).then(({ name, role, email, officeNum }) => {
            const addedManager = new Manager(name, role, email, officeNum)
            arrEmployees.push(addedManager)
            addEmployee();
        }

        );
}

const addEngineer = () => {
    inquirer.prompt([
        {  // team engineer’s name, ID, email, and GitHub username,
            type: 'input',
            message: 'What the engineer name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What the role id?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: "What the github username?",
            name: 'gitHub'
        },
    ]).then((answers) => {
            const addedEngineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
            arrEmployees.push(addedEngineer)
            // go back to start
            addEmployee();
        }

        );
}

const addIntern = () => {
    inquirer.prompt([
        {  // team intern’s name, ID, email, and school
            type: 'input',
            message: 'What the engineer name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What the role id?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: "What the school you graduated from?",
            name: 'school'
        },
    ]).then(({ name, id, email, school }) => {
            const addedIntern = new Intern(name, id, email, school)
            arrEmployees.push(addedIntern)
            addEmployee();
        }

        );
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What kind of new employee are you adding?",
            choices: ["Engineer", "Intern", "No more"],
            name: "employeeToAdd"
        }
    ]).then(({ employeeToAdd }) => {
        switch (employeeToAdd) {
            case "Engineer":
                addEngineer();
                break;

            case "Intern":
                addIntern();
                break;

            default:
                //generate the HTML
                generateHTML(arrEmployees)
                // console.log(arrEmployees)
                break;
        }
    })
}

addManager();
