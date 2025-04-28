
//Single Line Comments
/*
Multi Line Comments
*/


// Variables
/* 
    var - function scoped - can be redeclared and reassigned
    let - block scoped - can be reassigned but not redeclared
    const - block scoped, cannot be reassigned or redeclared

When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

*/
//var firstName = "John Doe"; // string
let age = 30; // number
const isEmployed = true; // boolean
let hobbies = ["reading", "gaming", "coding"]; // array
let address = {
    street: "123 Main St",
    city: "New York",
    state: "NY"
}; // object
let nullValue = null; // null
let undefinedValue; // undefined
// Template Literals
//let greeting = `Hello, my name is ${firstName} and I am ${age} years old.`;
//console.log(greeting);
// String Methods
let str = "Hello, World!";
console.log(str.length); // length of string
console.log(str.toUpperCase()); // convert to uppercase
console.log(str.toLowerCase()); // convert to lowercase
console.log(str.indexOf("World")); // index of substring
console.log(str.slice(0, 5)); // slice string
console.log(str.replace("World", "JavaScript")); // replace substring
console.log(str.split(", ")); // split string into array
// Array Methods
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // length of array
console.log(arr.push(6)); // add element to end of array
console.log(arr.pop()); // remove last element from array
console.log(arr.shift()); // remove first element from array
console.log(arr.unshift(0)); // add element to beginning of array
console.log(arr.slice(1, 3)); // slice array
console.log(arr.splice(1, 2)); // remove elements from array
console.log(arr.concat([6, 7, 8])); // concatenate arrays           

//As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +:
let x = 5;
let y = 10;
let z = x + y; // z is 15
// You can also use the += operator to add a value to a variable:
x += 5; // x is now 10
// You can also use the -= operator to subtract a value from a variable:
x -= 5; // x is now 5
// You can also use the *= operator to multiply a variable by a value:
x *= 5; // x is now 25
// You can also use the /= operator to divide a variable by a value:
x /= 5; // x is now 5
// You can also use the %= operator to get the remainder of a variable divided by a value:
x %= 2; // x is now 1
// You can also use the **= operator to raise a variable to a power:
x **= 2; // x is now 1
// You can also use the ++ operator to increment a variable by 1:
x++; // x is now 2
// You can also use the -- operator to decrement a variable by 1:
x--; // x is now 1


//Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:
let $name = "John Doe";
//However, it is not recommended to use $ in variable names.
//You can also use the _ (underscore) character in variable names:
let _name = "John Doe";
//However, it is not recommended to use _ in variable names.
//You can also use the camelCase naming convention for variable names:
let firstName = "John";
//It is recommended to use camelCase in variable names.
//You can also use the PascalCase naming convention for variable names:
let FirstName = "John";
//It is not recommended to use PascalCase in variable names, especially when dealing with Classes.
//You can also use the snake_case naming convention for variable names:
let first_name = "John";

let result = "10" - 10; // result is 0
console.log(result); // Output: 0

let a = "a";
let result2 = false + a
console.log(result2); // Output: NaN