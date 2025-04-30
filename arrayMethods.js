/*
 Array Methods
    JavaScript provides many built-in methods for manipulating arrays.
    Some common array methods include: push() (to add an element to the end of an array),
    pop() (to remove the last element from an array), shift() (to remove the first element from an array),
    unshift() (to add an element to the beginning of an array), slice() (to extract a portion of an array),
    splice() (to remove elements from an array), and concat() (to concatenate arrays).
    You can also use the forEach() method to iterate over an array and perform a function on each element.
    */

// // 1. Array Declaration
let arr = [1, 2, 3, 4, 5];
let arr2 = new Array(1, 2, 3, 4, 5); // using the Array constructor
let arr3 = Array.of(1, 2, 3, 4, 5); // using the Array.of() method
let arr4 = Array.from([1, 2, 3, 4, 5]); // using the Array.from() method
let arr5 = Array(5).fill(0); // creating an array of length 5 filled with 0
let arr6 = Array(5).fill(0).map((_, i) => i); // creating an array of length 5 filled with 0 and then mapping it to its index
let arr7 = Array(5).fill(0).map((_, i) => i * 2); // creating an array of length 5 filled with 0 and then mapping it to its index multiplied by 2

// // 2. Array Length
console.log(arr.length); // length of array

// // 3. Array Push
arr.push(6); // add element to end of array
console.log(arr); // [1, 2, 3, 4, 5, 6]

// // 4. Array Pop
arr.pop(); // remove last element from array
console.log(arr); // [1, 2, 3, 4, 5]

// // 5. Array Shift
arr.shift(); // remove first element from array
console.log(arr); // [2, 3, 4, 5]

// // 6. Array Unshift
arr.unshift(1); // add element to beginning of array
console.log(arr); // [1, 2, 3, 4, 5]

// // 7. Array Slice
let slicedArr = arr.slice(1, 3); // slice array from index 1 to index 3
console.log(slicedArr); // [2, 3]

// // 8. Array Splice
arr.splice(1, 2); // remove 2 elements from index 1
console.log(arr); // [1, 4, 5]

// // 9. Array Concat
let arr8 = [6, 7, 8];
let concatenatedArr = arr.concat(arr8); // concatenate arrays
console.log(concatenatedArr); // [1, 4, 5, 6, 7, 8]

// // 10. Array forEach
arr.forEach((value, index) => {
    console.log(`Value at index ${index}: ${value}`);
}); // iterate over array and print each value

// // 11. Array Map
let mappedArr = arr.map((value) => value * 2); // create a new array with each value multiplied by 2
console.log(mappedArr); // [2, 8, 10]

// // 12. Array Filter
let filteredArr = arr.filter((value) => value > 2); // create a new array with values greater than 2
console.log(filteredArr); // [4, 5]

// // 13. Array Reduce
let reducedValue = arr.reduce((accumulator, value) => accumulator + value, 0); // sum of all values in array
console.log(reducedValue); // 10

// // 14. Array Some
let hasValueGreaterThan3 = arr.some((value) => value > 3); // check if any value is greater than 3
console.log(hasValueGreaterThan3); // true

// // 15. Array Every
let allValuesGreaterThan0 = arr.every((value) => value > 0); // check if all values are greater than 0
console.log(allValuesGreaterThan0); // true

// // 16. Array Find
let foundValue = arr.find((value) => value > 3); // find the first value greater than 3
console.log(foundValue); // 4

// // 17. Array FindIndex
let foundIndex = arr.findIndex((value) => value > 3); // find the index of the first value greater than 3
console.log(foundIndex); // 1

// // 18. Array IndexOf
let indexOfValue = arr.indexOf(4); // find the index of value 4
console.log(indexOfValue); // 1

// // 19. Array LastIndexOf
let lastIndexOfValue = arr.lastIndexOf(4); // find the last index of value 4
console.log(lastIndexOfValue); // 1

// // 20. Array Includes
let includesValue = arr.includes(4); // check if array includes value 4
console.log(includesValue); // true

// // 21. Array Sort
let sortedArr = arr.sort((a, b) => a - b); // sort array in ascending order
console.log(sortedArr); // [1, 4, 5]

// // 22. Array Reverse
let reversedArr = arr.reverse(); // reverse the order of the array
console.log(reversedArr); // [5, 4, 1]

// // 23. Array Fill
let filledArr = arr.fill(0); // fill all elements of array with 0
console.log(filledArr); // [0, 0, 0]

// // 24. Array Join
let joinedArr = arr.join(", "); // join array elements into a string
console.log(joinedArr); // "0, 0, 0"

// // 25. Array Entries
let entriesArr = arr.entries(); // get an iterator for the array entries
for (let entry of entriesArr) {
    console.log(entry); // [0, 0], [1, 0], [2, 0]
}

// // 26. Array Keys
let keysArr = arr.keys(); // get an iterator for the array keys
for (let key of keysArr) {
    console.log(key); // 0, 1, 2
}

// // 27. Array Values
let valuesArr = arr.values(); // get an iterator for the array values
for (let value of valuesArr) {
    console.log(value); // 0, 0, 0
}

// // 28. Array CopyWithin
let copyWithinArr = arr.copyWithin(0, 1); // copy elements within the array
console.log(copyWithinArr); // [0, 0, 0]


