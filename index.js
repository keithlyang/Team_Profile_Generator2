// To validate email in inquirer


const inquirer = require("inquirer");
const Manager = require("./workers/Manager");
const Engineer = require("./workers/Engineer");
const Intern = require("./workers/Intern");
// const { start } = require("repl");
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

            // missing something in here
            arrEmployees.push(addedManager)
            // go back to start
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
            name: 'gitHubUserName'
        },
    ]).then(({ name, id, email, gitHubUserName }) => {
            const addedEngineer = new Engineer(name, id, email, gitHubUserName)

            // missing something in here
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

            // missing something in here
            arrEmployees.push(addedIntern)
            // go back to start
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

// // Begin the app
// const start = () => {
//     inquirer.prompt([
//         {
//             type: "list",
//             message: "Choose an option:",
//             choices: ["Add Employee By Role", "View Employee By Role", "View Employee By Email",],
//             name: "initialChoice"
//         }
//     ]).then(resp => {
//         switch (resp.initialChoice) {
//             case "Add Employee By Role":
//                 break;

//             case "View Employee by Role":
//                 break;

//             case "View Employee By Email":
//                 break;

//             default:
//                 break;
//         }
//     })
// }



addManager();
// return inquirer
//   .prompt(
//     {
//       message: "Please enter your email",
//       name: "email",
//       type: "input",
//       default: () => { },
//       validate: function (email) {

//         valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

//         if (valid) {
//           console.log("Great job");
//           return true;
//         } else {
//           console.log(".  Please enter a valid email")
//           return false;
//         }
//       }
//     }
//   );