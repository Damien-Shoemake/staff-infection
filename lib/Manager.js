const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {

        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = role;

    }

    //manager specific function to return the office number of the Manager
    getOfficeNumber() {

        return this.officeNumber;

    }

    //overrides getRole() to return 'Manager' instead
    getRole() {
        return this.role;
    }
}

module.exports = Manager;