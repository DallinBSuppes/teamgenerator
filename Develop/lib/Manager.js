// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee")



class Manager extends Employee {
    constructor(name, id, email, github){
        extend(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Manager";
    }
}
module.exports = Manager;