/*
JavaScript has 8 Datatypes
String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object

The Primitive Datatypes are: 
String, Number, BigInt, Boolean, Undefined, Null, and Symbol.
They store by value.

The Non-Primitive Datatype is:
Object(arrays, functions, objects, set etc.)
They store by reference.


The Object Datatype
The object data type can contain both built-in objects, and user defined objects:

Built-in object types can be:

objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.

Symbols are also considered objects. 
They are a special type of object that is used to create unique identifiers for object properties.
Use it when you want to create a property that is not accessible by any other code.

User defined object types can be:
functions, classes, and objects created using the object constructor or object literal syntax.
*/
// 1. String
let str = "Hello, World!"; // string
// 2. Number
let num = 42; // number
// 3. BigInt
let bigInt = 1234567890123456789012345678901234567890n; // bigint
// 4. Boolean
let isTrue = true; // boolean
// 5. Undefined
let undefinedValue; // undefined
// 6. Null
let nullValue = null; // null
// 7. Symbol
let symbol = Symbol("unique"); // symbol
// 8. Object
let obj = { name: "John", age: 30 }; // object
// 9. Array
let arr = [1, 2, 3, 4, 5]; // array
// 10. Function
function greet() {
    console.log("Hello, World!");
} // function
// 11. Date
let date = new Date(); // date
// 12. Map
let map = new Map(); // map
map.set("key", "value"); // set key-value pair
// 13. Set
let set = new Set(); // set
set.add(1); // add value to set

// 14. IntArray
let intArray = new Int32Array(5); // int array
intArray[0] = 1; // set value in int array
// 15. FloatArray
let floatArray = new Float32Array(5); // float array
floatArray[0] = 1.5; // set value in float array
// 16. Promise
let promise = new Promise((resolve, reject) => {
    resolve("Promise resolved!");
}); // promise
// 17. WeakMap
let weakMap = new WeakMap(); // weak map
let obj1 = {};
let obj2 = {};
weakMap.set(obj1, "value1"); // set key-value pair in weak map
weakMap.set(obj2, "value2"); // set key-value pair in weak map
// 18. WeakSet
let weakSet = new WeakSet(); // weak set
let obj3 = {};

weakSet.add(obj3); // add value to weak set
// 19. ArrayBuffer
let buffer = new ArrayBuffer(16); // array buffer
let view = new Int32Array(buffer); // typed array view
view[0] = 42; // set value in typed array view
// 20. DataView
let dataView = new DataView(buffer); // data view
dataView.setInt32(0, 42); // set value in data view
// 21. TypedArray
let typedArray = new Uint8Array(5); // typed array
typedArray[0] = 255; // set value in typed array
// 22. SharedArrayBuffer
let sharedBuffer = new SharedArrayBuffer(16); // shared array buffer

let sharedView = new Int32Array(sharedBuffer); // typed array view
sharedView[0] = 42; // set value in typed array view
// 23. Atomics
let atomics = new Atomics(); // atomics
// 24. JSON
let jsonString = JSON.stringify(obj); // convert object to JSON string
let jsonObject = JSON.parse(jsonString); // parse JSON string to object
// 25. Map
let map2 = new Map(); // map
map2.set("key", "value"); // set key-value pair
map2.get("key"); // get value by key
map2.has("key"); // check if key exists
map2.delete("key"); // delete key-value pair
map2.clear(); // clear map

//Checking the type of a variable
console.log(typeof str); // Output: string

//Destructuring
let { name, age } = obj; // destructuring object
console.log(name); // Output: John
console.log(age); // Output: 30
//Destructuring array
let [first, second] = arr; // destructuring array

console.log(first); // Output: 1
console.log(second); // Output: 2

//Using the spread operator
//Creating a new array by spreading the elements of an existing array. Has its own memory space.
let newArr = [...arr, 6, 7, 8]; // spread operator
let a1 = [1, 2, 3];
let b1 = a1;
b1.push(4); // modifying b1 also modifies a1
let c1 = [...a1]; // spread operator
console.log(c1); // Output: [1, 2, 3, 4]


console.log(newArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
//Using the rest operator
function sum(...numbers) { // rest operator
    return numbers.reduce((acc, num) => acc + num, 0);
}
