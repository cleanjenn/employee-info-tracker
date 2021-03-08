// parent class with properties and methods for: name, ID, email, getName(), getid(), getEmail(), getRole(). 
class Employee {
    //propterties
    constructor(name, id, email) {    
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee"
    }
    // methods
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.title
    }
 }

module.exports = Employee;  //ability to export to other files 