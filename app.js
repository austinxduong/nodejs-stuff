function helloWorld(firstParameter) {
    console.log("Hello " + firstParameter);
}
//call the function see line 6

helloWorld('returning first parameter');

// run node on terminal, and pass file name (app.js) as an argument
// (ie. node app.js)
// What happends under the hood? Node passes app.js to googles' v8 engine for execution (a c++ program that uses v8)