const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school, role){

        super(name, id, email);
        this.school = school;
        this.role = role;

    }

    //overrides getRole() to return 'Intern'
    getRole() {

        return this.role

    }

    //Intern specific function to return whatever school is entered
    getSchool() {

        return this.school

    }
}

module.exports = Intern;