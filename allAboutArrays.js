// purpose: general content hub, about arrays. because we love arrays.
// whats an array?
// an array is a list of values, that store data. we can add/update/change, etc these data(s) in many flavors.

// we will be adding an extra element to an array, as it's 3rd index. 
// our 3rd index will be named 'spicy greek styled'.
// to add, we use .push() array method. push() is also a pre-built javascript function we can  use out of the box. (pretty cool!)
const pizza = ['pepperoni', 'cheese', 'supreme'];
pizza.push('lemon zest greek styled');
console.log(".push() method-->",pizza);

// but... what if we want to add 'lemon zest greek styled' as the first one?
// we can use an array method called 'unshift'.
const pizza0 = ['pepperoni', 'cheese', 'supreme'];
pizza0.unshift('lemon zest greek styled');
console.log(".unshift() method-->",pizza0);

// but... what if only want to eat 'pepperoni', and 'cheese' pizza? no thanks to supreme for today (no veggies today pls D:)
// we can use .pop() array method.
// the tricky part here.... we don't need to pass an arugment. the last index/element will automatically be deleted.

const pizza1 = ['pepperoni', 'cheese', 'supreme'];
pizza1.pop()
console.log(".pop() method-->",pizza1);

// but... what if I only want to eat 'cheese' and 'supreme' pizza? 'pepperoni' pizza makes my stomach hurt for today for some reason.
// we can use .shift() array method.
// this array method behaves the same for .pop().

const pizza2 = ['pepperoni', 'cheese', 'supreme'];
pizza2.shift()
console.log(".shift() method-->",pizza2);

// .slice() slices a chunk of an array, and returns that chunk.
// but what chunk? all/each elements between the first index you select, to the last (last index isn't included in the chunk).
// for example, a pizza slice. the tip of the pizza slice is a little burnt (don't include), and the crust is burnt too (don't include).
// result: in our console we returned everything between index [1], to index [5]; BUT.. the first index is included in array, last index is not.
// this happens when we pass in two index parameters as an arguement.
const burntPizza = ['tip', 'tip middle', 'middle', 'top middle', 'top', 'crust'];
console.log(".slice() method -->",burntPizza.slice(1,5));

// however... lets say the crust isn't burnt, and we want everything but the tip from this slice of pizza (yummy! garlic butter sauce please).
// now... for the very last index to be included, we just passed in one index parameter, as an argument.
const notBurntCrustPizza = ['tip', 'tip middle', 'middle', 'top middle', 'top', 'crust'];
console.log(".slice() method-->",notBurntCrustPizza.slice(1));

// finally.... if the whole pizza is not burnt and totally yummy?
// we can make a whole carbon copy of the array. Simply pass no argument in the slice array method.
const notBurntYummyPizza = ['tip', 'tip middle', 'middle', 'top middle', 'top', 'crust'];
console.log(".slice() method-->",notBurntYummyPizza.slice());

// .splice() array method pretty much is identical (twins).
// ... the difference is that it mutates (updates) the original array.

const burntPizza0 = ['tip', 'tip middle', 'middle', 'top middle', 'top', 'crust'];
console.log(".splice() method-->",burntPizza0.splice(1,5));
console.log(".splice() method-->",burntPizza0); //<-- the array is mutated, and 'tip' element is 'spliced into it's own seperated array.

const burntPizza1 = ['tip', 'tip middle', 'middle', 'top middle', 'top', 'crust'];
console.log(".splice() method -->",burntPizza1.splice(-1)); // <-- '-1' removes last element(index) aka 'crust'.
console.log(".splice() method-->",burntPizza1); //<-- our mutated array no longer has 'crust'.

// we can also use .splice to inject/insert elements, without deleting anything (elements).
// the '3' in our argument, tells the code "FROM where" to inject the new element.
// '0' is represent out deleteCount. in other words, from index 3, how many elements will be deleted after index 3?
// we don't want any elements deleted after index 0. so we set it to 0.
// if we want to delete 'engineer', we set change 0 to 1. if we want delete both 'software', and 'engineer' we set to 2.
// however, if we go past 3, no other elements will be deleted beyond that point. because we set the 'FROM where' to 3.
const austi = ['austi', 'is', 'a', 'software', 'engineer'];
austi.splice(3, 0, 'chill');
console.log(".splice() method-->",austi);

