/*
Loops In JavaScript
Loops are used to execute a block of code repeatedly until a specified condition is met.
JavaScript supports several types of loops:

Use Cases:
1. for loop: Used when the number of iterations is known.
2. while loop: Used when the number of iterations is not known and depends on a condition.
3. do...while loop: Similar to the while loop, but the code block is executed at least once before the condition is checked.
4. for...of loop: Used to iterate over iterable objects like arrays, strings, and maps.
5. for...in loop: Used to iterate over the properties of an object.
6. forEach loop: Used to iterate over arrays using a callback function. 
As parameter, it takes a function that is called for each element in the array.
7. for await...of loop: Used to iterate over async iterable objects.
*/
// 1. for loop
for (let i = 0; i < 5; i++) {
    console.log("for loop iteration:", i);
}

// 2. while loop
let j = 0;
while (j < 5) {
    console.log("while loop iteration:", j);
    j++;
}

// 3. do...while loop
let k = 0;
do {
    console.log("do...while loop iteration:", k);
    k++;
} while (k < 5);


// 4. for...of loop(for iterating over iterable objects like arrays)
const arr = [1, 2, 3, 4, 5];
for (const value of arr) {
    console.log("for...of loop value:", value);
}

// 5. for...in loop(for iterating over object properties)
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log("for...in loop key:", key, "value:", obj[key]);
}

// 6. forEach loop(for iterating over arrays)
arr.forEach((value, index) => {
    console.log("forEach loop index:", index, "value:", value);
});

// 7. for await...of loop(for iterating over async iterable objects)
async function asyncFunction() {
    const asyncIterable = {
        [Symbol.asyncIterator]() {
            let i = 0;
            return {
                next() {
                    if (i < 5) {
                        return Promise.resolve({ value: i++, done: false });
                    } else {
                        return Promise.resolve({ done: true });
                    }
                }
            };
        }
    };

    for await (const value of asyncIterable) {
        console.log("for await...of loop value:", value);
    }
}
asyncFunction();
console.log(asyncFunction());

