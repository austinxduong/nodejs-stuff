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