//.reverse() will reverse the array
const taco = ['tortilla', 'refried beans', 'grilled chicken', 'cheese', 'salsa', 'hot sauce'];
console.log(".reverse() method-->",taco.reverse());
console.log(".reverse() method-->",taco); // <-- the array gets mutated when using .reverse() array method.

//.concat() array method, joins two new arrays together.
// lets cook up 1 huge array of; austi + taco.
// we get an array of mixed taco ingredients, and austi being a chill software engineer.
const austiTaco = taco.concat(austi)
console.log(".concat() method-->",austiTaco);

// .join() method returns an array of a single string, connected by a character you choose.

const preschoolSingleFileLine = ['student1', 'student2', 'student3', 'student4', 'student5'];
console.log(".join() method-->",preschoolSingleFileLine.join('-')) //<--- now lets make sure all students are in a single file line.
//our console log returns this: // student1-student2-student3-student4-student5

// forEach method is considred a higher order function (meaning were passing a callback function as an argument).
// forEach iterates through each element, and processes the callback function for each element.
const checkingAccounts = ['-100', '20.00', '-3.33', '4.44'];
let i = 'austi\'s';

    checkingAccounts.forEach(function(checkingAccountParam, index, array){
        if(checkingAccountParam < 0) {
            console.log(".forEach() method-->",`${i} Checking Account: You Withdrew ${checkingAccountParam}`);
        } else{
        console.log(".forEach() method-->",`${i} Checking Account: You Deposited ${checkingAccountParam}`);
        }
});

/*  below is our returned values
    austi's Checking Account: You Withdrew -100
    austi's Checking Account: You Deposited 20.00
    austi's Checking Account: You Withdrew -3.33
    austi's Checking Account: You Deposited 4.44 
*/

// .map() array method is also a higher order function. meaning we pass in a a call back function as a parameter.

const creditToCash= '$';

const checkingAccountCash= checkingAccounts.map(function(convert){
    return creditToCash + convert;
});

console.log(".map() method-->",checkingAccounts);
console.log(".map() method-->",checkingAccountCash)

/* below is our returned values
[ '-100', '20.00', '-3.33', '4.44' ]
[ '$-100', '$20.00', '$-3.33', '$4.44' ]
*/

// .filter array method will filter out elements, that meet a specific condition.
// below example, will filter out past due payments elements within the array.
const pastDuePayments= checkingAccounts.filter(function(collect){ // <-- all elements of array are passed through this callback function. if condition = true, a new array is returned with those selected elements (the past due payments :D).
    return collect < 0;
});
console.log(".filter() method -->", pastDuePayments)

// [ '-100', '-3.33' ] <-- these are the past due payments we need to collect from client.


// .reduce() array method to get sum total of elements.
// the customer has past due balances, but around noon they submitted a purchase order with a deposit of $2222.
// were going to apply that purchase order deposit to waive their past due payments, reconciling their balance.
const add = waive => waive.reduce((element1, element2) => element1 + element2, 2222); //<-- 2222 is the starting value (the purchase order deposit).

const waive = [-100, -3.33];
const total = add(waive);

console.log(".reduce() method -->", total);
//returned // 2118.67 <--- customer balance is reconciled. yayyyy :D


// 2nd way to utilize .reduce() array method.
// here, we are calculating the total sum of past due balances.
// originally, on line 158 I wrote ``return accumulator + currentValue``. But it logged all the elements into 1 single element all mushed together. It didn't add. Why?
// Number(currentValue) converts the strings into a number. 
// alternatively, I could've had my elements in the array and number data types, and accumulator + currentValue would log the total sum of past due balances.
// additionally, on line 157, the 3rd and 4th parameters aren't need. But what do they represent?
// i = is the index(s), and arr = the array. the extra parameters is a reference on how the call back function loops through each index, and iterates through the whole array.
const pastDueBalance = ['-100.00', '-8888.00', '-22.00', '-44.00'];

const totalPastDue = pastDueBalance.reduce(function(accumulator, currentValue, i, arr){
    return accumulator + Number(currentValue);
},0);

console.log(".reduce() method -->", totalPastDue);

// what if the customer sends in a Purchase Order with a deposit of 222,222.00 dollars?
const pastDueBalance0 = ['-100.00', '-8888.00', '-22.00', '-44.00'];

