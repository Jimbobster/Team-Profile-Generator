// Import the Employee class 
const Employee = require("./Employee");

// Define the Engineer class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // Call the constructor of the parent class
    super(name, id, email);
    
    // Property specific to Engineer
    this.github = github;
  }

  // Method specific to Engineer
  getGithub() {
    return this.github;
  }

  // Method from the parent class
  getRole() {
    return "Engineer";
  }
}
// Export the Engineer class
module.exports = Engineer;
