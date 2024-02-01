# Team-Profile-Generator

## Description
This application will take in information about employees on a software engineering team, then generate an HTML webpage that displays summaries for each person.

## Installation

<li>Open the files in Visual Studio Code
<li>Open the Terminal
<li>Type node index.js and hit enter
<li> Input the required information for each employee
<li> Once all the employees have been added, click finish build and the HTML will be created in the output folder

## Usage
When a user starts the application then they are prompted to enter the team manager’s :
<li>Name
<li>Employee ID
<li>Email address
<li>Office number

When a user enters those requirements then the user is presented with a menu with the option to :
<li>Add an engineer
<li>Add an intern
<li>Finish building the team

When a user selects the engineer option, then a user is prompted to enter the following and then the user is taken back to the menu :
<li>Engineer's Name
<li>ID
<li>Email
<li>GitHub username

When a user selects the intern option, then a user is prompted to enter the following and then the user is taken back to the menu :
<li>Intern’s name
<li>ID
<li>Email
<li>School

When a user decides to finish building their team, then they exit the application, and the HTML is generated into the output folder. If no output folder is present, then one is created.

## Mock-Up
<li>The following image shows a mock up of the sample team.html appearance and functionality : 

HTML : ![My-Team](https://github.com/Jimbobster/Team-Profile-Generator/assets/146639118/f1beaec7-dfea-4663-83b6-d94a7625850c)

Video Walkthrough : https://github.com/Jimbobster/Team-Profile-Generator/assets/146639118/41ceab78-f6dc-46b3-94ab-e71f18a68f1f

<li>The URL of the repository containing the code : https://github.com/Jimbobster/Team-Profile-Generator

## Credits
Tests run using : [Jest package](https://www.npmjs.com/package/jest)

Input collected using : [Inquirer](https://www.npmjs.com/package/inquirer)