const totalPastDue0 = pastDueBalance.reduce(function(accumulator, currentValue, i, arr){
    return accumulator + Number(currentValue);
},222222.00); //<-- adjust the currentValue here

console.log(".reduce() method-->",totalPastDue0);

// this is what we returned below.
// 213168 <--- now the customer has no longer past due balance. $222,222.00 less $90.54.

// another way to use .reduce() array method using pizza imagination.
// we will use .reduce() array method to combina all elements, into 1 single element. aka pizzzaaa soup! :D
// .reduce loops through each index, a executes the callback function for each element (iteration).
const pizzaSoup = pizza.reduce(function(mixItAllUp, currentIngredients){

return mixItAllUp + currentIngredients ;

},'but first RANCH!!! :D ...'); //<-- we can add a string data type, which will default as the beginning of the reduced array.
console.log(".reduce() method-->",pizzaSoup);

// .find() array method
// it is a twin of .filter() --> the difference is... it just returns the first element that meets the condition. It returns as just one as an element. Not inside an array.

const filterArrayMethod = pastDueBalance.find(grabFirstOne=> grabFirstOne<0); //<-- should just return the '-100.00' elemment, even though the other 3 elements conditions are also a truey.
console.log(".find() method-->",filterArrayMethod);
// 100.00 <-- what we just returned.

// but... what if we want the element to be returned inside of an array?
// we can use .findIndex() array method. lets try it out below.

const filterArrayMethod0 = pastDueBalance.findIndex(grabFirstOneInArray=> grabFirstOneInArray<-200); // <-- this reads 'loop through every index in pastDueBalance, iterating through the whole array, and return/find the first index that is smaller that -200. Which will be -8000. which is index 1
console.log(".findIndex() method -->",filterArrayMethod0);
// 1 <-- what we just returned.

// lets get more mathy! using findIndex (oh gosh.... i suck at math).
// here we goooo....... D:

const beautifulArray = [2, 8, 12, 22, 33, 44, 55, 60, 88];

findDivisableIndexbyEleven = beautifulArray.findIndex(grabFirstDivisableNum => grabFirstDivisableNum % 11 === 0);  // <-- this reads return the first element by its index, that is divisble by 11
console.log(".findIndex() method w/ modulo operator -->",findDivisableIndexbyEleven);
// the % is a modulo operator. it reads loop through each index, iterating throughout the whole array, & find/return the first index that is divisble by 11 that has a remainder of 0
// 3 <-- it returned index 3 of the array = '22' 

//.includes() array method
//.includes method returns a boolean of either; truey, or falsey
//.includes looks for the "equality" of the element, then returns a boolean

const includeArrayMethod = [11, 22, 33, 44, 55, 66, 77, 88, 99];

let returnBooLeanIfThisIndexExistsInsideArray = includeArrayMethod.includes(22);

console.log(".include() method -->",returnBooLeanIfThisIndexExistsInsideArray);

// true 

//.some() array method works the same as .includes() array method, except...
//.some() looks checks for a condition, and if that condition is met, a boolean with be returned (truey, falsey)
// only 1 element inside the array, needs to meet the condition. 

const someArrayMethod = [2, 4, 6, 8, 10, 12];

let returnBooleanIfThisConditionIsMet = someArrayMethod.some(arrowFunctionExpression => arrowFunctionExpression > 8);

console.log(".some() array method -->",returnBooleanIfThisConditionIsMet);

// true


//.every() array method checks to make sure all elements meet the condition
// below shows not all elements meet condition, we get a falsey
const everyArrayMethod = [-3, -2, -1, 0, 1, 2, 3];

let returnFalseyBooLeanEveryArrayMethod = everyArrayMethod.every(funcExpression => funcExpression > 2);

console.log(".every() method return falsey -->",returnFalseyBooLeanEveryArrayMethod);
//false

// now, we will create condition so all elements return a boolean of truey
const everyArrayMethod2 = [ -3, -2, -1, 0, 1, 2, 3];

let returnTrueyAllConditionIsMet = everyArrayMethod2.every(allConditionIsMet => allConditionIsMet > -4);

console.log(".every() method return truey-->",returnTrueyAllConditionIsMet);
// true







