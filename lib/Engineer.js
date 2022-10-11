const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email);
        this.github = github;
        this.role = "Engineer";

    }

    //engineer specific function to return github
    getGithub() {

        return this.github;

    }

    //override getRole() to return 'Engineer'
    getRole() {

        return this.role;

    }
}

module.exports = Engineer;