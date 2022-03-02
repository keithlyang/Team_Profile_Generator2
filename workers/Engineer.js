const Employee = require("./Employee")

class Engineer extends Employee {
  constructor(name, id, email, gitHub ){
    // Engineer constructor needs:  name, id, email, office number
    super(name, id, email);
    
    this.gitHub= gitHub;
  }

getGithub() {
  return this.gitHub;
}

  getRole() {
    return "Engineer"
  }
}

module.exports = Engineer;