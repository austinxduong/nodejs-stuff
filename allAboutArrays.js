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

// .slice() slice a chunk of an array, and returns that chunk?
// but what chunk? all/each elements between the first index you select, to the last (last index isn't included in the chunk).
// for example, a pizza slice. the tip of the pizza slice is a little burnt (don't include), and the crust is burnt too (don't include)
// result: in our console we returned everything between index [1], to index [5]; BUT.. the first index is included in array, last index is not.
// this happens when we pass in two index parameters as an arguement.
const burntPizza = ['tip', 'tip middle', 'middle', 'top middle', 'top', 'crust'];
console.log(burntPizza.slice(1,5));

// however... lets say the crust isn't burnt, and we want everything but the tip from this slice of pizza (yummy! garlic butter sauce please)
// now, we the very last index is included, we just passed in one index parameter, as an argument
const notBurntCrustPizza = ['tip', 'tip middle', 'middle', 'top middle', 'top', 'crust'];
console.log(notBurntCrustPizza.slice(1));

// finally.... if the whole pizza is not burnt and totally yummy?
// we can make a whole carbon copy of the array. Simply pass no argument in the slice array method.
const notBurntYummyPizza = ['tip', 'tip middle', 'middle', 'top middle', 'top', 'crust'];
console.log(notBurntYummyPizza.slice());
