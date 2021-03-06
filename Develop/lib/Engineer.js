// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Employee class

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super()
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getRole() {
        return "Engineer"
    }

    getGithub() {
        return this.github
    }
};
module.exports = Engineer



// * getName()
// * getId()
// * getEmail()
// * getRole()