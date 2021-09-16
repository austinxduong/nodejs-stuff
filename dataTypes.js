//** typeof tell us what data type the variable is (so cool!)
//string data type
const name1 = 'austi'; //**side note, I found out "name" is deprecated. I learned this is a "reserved keyword" in javaScript
console.log(name1)

//numeric data type
const num2 = 1234;
const num3 = 43.21; //<--- if decimal is added, this is called integer data type
console.log(num2, num3)
console.log(typeof num2)

//undefined data type
// this mean no value "has yet" been assigned to the variable
var hey3;
console.log(typeof hey3)

//boolean datatype
const bool0 = true;
const bool1 = false;

const bool2 = 1; //<-- 1 is same as falsey
const bool3 = 0; //<-- 0 is same as truey

//null data type
// this means the value is "exactly/intentionally/explicity equal to nothing"
const hey2= null;
console.log(typeof hey2);

///all the above data types, are what we call "primitive data types".

// Now, we will learn about "Reference data types"
// Objects, Arrays, & Functions.

//object example:
const austi = {             
    age: 22222222,
    hungry: true
}
console.log(austi);

//now, we can access/extract data from the object, in 2 ways.
//1. Dot notation, for example
console.log(austi.age);
console.log(austi.hungry);

//we can also change these values
austi.age= '11';
console.log(austi.age);

austi.hungry = false;
console.log(austi.hungry);

//2. Bracket notation, for example
austi['age'] = 99;
console.log(austi.age);

austi['hungry'] = true;
console.log(austi.hungry);

//tbh. dot notation just looks cleaner since its shorter lolololol

//Array example:
const pizza = ['pepperoni', 'cheese', 'supreme']
console.log(pizza);

// to access elements inside the array, we target by it's index
// to access the first elements, it will start with 0
console.log(pizza[0]);

//because javascript is a dynamic language, variables can change at runtime
// ie, we can add an extra element to an array
// for example
const pizza2 = ['pepperoni', 'cheese', 'supreme'];
pizza2[3] = 'greek styled';
console.log(pizza2);

//we can also access the length of elements inside the array
const pizza3 = ['pepperoni', 'cheese', 'supreme'];
pizza3[3] = 'greek styled';
console.log(pizza3.length);

// Function example:
// functions execute a task, or calculates a value
// now we write a statement inside the curlies, aka the "logic" of the function
// we have to remember to terminate the statement with a semicolon
// below, we just declared a function
function austiFavRestaurant() {
    console.log('Fogo De Chao');
}
//to call the function, we do this
austiFavRestaurant();

// lets inject a variable inside the parentheses, as a parameter. line 97
// this variable only works inside this function, and unaccessible outside this function. line 97
// now, we will concactenate two strings by adding the variable. line 98
// then, we will define the variables value (inside the parenthesis), when we call the function. line 101
function austiFavRestaurant2(flavor) {
    console.log('Fogo De Chao' + flavor)
}

austiFavRestaurant2(' is Brazialian Flavored');
// 'is Brazilian Flavored' is considered an argument to the austiFavRestaurant2 function
// 'flavor' is a parameter to the austiFavRestaurant2 function

function austiFavRestaurant3(flavor, taste) {
    console.log('Fogo De Chao' + flavor + ' ' + taste)
}

// adding 2 concactenation 
austiFavRestaurant3(' is Brazilian Flavored', 'and yummy');

//^^ the 1st Function example is "performing a task"

//lastly, lets create a function that calculate a value
function add(number) {
    return number + number;
}
console.log(add(12));