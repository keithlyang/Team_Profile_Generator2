const Employee = require("./Employee")

class Manager extends Employee {
  constructor(name, id, email, officeNum ){
    // Manager constructor needs:  name, id, email, office number
    super(name, id, email, officeNum,);
    
    this.officeNum = officeNum;
  }
  getRole() {
    return "Manager"
  };

  getofficeNum(){
    return this.officeNum;
  }
}

module.exports = Manager;