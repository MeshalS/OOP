// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name, id, email, office) {
        super()
        this.name = name;
        this.id = id;
        this.email = email;
        this.office=office
    }

  getRole(){
      return "Manager"
  }
  getOfficeNumber(){

    return this.office

  }
};
module.exports=Manager
