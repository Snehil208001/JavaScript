// Definition: A Promise is an object that represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value.
// It's like a placeholder or a receipt for a value you don't have yet.
// It allows you to write asynchronous code that is easier to read and manage than callbacks.

// --- Promise States ---
// A promise is always in one of three mutually exclusive states:
// 1. Pending: The initial state. The operation is not yet complete. It's "waiting." (⏳)
// 2. Fulfilled (or Resolved): The operation completed successfully. The promise now has a resulting value. (✅)
// 3. Rejected: The operation failed. The promise has a "reason" for the failure, usually an Error object. (❌)

// A promise is "settled" when it is no longer pending (i.e., it's either fulfilled or rejected).
// It can only be settled once; it cannot go from fulfilled to rejected or vice-versa.

// --- Explanation of Your Code ---

// Note: 'new promise' should be 'new Promise' (with a capital 'P').
let promise = new Promise((resolve, reject) => {
    // 1. This "executor" function runs IMMEDIATELY and SYNCHRONOUSLY 
    //    as soon as `new Promise` is called.
    console.log("I am a promise"); // 2. This line prints right away.

    // 3. You call `resolve(123)`. This *immediately* changes the promise's state
    //    from "Pending" to "Fulfilled".
    //    The "resulting value" of this promise is now locked in as 123.
    resolve(123);

    // If you had called `reject(new Error("Failed!"))`, it would
    // move to the "Rejected" state instead.
});

// At this point, your 'promise' variable holds a promise object that is *already fulfilled*
// with the value 123. However, you haven't *used* that value yet.
// To use the value, you need to use the .then() method.


// --- Example 1: Consuming (Using) Your Promise ---
// We use .then() to schedule a callback that will run when the promise is fulfilled.
// Since your promise is already fulfilled, this callback will be scheduled to run very soon
// (but *after* the current script finishes executing).

promise.then((value) => {
    // 'value' is the data that was passed to the resolve() function (i.e., 123).
    console.log("The promise was fulfilled. The value is:", value); // Prints: 123
});

console.log("This line logs *before* the .then() callback!");

// --- Example 2: A More Realistic Asynchronous Promise ---
// This shows how to fix the "Callback Hell" problem from before.

function getData(dataId) {
    // We return a new promise.
    return new Promise((resolve, reject) => {
        console.log(`Starting to fetch data ${dataId}...`);
        
        // Simulate a 2-second network delay
        setTimeout(() => {
            if (dataId <= 0) {
                // Failure! Reject the promise with an error.
                reject(new Error(`Invalid dataId: ${dataId}`));
            } else {
                // Success! Fulfill the promise with the data.
                console.log(`...successfully fetched data ${dataId}`);
                resolve({ id: dataId, content: "Some sample data" }); 
            }
        }, 2000);
    });
}

// Now, we can *chain* promises using .then(), which is much cleaner than nested callbacks.
console.log("--- Starting promise chain ---");
getData(1)
    .then((data) => {
        // This .then() runs when getData(1) is *fulfilled*.
        console.log("First .then():", data);
        // We can return a *new* promise to continue the chain.
        return getData(2); 
    })
    .then((data) => {
        // This .then() runs when getData(2) is *fulfilled*.
        console.log("Second .then():", data);
        return getData(3);
    })
    .then((data) => {
        // This .then() runs when getData(3) is *fulfilled*.
        console.log("Third .then():", data);
        console.log("--- Promise chain finished ---");
    })
    .catch((error) => {
        // The .catch() block will run if *any* promise in the chain is *rejected*.
        console.error("--- An error occurred in the chain! ---");
        console.error(error.message);
    });

// Example of a rejection:
// getData(-5)
//     .then(...)
//     .catch((error) => console.error(error.message)); // This would print "Invalid dataId: -5"