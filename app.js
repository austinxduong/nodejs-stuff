//app.js is our main module
function helloWorld(firstParameter) {
    console.log("Hello " + firstParameter);
}
//call the function see line 6

helloWorld('returning first parameter');

// run node on terminal, and pass file name (app.js) as an argument
// (ie. node app.js)
// What happends under the hood? Node passes app.js to googles' v8 engine for execution (a c++ program that uses v8)

// now, lets load the module we just create (login.js)
// we use the 'require' function to load modules
// it takes in a single argument, which is the path of the module for login.js
// require('./login')

// now lets just turn it into a variable
const login = require('./login');
// console.log(login);
login.log('Hi it\'s austi, im loading a module');


// in the terminal, we should see a returned object for our login module. verified as a console
// now, lets call the login module in app.js
// we now see "hi it's austi" in the terminal 

