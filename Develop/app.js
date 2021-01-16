const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


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
const managerQuestion = {
    type: "input",
    name: "name",
    message: "Please enter office number: ",

};

const engineerQuestion = {
    type: "input",
    name: "name",
    message: "Please enter github username: ",

};

const internQuestion = {
    type: "input",
    name: "name",
    message: "Please enter school attended: ",

};

const genericQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter name: ",

    },
    {
        type: "input",
        name: "id",
        message: "please enter ID",

    },
    {
        type: "input",
        name: "email",
        message: "please enter email"
    }
];

const newEmployeeOptions = {
    type: "list",
    name: "role",
    choices: [
        "Intern",
        "Engineer",
        "Manager",
        "Done",
    ],
}

function managerQuestionFunction() {
    console.log("Lets get manager information!")
    return inquirer.prompt(managerQuestion);
};

function engineerQuestionFunction(){
    console.log("Please answer questions about desired enineer: ")
    return inquirer.prompt(engineerQuestion);
};

function internQuestionFunction(){
    console.log("Please answer questions about desired intern: ");
};

function genericQuestionFunction(){
    return inquirer.prompt(newEmployeeOptions)
};

function addEmployee(){
    return inquirer.prompt("Would you like to add employee to team? If no press done!");
}

async function createManager() {
    try {
        const managerAnswers = await managerQuestionFunction();
        const genericManagerAnswers = await genericQuestionsFunction();
        const manager = new Manager(genericManagerAnswers.name, genericManagerAnswers.id, genericManagerAnswers.email, managerAnswers.officeNumber);

        employees.push(manager);

        createEmployee();
    } catch(err) {
        console.log(err);
    }
    }

async function createEmployee() {
    try {
        const employeeRole = await addEmployee();
        if (employeeRole.role === "Intern") {
        createIntern();
        } else if (employeeRole.role === "Engineer") {
        createEngineer();
        } else if (employeeRole.role === "Done") {
        console.log("All done!");
        const html = await render(employees);
        fs.writeFileSync(outputPath, html);
        }
    } catch(err) {
        console.log(err);
    }
 }

async function createEngineer() {
    try {
        const engineerAnswers = await engineerQuestionFunction();
        const genericEngineerAnswers = await genericQuestionsFunction();
        const engineer = new Engineer(genericEngineerAnswers.name, genericEngineerAnswers.id, genericEngineerAnswers.email, engineerAnswers.github);

        employees.push(engineer);

        createEmployee();
    } catch(err) {
        console.log(err);
    }
    }
    async function createIntern() {
    try {
        const internAnswers = await internQuestionFunction();
        const genericInternAnswers = await genericQuestionsFunction();
        const intern = new Intern(genericInternAnswers.name, genericInternAnswers.id, genericInternAnswers.email, internAnswers.school);

        employees.push(intern);
        createEmployee();
    } catch(err) {
        console.log(err);
    }
    }
  
createManager(); 

