// purpose: general content hub, about arrays. because we love arrays
// whats an array?
// an array is a list of values, that store data. we can add/update/change, etc these data(s) in many flavors

// we will be adding an extra element to an array, as it's 3rd index. 
// our 3rd index will be named 'spicy greek styled'.
// to add, we use .push() array method. push() is also a pre-built javascript function we can  use out of the box. (pretty cool!)
const pizza = ['pepperoni', 'cheese', 'supreme'];
pizza.push('lemon zest greek styled');
console.log(pizza);

// but... what if we want to add 'lemon zest greek styled' as the first one?
// we can use an array method called 'unshift'
const pizza0 = ['pepperoni', 'cheese', 'supreme'];
pizza0.unshift('lemon zest greek styled');
console.log(pizza0);

// but... what if only want to eat 'pepperoni', and 'cheese' pizza? no thanks to supreme for today (no veggies today pls D:)
// we can use .pop() array method
// the tricky part here.... we don't need to pass an arugment. the last index/element will automatically be deleted.

const pizza1 = ['pepperoni', 'cheese', 'supreme'];
pizza1.pop()
console.log(pizza1);

// but... what if I only want to eat 'cheese' and 'supreme' pizza? 'pepperoni' pizza makes my stomach hurt for today for some reason.
// we can use .shift() array method
// this array method behaves the same for .pop()

const pizza2 = ['pepperoni', 'cheese', 'supreme'];
pizza2.shift()
console.log(pizza2);

// .slice() slices a chunk of an array, and returns that chunk.
// but what chunk? all/each elements between the first index you select, to the last (last index isn't included in the chunk).
// for example, a pizza slice. the tip of the pizza slice is a little burnt (don't include), and the crust is burnt too (don't include)
// result: in our console we returned everything between index [1], to index [5]; BUT.. the first index is included in array, last index is not.
// this happens when we pass in two index parameters as an arguement.
const burntPizza = ['tip', 'tip middle', 'middle', 'top middle', 'top', 'crust'];
console.log(burntPizza.slice(1,5));

// however... lets say the crust isn't burnt, and we want everything but the tip from this slice of pizza (yummy! garlic butter sauce please)
// now... for the very last index to be included, we just passed in one index parameter, as an argument
const notBurntCrustPizza = ['tip', 'tip middle', 'middle', 'top middle', 'top', 'crust'];
console.log(notBurntCrustPizza.slice(1));

// finally.... if the whole pizza is not burnt and totally yummy?
// we can make a whole carbon copy of the array. Simply pass no argument in the slice array method.
const notBurntYummyPizza = ['tip', 'tip middle', 'middle', 'top middle', 'top', 'crust'];
console.log(notBurntYummyPizza.slice());

// .splice() array method pretty much is identical (twins)
// ... the difference is that it mutates (updates) the original array

const burntPizza0 = ['tip', 'tip middle', 'middle', 'top middle', 'top', 'crust'];
console.log(burntPizza0.splice(1,5));
console.log(burntPizza0); //<-- the array is mutated, and 'tip' element is 'spliced into it's own seperated array

const burntPizza1 = ['tip', 'tip middle', 'middle', 'top middle', 'top', 'crust'];
console.log(burntPizza1.splice(-1)); // <-- '-1' removes last element(index) aka 'crust'.
console.log(burntPizza1); //<-- our mutated array no longer has 'crust'.

// we can also use .splice to inject/insert elements, without deleting anything (elements)
// the '3' in our argument, tells the code "FROM where" to inject the new element
// '0' is represent out deleteCount. in other words, from index 3, how many elements will be deleted after index 3?
// we don't want any elements deleted after index 0. so we set it to 0
// if we want to delete 'engineer', we set change 0 to 1. if we want delete both 'software', and 'engineer' we set to 2
// however, if we go past 3, no other elements will be deleted beyond that point. because we set the 'FROM where' to 3
const austi = ['austi', 'is', 'a', 'software', 'engineer'];
austi.splice(3, 0, 'chill');
console.log(austi);

//.reverse() will reverse the array
const taco = ['tortilla', 'refried beans', 'grilled chicken', 'cheese', 'salsa', 'hot sauce'];
console.log(taco.reverse());
console.log(taco); // <-- the array gets mutated when using .reverse() array method

//.concat() array method, joins two new arrays together
// lets cook up 1 huge array of; austi + taco
// we get an array of mixed taco ingredients, and austi being a chill software engineer 
const austiTaco= taco.concat(austi)
console.log(austiTaco);

