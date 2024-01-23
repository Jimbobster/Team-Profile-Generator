// Import the Employee class
const Employee = require("./Employee");

// Intern class that extends Employee
class Intern extends Employee {
  constructor(name, id, email, school) {
    // Call the constructor of the parent class (Employee)
    super(name, id, email);

    // Additional property specific to Intern
    this.school = school;
  }

  // Method specific to Intern
  getSchool() {
    return this.school;
  }

  // Method from the parent class
  getRole() {
    return "Intern";
  }
}

// Export the Intern class
module.exports = Intern;