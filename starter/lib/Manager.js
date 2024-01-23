// Import the Employee class
const Employee = require("./Employee");

// Manager class that extends Employee
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Call the constructor of the parent class (Employee)
    super(name, id, email);

    // Property specific to Manager
    this.officeNumber = officeNumber;
  }

  // Method specific to Manager
  getOfficeNumber() {
    return this.officeNumber;
  }

  // Method from the parent class
  getRole() {
    return "Manager";
  }
}

// Export the Manager class
module.exports = Manager;