/*
Promises in JavaScript
Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
A promise can be in one of three states:
1. Pending: The initial state, neither fulfilled nor rejected.
2. Fulfilled: The operation completed successfully, resulting in a value.
3. Rejected: The operation failed, resulting in a reason for the failure.
*/

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure
    if (success) {
        resolve("Promise fulfilled!");
    } else {
        reject("Promise rejected!");
    }
});

// Using a Promise
myPromise
    .then((result) => {
        console.log(result); // Output: Promise fulfilled!
    })
    .catch((error) => {
        console.error(error); // Output: Promise rejected!
    })
    .finally(() => {
        console.log("Promise settled!"); // This will run regardless of success or failure
    });

// Example of a Promise with async/await
//Better way to handle promises, especially when chaining multiple promises
const fetchData = async () => {
    try {
        const data = await myPromise; // Wait for the promise to resolve
        console.log(data); // Output: Promise fulfilled!
    } catch (error) {
        console.error(error); // Output: Promise rejected!
    }
}
fetchData(); // Call the async function

// Example of Promise chaining
const fetchDataWithChaining = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 1000);
    });
};
const processData = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${data} processed!`);
        }, 1000);
    });
}
fetchDataWithChaining()
    .then((data) => {
        console.log(data); // Output: Data fetched!
        return processData(data);
    })
    .then((processedData) => {
        console.log(processedData); // Output: Data fetched! processed!
    })
    .catch((error) => {
        console.error(error);
    });






// Example of Promise.all
const promise1 = Promise.resolve("Promise 1 resolved!");
const promise2 = Promise.resolve("Promise 2 resolved!");
const promise3 = Promise.resolve("Promise 3 resolved!");
const promise4 = Promise.reject("Promise 4 rejected!");

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("All promises resolved:", results);
    })
    .catch((error) => {
        console.error("One or more promises rejected:", error);
    });

    // Promise.allSettled
const promise5 = Promise.resolve("Promise 5 resolved!");
const promise6 = Promise.reject("Promise 6 rejected!");
const promise7 = Promise.resolve("Promise 7 resolved!");
const promise8 = Promise.reject("Promise 8 rejected!");
Promise.allSettled([promise5, promise6, promise7, promise8])
    .then((results) => {
        console.log("All promises settled:", results);
    })
    .catch((error) => {
        console.error("One or more promises rejected:", error);
    });

    // Promise.race
const promise9 = new Promise((resolve) => setTimeout(() => resolve("Promise 9 resolved!"), 1000));
const promise10 = new Promise((resolve) => setTimeout(() => resolve("Promise 10 resolved!"), 500));
const promise11 = new Promise((resolve) => setTimeout(() => resolve("Promise 11 resolved!"), 2000));
Promise.race([promise9, promise10, promise11])
    .then((result) => {
        console.log("First promise settled:", result); // Output: Promise 10 resolved!
    })
    .catch((error) => {
        console.error("One or more promises rejected:", error);
    });

// Promise any
const promise12 = new Promise((resolve) => setTimeout(() => resolve("Promise 12 resolved!"), 1000));
const promise13 = new Promise((resolve) => setTimeout(() => resolve("Promise 13 resolved!"), 500));
const promise14 = new Promise((resolve, reject) => setTimeout(() => reject("Promise 14 rejected!"), 2000));
Promise.any([promise12, promise13, promise14])
    .then((result) => {
        console.log("First fulfilled promise:", result); // Output: Promise 13 resolved!
    })
    .catch((error) => {
        console.error("All promises rejected:", error);
    });







    /*The difference between Promise.all and Promise.allSettled is that Promise.all 
    will reject as soon as one of the promises in the array rejects,
     while Promise.allSettled will wait for all promises to settle (either resolve or reject) 
     and return an array of objects describing the outcome of each promise.
        */

     //Array Methods
     //String Methods
     //Ternary Operator
