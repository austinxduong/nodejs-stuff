const { unlink } = require ('fs');

unlink("scaryMonsterFile.txt", (err) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log("we just deleted the scaryMonsterFile.txt!");
});

// after running the console, on the left, we see the scaryMonsterFile.js file is now delted. woooahhh