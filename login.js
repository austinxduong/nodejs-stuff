// lets declare a variable
const url = 'http://test.com/login'; //<-- not a real url lol.

// here, we are creating a function, to send an HTTP request.
function log(message) {

console.log(message);
}

// we added a method called "log", to the exports object.
// then we set it to the log function, that we just defined on line 5.
// in short, we just exported an object, with a single method called "log".
module.exports.log = log;

// we can do the same for the variable defined on line 2.
// we can rename to endPointUrl
// under the hood, we have a defined variable called url... internally in this module (login.js).
// but by renaming to endPointUrl, this object will now be exported as endPointUrl. 
// however this is purely implementation detail, and just an example.
// we just want to export this module and use it in app.js
module.exports.endPointUrl = url;