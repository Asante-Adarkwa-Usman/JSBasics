/*
Conditional Statements in JavaScript
JavaScript supports several types of conditional statements:

*/
// 1. if statement: Used to execute a block of code if a specified condition is true.
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}

// 2. if...else statement: Used to execute one block of code if a condition is true and another block if it is false.
else {
    console.log("You are a minor.");
}

// 3. else if statement: Used to specify a new condition if the first condition is false.
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
}
else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

// 4. switch statement: Used to execute one block of code among multiple options based on the value of a variable.
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}

// 5. Ternary operator: A shorthand way to write an if...else statement.
let isAdult = (age >= 18) ? "You are an adult." : "You are a minor.";
console.log(isAdult);

// 6. Logical operators: Used to combine multiple conditions.
let isStudent = true;
if (age >= 18 && isStudent) {
    console.log("You are an adult student.");
}
else if (age < 18 || !isStudent) {
    console.log("You are either a minor or not a student.");
}

// 7. Nullish coalescing operator: Used to provide a default value if the variable is null or undefined.
let fullName = null;
let defaultName = fullName ?? "Guest";
console.log(defaultName); // Output: Guest

// 8. Optional chaining: Used to access properties of an object without causing an error if the object is null or undefined.
let user = {
    name: "John",
    address: {
        city: "New York"
    }
};
let city = user.address?.city;
console.log(city); // Output: New York

// 9. Short-circuit evaluation: Used to evaluate logical expressions and return the first truthy value.
let x = 0;
let y = 5;
let result = x || y; // If x is falsy, return y
console.log(result); // Output: 5

// 10. Type checking: Used to check the type of a variable before performing operations on it.
let value = "Hello";
if (typeof value === "string") {
    console.log("The value is a string.");
}
else if (typeof value === "number") {
    console.log("The value is a number.");
} else {
    console.log("The value is of an unknown type.");
}

// 11. Using try...catch for error handling: Used to handle errors gracefully.
try {
    let result = 10 / 0; // This will cause an error
    console.log(result);
}
catch (error) {
    console.log("An error occurred: " + error.message);
}

// 12. Using finally block: Used to execute code after try...catch, regardless of whether an error occurred or not.
try {
    let result = 10 / 0; // This will cause an error
    console.log(result);
}
catch (error) {
    console.log("An error occurred: " + error.message);
}
finally {
    console.log("This block will always execute.");
}

// 13. Using throw statement: Used to throw a custom error.
try {
    throw new Error("This is a custom error.");
}
catch (error) {
    console.log("An error occurred: " + error.message);
}

// 14. Using assert function: Used to test assumptions in code.
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}
try {
    assert(1 + 1 === 2, "Math is broken!");
    console.log("Assertion passed.");
}
catch (error) {
    console.log("Assertion failed: " + error.message);
}

// 15. Using switch with fall-through: Used to execute multiple cases without break.
let fruit = "apple";
switch (fruit) {
    case "apple":
    case "banana":
        console.log("This is a fruit.");
        break;
    case "carrot":
        console.log("This is a vegetable.");
        break;
    default:
        console.log("Unknown item.");
}

// 16. Using switch with default case: Used to provide a default action if no cases match.
let color = "purple";
switch (color) {
    case "red":
        console.log("Red color");
        break;
    case "blue":
        console.log("Blue color");
        break;
    default:
        console.log("Unknown color");
}

// 17. Using switch with multiple cases: Used to group multiple cases together.
let grade = "B";
switch (grade) {
    case "A":
    case "B":
        console.log("Good job!");
        break;
    case "C":
        console.log("You can do better.");
        break;
    default:
        console.log("Keep trying!");
}


