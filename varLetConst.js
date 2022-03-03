// purpose: explore the multi-faceted behaviors + see the uniqueness, if we ever want to call/declare a variable(s) using either "Var / Let / Const"
// what we'll learn: the various oppurtunities/tricks/tips, and/or constraints when declaring variables, with a label(s); Var, Let, Const
// guess i should start now

// lets you reassign value, using same label to define a variable. when using "var"
var thisIsCalledALabel = "playing"

var thisisCalledALabel = "orrr should it be this?"

//lets console.log this out
console.log(thisisCalledALabel); //<-- terminate this statement with a semi :) then, run server from terminal

// orrr should it be this? <-- this is returned
// tested. so yes. variables can be reassigned, when using "var"

//you can also reassign the value without even delaring the "var" before the label when defining  variable //
// for example

var thisIsCalledALabel = "playing?";

thisIsCalledALabel = "yes, playing maybe? and it works";

console.log(thisIsCalledALabel);

// ...see? :) 
// it works? I guess :)

// "var" is Locally and Globally accessisable. what does that even mean?
// well... pretty much means when you console log, and you have a variable inside another "if/else" block statement (or whatever block statement you want to call it idc). ---> when you console.log out the function with the nested variable, it will still return the set value of that variable... even if inside a block statement of your choise
// for example:

//local object, (localllllly objectiableeee?)
function thisPartTypedHereIsCalledALabelOkieeee() {

    var definingAVariableOutsideAnIfBlockStatement = "This is the valued of a nested variable outside another block statement";

    if (true) {
        console.log(definingAVariableOutsideAnIfBlockStatement);
    }
}

//callling the function
thisPartTypedHereIsCalledALabelOkieeee();

// This is the valued of a nested variable inside another block statement <-- is what we returned

//lets talk about Hoisting! :D

thisIsHoistingAkaCallingBeforeDeclaring();

function thisIsHoistingAkaCallingBeforeDeclaring() {
    console.log("we just called this function, before even declaring it. and that's ok");
}




