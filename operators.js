/*
Operators in JavaScript
Operators are special symbols that perform operations on variables and values. JavaScript has many operators, including arithmetic, assignment, comparison, logical, and bitwise operators.
1. Arithmetic Operators
Arithmetic operators are used to perform arithmetic operations on numbers. The most common arithmetic operators are:        
+ (addition), - (subtraction), * (multiplication), / (division), % (modulus), and ** (exponentiation).
2. Assignment Operators
Assignment operators are used to assign values to variables. The most common assignment operators are: = (assignment),
 += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment),
 %= (modulus assignment), and **= (exponentiation assignment).
3. Comparison Operators
Comparison operators are used to compare two values. The most common comparison operators are: == (equal to),
=== (strict equal to), != (not equal to), !== (strict not equal to), > (greater than), < (less than), >= (greater than or equal to)
, and <= (less than or equal to).
4. Logical Operators
Logical operators are used to perform logical operations on boolean values. The most common logical operators are: && (logical AND),
|| (logical OR), and ! (logical NOT).
5. Bitwise Operators
Bitwise operators are used to perform bitwise operations on numbers. The most common bitwise operators are: & (bitwise AND),
| (bitwise OR), ^ (bitwise XOR), ~ (bitwise NOT), << (left shift), and >> (right shift).
6. Ternary Operator
The ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition,
 a value to return if the condition is true, and a value to return if the condition is false. 
The syntax is: condition ? valueIfTrue : valueIfFalse.
7. Nullish Coalescing Operator
The nullish coalescing operator (??) is used to return the right-hand operand when the left-hand operand is null or undefined.
 It is similar to the logical OR operator (||), but it only returns the right-hand operand when the left-hand operand is null or undefined, 
 not when it is falsy.
8. Spread Operator
The spread operator (...) is used to expand an iterable (like an array) into its individual elements. 
It can be used to create a shallow copy of an array or to merge multiple arrays into one.
9. Rest Operator
The rest operator (...) is used to collect multiple elements into a single array. 
It is often used in function parameters to allow a function to accept an arbitrary number of arguments.
10. Destructuring Assignment
Destructuring assignment is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.
It is a convenient way to extract values from arrays or objects and assign them to variables in a single statement.
It's syntax is: 
let [a, b] = [1, 2]; // array destructuring
let {x, y} = {x: 1, y: 2}; // object destructuring
11. Optional Chaining
Optional chaining (?.) is a syntax that allows you to access properties of an object without having to check if the object is null or undefined.
It is a convenient way to avoid errors when trying to access properties of an object that may not exist.
12. Template Literals
Template literals are a way to create strings in JavaScript that allow for embedded expressions.
They are enclosed in backticks (`) and can contain placeholders for variables or expressions, 
which are indicated by the dollar sign and curly braces (${expression}).
Template literals can also span multiple lines, making them a convenient way to create multi-line strings.
13. String Interpolation
String interpolation is a way to embed expressions within string literals.
It is often used in conjunction with template literals to create dynamic strings that can include variables or expressions.
Its syntax is similar to template literals, using the dollar sign and curly braces (${expression}) to indicate the expression to be embedded.
14. String Methods
JavaScript provides many built-in methods for manipulating strings.
Some common string methods include: length (to get the length of a string), toUpperCase() (to convert a string to uppercase),
toLowerCase() (to convert a string to lowercase), indexOf() (to find the index of a substring), slice() (to extract a portion of a string),
replace() (to replace a substring with another string), and split() (to split a string into an array of substrings).
15. Array Methods
JavaScript provides many built-in methods for manipulating arrays.
Some common array methods include: length (to get the length of an array), push() (to add an element to the end of an array),
pop() (to remove the last element from an array), shift() (to remove the first element from an array),
unshift() (to add an element to the beginning of an array), slice() (to extract a portion of an array),
splice() (to remove elements from an array), and concat() (to concatenate arrays).
16. Object Methods
JavaScript provides many built-in methods for manipulating objects.
Some common object methods include: Object.keys() (to get an array of the keys of an object),
Object.values() (to get an array of the values of an object), Object.entries() (to get an array of the key-value pairs of an object),
Object.assign() (to copy the values of one or more objects to a target object), and Object.freeze() (to make an object immutable).
17. Array Iteration Methods
JavaScript provides many built-in methods for iterating over arrays.
Some common array iteration methods include: forEach() (to execute a function for each element in an array),
map() (to create a new array with the results of calling a function for each element in an array),
filter() (to create a new array with the elements that pass a test), reduce() (to apply a function against an accumulator and each element in an array),
some() (to test if at least one element in an array passes a test), and every() (to test if all elements in an array pass a test).
18. Array Sorting Methods
JavaScript provides many built-in methods for sorting arrays.
Some common array sorting methods include: sort() (to sort the elements of an array in place),
reverse() (to reverse the order of the elements in an array), and fill() (to fill all the elements of an array with a static value).
19. Array Searching Methods
JavaScript provides many built-in methods for searching arrays.
Some common array searching methods include: indexOf() (to find the index of the first occurrence of an element in an array),
lastIndexOf() (to find the index of the last occurrence of an element in an array),
find() (to find the first element that passes a test), findIndex() (to find the index of the first element that passes a test),
includes() (to check if an array contains a certain element), and some() (to check if at least one element in an array passes a test).

*/
//Let's start with some examples of operators in JavaScript:
// 1. Arithmetic Operators
let a = 10;
let b = 5;
let sum = a + b; // addition
let difference = a - b; // subtraction
let product = a * b; // multiplication
let quotient = a / b; // division
let remainder = a % b; // modulus
let exponent = a ** b; // exponentiation
// 2. Assignment Operators
let x = 10; // assignment
x += 5; // addition assignment (x = x + 5)
x -= 5; // subtraction assignment (x = x - 5)
x *= 5; // multiplication assignment (x = x * 5)
x /= 5; // division assignment (x = x / 5)
x %= 5; // modulus assignment (x = x % 5)
x **= 5; // exponentiation assignment (x = x ** 5)
// 3. Comparison Operators
let isEqual = (a == b); // equal to
let isStrictEqual = (a === b); // strict equal to
let isNotEqual = (a != b); // not equal to
let isStrictNotEqual = (a !== b); // strict not equal to
let isGreaterThan = (a > b); // greater than
let isLessThan = (a < b); // less than
let isGreaterThanOrEqual = (a >= b); // greater than or equal to
let isLessThanOrEqual = (a <= b); // less than or equal to
// 4. Logical Operators
let andOperator = (a > 5 && b < 10); // logical AND
let orOperator = (a > 5 || b < 10); // logical OR
let notOperator = !(a > 5); // logical NOT
// 5. Bitwise Operators
let bitwiseAnd = a & b; // bitwise AND
let bitwiseOr = a | b; // bitwise OR
let bitwiseXor = a ^ b; // bitwise XOR
let bitwiseNot = ~a; // bitwise NOT
let leftShift = a << 1; // left shift
let rightShift = a >> 1; // right shift
// 6. Ternary Operator
let age = 18;
let isAdult = (age >= 18) ? "Adult" : "Minor"; // ternary operator
// 7. Nullish Coalescing Operator
let fullName = null;
let defaultName = fullName ?? "Default Name"; // nullish coalescing operator
// 8. Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArray = [...arr1, ...arr2]; // spread operator
// 9. Rest Operator
function sumAll(...numbers) { // rest operator
    return numbers.reduce((acc, num) => acc + num, 0);
}
let total = sumAll(1, 2, 3, 4, 5); // total is 15
// 10. Destructuring Assignment
let person = { name: "John", age: 30 };
let { fname, legalAge } = person; // object destructuring
let arr = [1, 2, 3];
let [first, second, third] = arr; // array destructuring
// 11. Optional Chaining
let user = { name: "John", address: { city: "New York" } };
let city = user.address?.city; // optional chaining
// 12. Template Literals
let greeting = `Hello, my name is ${fname} and I am ${legalAge} years old.`; // template literal, also known as string interpolation

