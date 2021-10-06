//here, we are demonstrating how to read a .text file
// first, we import the prebuilt 'fs' module that comes with node.js
const fs = require('fs') // Global Object
const fsPromises = fs.promises; // Global Object




fs.readFile('helloAustiWorld.txt', (err, data) => {
    if (err) { //<-- line 6 thru 9 is what we call "error handling"
        console.error(err);
        return;
    }
    console.log('reading a file using callback function style', data.toString()); //<-- to grab "Hello World" in the .txt file, we need a ".toString()". it now shows the console log.
});
// // to see the asynchronus nature of node lets create another console.log 
// console.log('testing asynchronous nature of node');

// under the hood asynchornous explanation: node reads the file first on line 5
// while node is busy reading the file first, its going to move on, & execute our console log on line 13.
// once node is done reading the file on line 5, node will return the data on line 10
// this is why our console.log on line 13 appears first, before our "Hello World" txt file


// now... lets promisify, instead of using the callback function syntax
// a promise makes handling asynchronus operations easier, a placeholder for a task that hasn't finished yet, and will be executed later (or in the future). Hence "promise".
fs.promises.readFile("helloAustiWorld.txt")
.then(function(result) {
    console.log("reading a file promise style"+result);
})
.catch(function(error){
    console.log(error);
})

// async function readingAFileIdkWhatImDiong() {
//     try {
//         const readThisData = await fs.readFile('helloAustiWorld.txt');
//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// } //total fail, it didn't work lol

// async function readingThisFile() {
//     const fsPromises = require('fs').promises;
//     const data = await fsPromises.readFile('helloAustiWorld.txt')
//         .catch((err) => console.error ('file not read', err));
// }
// console.log(data.toString());

async function readFile(readingAustiFile) {

    const fs = require('fs').promises;

    try {
        const data = await fs.readFile(readingAustiFile);
        console.log("reading a file async/await style", data.toString());
    } catch (error) {
        console.error(`Error Reading File: ${error.message}`);
    }
}

readFile('helloAustiWorld.txt');
