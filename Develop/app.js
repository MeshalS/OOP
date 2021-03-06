
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

const employees = [];


let questions = [
    {
        type: "list",
        message: "What is the employee role?",
        choices: ['Engineer', 'Manager', 'Intern'],
        name: "role"

    },
    {
        type: "input",
        message: "What is the employee name?",
        name: "name"
    }, {
        type: "input",
        message: "What is the employee email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the employee id?",
        name: "id"
    },
    {
        when: answers => answers.role == 'Engineer',
        type: "input",
        message: "What is your github?",
        name: "github",
    },
    {
        when: answers => answers.role == 'Manager',
        type: "input",
        message: "What is your office number?",
        name: "office"
    },
    {
        when: answers => answers.role == 'Intern',

        type: "input",
        message: "What is your schoolName?",
        name: "school"
    }
];



// creating the function for Int
async function init() {

    inquirer.prompt(questions)
    .then(res => {
        generateInstance(res)
        //console.log(data)
        //   filecreation('./templates/team.html', html);
    });

}
// file write 
const filecreation = util.promisify(fs.writeFile);

function generateInstance(instance) {
    let employ = new Employee(instance.name, instance.id, instance.email);
    switch (instance.role.toLowerCase()) {
        case 'engineer':
            employ = new Engineer(instance.name, instance.id, instance.email, instance.github)
            break;
        case 'manager':
            employ = new Manager(instance.name, instance.id, instance.email, instance.office)
            break;
        case 'intern':
            employ = new Intern(instance.name, instance.id, instance.email, instance.school)
            break;
        default:
            employ = new Employee(instance.name, instance.id, instance.email);
            break;

    }
    employees.push(employ)
   // console.log(employ, employees)
    inquirer.prompt({
        type: "confirm",
        message: "do you want to add another one?",
        name: "addAnother"
    }).then(function (answers) {
        if (answers.addAnother) {
            init()
        } else {
            const html = render(employees);
            //console.log(html);
            filecreation(outputPath, html);
        }
    })
}
init();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
