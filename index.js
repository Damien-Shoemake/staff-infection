//importing the html template, questions for inquirer and setting up fs and inquirer so the project can run in node.js
const inquirer = require('inquirer')
const fs = require('fs')
const template = require('./template')
const { managerQuestions, engineerQuestions, internQuestions } = require('./questions')

//importing classes
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Employee = require('./lib/Employee')

//store employee objects
const employeeObjects = []

//function to write the file to the /dist/ folder
const writeFile = (content) => {

    fs.writeFile('./dist/index.html', content, (err) => {
        if(err) {
            console.error(err.message)
        } else {
            console.log('HTML successfully created')
        }
    })

}

//init function for the program
//ask for the manager first, then after that ask for any other additional employees

const init = () => {
    askManagerQuestions()
    
}


const askManagerQuestions = () => {
    inquirer.prompt(managerQuestions)
    .then(( answers ) => {
        answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeeObjects.push(answers);
        console.log(employeeObjects)
        return chooseEmployee();
    })
}

const chooseEmployee = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'nextEmployee',
        message: "Please choose the next team member you're adding",
        choices: [
            {name: "Engineer", value: "addEngineer"},
            {name: "Intern", value: "addIntern"},
            {name: "I'm done building my team", value: "done"}
        ]
    }])
    .then( answer => {
        // sends correct prompts based on the employee type
        if (answer.nextEmployee === 'addEngineer') { 
            askEngineerQuestions(); 
        }
        else if (answer.nextEmployee === 'addIntern') { 
            askInternQuestions(); 
        }
        else {
            // converts users inputs into HTML
            let html = template(employeeObjects);
            writeFile(html);
        }
    })
}

const askEngineerQuestions = () => {
    inquirer.prompt(engineerQuestions)
    .then((answers) => {
        answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeeObjects.push(answers)
        return chooseEmployee();
    })
}

const askInternQuestions = () => {
    inquirer.prompt(internQuestions)
    .then((answers) => {
        answers = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeeObjects.push(answers)
        return chooseEmployee();
    })
}

init()