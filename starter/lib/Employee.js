// Define the Employee class
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    // Prompt to get the employee's name
    getName() {
      return this.name;
    }
  
    // Prompt to get the employee's ID
    getId() {
      return this.id;
    }
  
    // Prompt to get the employee's email
    getEmail() {
      return this.email;
    }
  
    // Prompt to get the employee's role
    getRole() {
      return "Employee";
    }
  }
  
  // Export the Employee class
  module.exports = Employee;
