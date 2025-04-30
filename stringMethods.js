/*
 String Methods
        JavaScript provides many built-in methods for manipulating strings.
        Some common string methods include: length (to get the length of a string), toUpperCase() (to convert a string to uppercase),
        toLowerCase() (to convert a string to lowercase), indexOf() (to find the index of a substring), slice() (to extract a portion of a string),
        replace() (to replace a substring with another string), and split() (to split a string into an array of substrings).
        NB: String in JavaScript is treated as an object, so you can use the String constructor to create a string object.
        String methods do not modify the original string, but return a new string.
        */

// // 1. String Declaration
let str = "Hello, World!";
let str2 = new String("Hello, World!"); // using the String constructor
let str3 = String("Hello, World!"); // using the String() method
let str4 = String.of("Hello, World!"); // using the String.of() method
let str5 = String.fromCharCode(72, 101, 108, 108, 111); // using the String.fromCharCode() method

// // 2. String Length
console.log(str.length); // length of string

// // 3. String toUpperCase
console.log(str.toUpperCase()); // convert to uppercase

// // 4. String toLowerCase
console.log(str.toLowerCase()); // convert to lowercase

// // 5. String indexOf
console.log(str.indexOf("World")); // index of substring

// // 6. String slice
console.log(str.slice(0, 5)); // slice string

// // 7. String replace
console.log(str.replace("World", "JavaScript")); // replace substring

// // 8. String split
console.log(str.split(", ")); // split string into array

// // 9. String charAt
console.log(str.charAt(0)); // get character at index 0

// // 10. String charCodeAt
console.log(str.charCodeAt(0)); // get character code at index 0

// // 11. String concat
console.log(str.concat(" How are you?")); // concatenate strings

// // 12. String trim
console.log(str.trim()); // remove whitespace from both ends of string

// // 13. String includes
console.log(str.includes("World")); // check if string includes substring

// // 14. String startsWith
console.log(str.startsWith("Hello")); // check if string starts with substring

// // 15. String endsWith
console.log(str.endsWith("!")); // check if string ends with substring

// // 16. String repeat
console.log(str.repeat(2)); // repeat string 2 times

// // 17. String search
console.log(str.search("World")); // search for substring and return index

// // 18. String match
console.log(str.match(/o/g)); // match substring and return array of matches

// // 19. String matchAll
console.log(str.matchAll(/o/g)); // match all occurrences of substring and return iterator

// // 20. String valueOf
console.log(str.valueOf()); // get primitive value of string

// // 21. String toString
console.log(str.toString()); // convert string object to string primitive

