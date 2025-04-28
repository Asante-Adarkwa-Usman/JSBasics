/*
Functions in JavaScript
Functions are reusable blocks of code that perform a specific task. 
They can take inputs (parameters) and return outputs (results). 
Functions can be defined using function declarations, function expressions, or arrow functions.
*/
// 1. Function Declaration
//A function declaration defines a named function that can be called later in the code.
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!

// 2. Function Expression
//A function expression defines a function that can be assigned to a variable.
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Bob")); // Output: Hello, Bob!

// 3. Arrow Function
//An arrow function is a shorter syntax for writing function expressions.
const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("Charlie")); // Output: Hello, Charlie!

// 4. Function with Default Parameters
//A function can have default parameters that are used if no value is provided for that parameter.
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!
console.log(greet("Dave")); // Output: Hello, Dave!


// 5. Function with Rest Parameters
//A function can accept an arbitrary number of arguments using the rest parameter syntax.
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6

// 6. Function with Spread Operator
//The spread operator can be used to pass an array of arguments to a function.
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

// 7. Function Returning Another Function
//A function can return another function, allowing for higher-order functions.
function outerFunction() {
    return function innerFunction() {
        return "Hello from the inner function!";
    };
}
const innerFunc = outerFunction();
console.log(innerFunc()); // Output: Hello from the inner function!

// 8. Anonymous Function
//An anonymous function is a function without a name. It can be used as a callback or passed as an argument.
setTimeout(function() {
    console.log("This is an anonymous function!");
}, 1000); // Output: This is an anonymous function! (after 1 second)

// 9. Immediately Invoked Function Expression (IIFE)
//An IIFE is a function that is executed immediately after it is defined.
(function() {
    console.log("This is an IIFE!");
})(); // Output: This is an IIFE!

// 10. Function Scope
//Functions have their own scope, meaning variables defined inside a function are not accessible outside of it.
function myFunction() {
    let localVar = "I am local!";
    console.log(localVar); // Output: I am local!
}
myFunction();
// console.log(localVar); // Error: localVar is not defined

// 11. Closure
//A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
function outerFunction() {
    let outerVar = "I am outside!";
    return function innerFunction() {
        console.log(outerVar); // Output: I am outside!
    };
}
const closureFunc = outerFunction();
closureFunc(); // Output: I am outside!

// 12. Callback Function
//A callback function is a function passed as an argument to another function, which can be executed later.
function fetchData(callback) {
    setTimeout(() => {
        const data = "Fetched data!";
        callback(data);
    }, 1000);
}
fetchData((data) => {
    console.log(data); // Output: Fetched data! (after 1 second)
});

// 13. Function Hoisting
//Function declarations are hoisted, meaning they can be called before they are defined in the code.
console.log(hoistedFunction()); // Output: This is a hoisted function!
function hoistedFunction() {
    return "This is a hoisted function!";
}

// 14. Function Overloading
//JavaScript does not support function overloading, but you can achieve similar behavior using default parameters or rest parameters.
function add(a, b = 0) {
    return a + b;
}
console.log(add(5)); // Output: 5
console.log(add(5, 10)); // Output: 15

// 15. Function.prototype
//The Function prototype allows you to add methods to all functions in JavaScript.
Function.prototype.customMethod = function() {
    console.log("This is a custom method on the Function prototype!");
};

function myFunction() {
    console.log("This is my function!");
}
myFunction.customMethod(); // Output: This is a custom method on the Function prototype!

