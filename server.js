// git add . && git commit -m "Node.js Basics" && git push

// How Node.js is different from Vanilla JavaScript
// 1 - Node Runs on a server - not in the browser (backend not frontend)
// 2 - The console is the terminal window

 console.log("Hello World!");
 // 3 - Global object instead of window object



//  TERMINAL
//  (base) Taj786@Tajs-MacBook-Pro backend % node
//  Welcome to Node.js v18.20.5.
//  Type ".help" for more information.
//  > 
//  (To exit, press Ctrl+C again or Ctrl+D or type .exit)
//  > 
//  (base) Taj786@Tajs-MacBook-Pro backend % node server
//  Hello World!
//  (base) Taj786@Tajs-MacBook-Pro backend % 


 console.log(global)
 // 4 - Node has its own common core  modules that will explore
// 5 - Node uses CommonJS modules instead of ES6 modules  


const os = require('os') 
const path = require('path')  
 
console.log(os.type()) // prints the operating system type  
console.log(os.version()) // prints the version of the operating system
console.log(os.homedir()) // prints the home directory of the current user

console.log(__dirname) // prints the directory name of the current module
console.log(__filename) // prints the file name of the current module

console.log(path.dirname(__filename)) // prints the directory name of the current module
console.log(path.basename(__filename)) // prints the file name of the current module
console.log(path.extname(__filename)) // prints the file extension of the current module  

console.log(path.parse(__filename)) // prints the parsed object of the current module