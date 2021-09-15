//** typeof tell us what data type the variable is (so cool!)
//string data type
var name1 = 'austi'; //**side note, I found out "name" is deprecated. I learned this is a "reserved keyword" in javaScript
console.log(name1)

//numeric data type
var num2 = 1234;
var num3 = 43.21; //<--- if decimal is added, this is called integer data type
console.log(num2, num3)
console.log(typeof num2)

//undefined data type
// this mean no value "has yet" been assigned to the variable
var hey3;
console.log(typeof hey3)

//boolean datatype
var bool0 = true;
var bool1 = false;

var bool2 = 1; //<-- 1 is same as falsey
var bool3 = 0; //<-- 0 is same as truey

//null data type
// this means the value is "exactly/intentionally/explicity equal to nothing"
var hey2= null;
console.log(typeof hey2)