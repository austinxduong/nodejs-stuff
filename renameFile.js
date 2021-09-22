const { rename } = require ('fs'); //<-- we are importing "rename" from 'fs' module

rename("helloWorld.txt", "helloAustiWorld.txt", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("we have renamed the helloWorld.txt file to helloAustoWorld")
});

// after running our console on line 8, our helloWorld.txt file has been deleted
// in the left of the file directory, we notice the "helloAustiWorld.txt" file has been born (its just been renamed) okay sorry that was kinda dramatic