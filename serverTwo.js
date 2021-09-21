//here, we are demonstrating how to read a .text file
// first, we import the prebuilt 'fs' module that comes with node.js
const fs = require('fs');

fs.readFile('helloWorld.txt', (err, data) => {
    if (err) { //<-- line 6 thru 9 is what we call "error handling"
        console.error(err);
        return;
    }
    console.log(data.toString()); //<-- to grab "Hello World" in the .txt file, we need a ".toString()". it now shows the console log.
});
//to see the asynchronus nature of node lets create another console.log 
console.log('testing asynchronous nature of node');

// under the hood asynchornous explanation: node reads the file first on line 5
// while node is busy reading the file first, its going to move on execute our console log on line 13.
// once node is done reading the file, node will return the data on line 10
// this is why our console.log on line 13 appears first, before our "Hello World" txt file