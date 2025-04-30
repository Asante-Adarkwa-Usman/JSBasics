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


//Higher Order Functions
//Higher-order functions are functions that can take other functions as arguments or return functions as their result.
// They allow for more abstract and flexible programming patterns.
//1. ForEach
const num = [1, 2, 3, 4, 5];
num.forEach((number) => {
    console.log(number); // Output: 1 2 3 4 5
});

//2. Map
const numbers2 = [1, 2, 3, 4, 5];
const squares = numbers2.map((number) => {
    return number * number;
});
console.log(squares); // Output: [1, 4, 9, 16, 25]

//3. Filter
const numbers3 = [1, 2, 3, 4, 5];
const evenNumbers = numbers3.filter((number) => {
    return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

const add = (callback, a, b) => {
    return callback(a, b);
}
  add((result) => {
    console.log(result); // Output: 5
  }, 2, 3);



  //Differences between Callback, Arrow, Anonymous, and Higher Order Functions

// 1. Callback Function
// A callback function is a function that is passed as an argument to another function and is executed after the completion of that function.
function fetchData(callback) {
    setTimeout(() => {
        const data = "Fetched data!";
        callback(data);
    }, 1000);
}
fetchData((data) => {
    console.log(data); // Output: Fetched data! (after 1 second)
});

// 2. Arrow Function
// An arrow function is a shorter syntax for writing function expressions. It does not have its own 'this' context.
const add = (a, b) => {
    return a + b;
};
console.log(add(2, 3)); // Output: 5
// Arrow functions are often used as callback functions.

// 3. Anonymous Function
// An anonymous function is a function without a name. It can be used as a callback or passed as an argument.
setTimeout(function() {
    console.log("This is an anonymous function!");
}, 1000); // Output: This is an anonymous function! (after 1 second)
// Anonymous functions can also be used as IIFE (Immediately Invoked Function Expressions).

// 4. Higher Order Function
// A higher-order function is a function that takes other functions as arguments or returns a function as its result.
function higherOrderFunction(callback) {
    return function() {
        console.log("This is a higher-order function!");
        callback();
    };
}
const innerFunction = higherOrderFunction(() => {
    console.log("This is the callback function!");
});
innerFunction(); // Output: This is a higher-order function! This is the callback function!
// Higher-order functions are often used in functional programming and can be used to create more abstract and reusable code.

// 5. Differences
// - Callback functions are used to handle asynchronous operations and can be either named or anonymous.
// - Arrow functions provide a shorter syntax for writing function expressions and do not have their own 'this' context.
// - Anonymous functions are functions without names and can be used as callbacks or IIFE.
// - Higher-order functions are functions that take other functions as arguments or return functions as their result, allowing for more abstract and flexible programming patterns.
//

// 6. Example of using all together
const numbers4 = [1, 2, 3, 4, 5];
const doubleNumbers = numbers4.map((number) => {
    return number * 2;
});

const sum = (a, b) => {
    return a + b;
};
const total = doubleNumbers.reduce((acc, number) => {
    return sum(acc, number);
}, 0);

console.log(total); // Output: 30
// This example uses a higher-order function (map) to double the numbers in the array,
// an arrow function (sum) to calculate the sum, and a callback function (reduce) to accumulate the total.

// 7. Example of using all together with IIFE
const numbers5 = [1, 2, 3, 4, 5];
const total2 = (function(arr) {
    return arr.reduce((acc, number) => {
        return acc + number;
    }, 0);
})(numbers5);
console.log(total2); // Output: 15
// This example uses an IIFE to calculate the total of the numbers in the array.
// It demonstrates how to combine different types of functions in JavaScript to achieve a specific task.

