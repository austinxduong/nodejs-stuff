// we can destructure, instead of importing the entire 'fs' module
// destructuring means, we only want to pull out a nested value from an object/array. in this case 'fs'.
const { writeFile, writeFileSync } = require('fs');

const newText = 'new Hello World'

writeFile('helloWorld.txt', newText, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("New Text Written, check hellowWorld.txt file")
})