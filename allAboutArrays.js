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