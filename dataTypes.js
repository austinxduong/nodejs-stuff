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
const hey3;
console.log(typeof hey3)

//boolean datatype
const bool0 = true;
const bool1 = false;

const bool2 = 1; //<-- 1 is same as falsey
const bool3 = 0; //<-- 0 is same as truey

//null data type
// this means the value is "exactly/intentionally/explicity equal to nothing"
const hey2= null;
console.log(typeof hey2)