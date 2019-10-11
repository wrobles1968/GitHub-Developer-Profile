const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

const questions = [
  
];

function writeToFile(fileName, data) {
 
}

// init means initialize -- i.e. initialize program
// this function will prompt user for their github username and also askthem what their favorite color is
function init() {
    
    inquirer
      .prompt([
          {
        message: "Enter your GitHub username:",
        name: "username"
      },
      {
        message: "Please select a color:",
        choices: ["blue", "red", "orange", "green"],
        type: 'list',
        name: "favColor"
      }]
      ).then(function(answers ) {
          console.log("\n------------")
          console.log(answers);
          // What is answers? an array or object?  OBJECT that contains user's responses/answers
        // How do I access username?  
        // How do I access the selected color?

        
        const queryUrl = `https://api.github.com/users/${answers.username}`;
    
        axios.get(queryUrl).then(function(res) {
            console.log("\n------------")
            console.log(res.data) 
            console.log("\n------------")

            let usersInfoObject = res.data;
            let avatar = usersInfoObject.avatar_url;
            // extract all info you need from usersInfoObject 
            
        });
});
}

init();



// const person = {
//     name: 'Walter'
// }

// console.log(person); 
// // { name: 'Walter' }

// console.log(person.name);
// // 'Walter'

// const answers = {
//     username: 'someUsername',
//     favColor: 'someColor'
// };

// // How do I accessccess username? 
// // Pleas print 'someUsername' to the console.
// console.log(answers.username)
// 'someUsername'

// How to I access favColor?
