// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee")



class Intern extends Employee {
    constructor(name, id, email, github){
        extend(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Intern";
    }
}
module.exports = Intern;