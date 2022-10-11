//questions for inquirer, put in a seperate file to keep the index.js from getting bloated

const engineerQuestions = [

    {
        type: 'input',
        name: 'name',
        message: "What is the name of the engineer you're adding?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the ID of the engineer you're adding?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the email of the engineer you're adding?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the github user name of the engineer you're adding?"
    }

]

const internQuestions = [

    {
        type: 'input',
        name: 'name',
        message: "What is the name of the intern you're adding?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the ID of the intern you're adding?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the email of the intern you're adding?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the school of the intern you're adding?"
    }

]

const managerQuestions = [

    {
        type: 'input',
        name: 'name',
        message: "What is the name of the manager you're adding?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the ID of the manager you're adding?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is email of the manager you're adding?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the office number of the manager you're adding?"
    }

]

module.exports = {
    managerQuestions,
    internQuestions,
    engineerQuestions
};