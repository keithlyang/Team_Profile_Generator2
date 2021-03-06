const Employee = require("./Employee")

class Intern extends Employee {
  constructor(name, id, email, school ){
    // Intern constructor needs:  name, id, email, office number
    super(name, id, email, school,);
    
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern"
  }
}

module.exports = Intern;