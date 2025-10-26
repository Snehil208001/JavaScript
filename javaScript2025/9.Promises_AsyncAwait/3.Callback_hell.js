// Definition: Callback Hell (also known as the "Pyramid of Doom") is a common problem in asynchronous JavaScript. 
// It happens when you have multiple asynchronous operations that depend on each other, leading to 
// deeply nested and indented callback functions. This makes the code hard to read, understand, and maintain.

function getData(dataId, getNextData) {
    // This function simulates fetching data, which takes 2 seconds.
    setTimeout(() => {
        console.log("data", dataId);
        // After fetching, it tries to call the next function (if one was provided).
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

// --- Problems in your code ---

// getData(1);
// getData(2);
// getData(3);
// ^ This will NOT work sequentially. All three functions are called at nearly the same time.
// After 2 seconds, all three will print "data 1", "data 2", and "data 3" (in that order).
// They all run in parallel, not one after the other.

// getData(1, getData(2));
// ^ This is also incorrect. This code *immediately* executes getData(2) *before* getData(1) even starts.
// It passes the *return value* of getData(2) (which is 'undefined') as the callback to getData(1).
// This will not chain them.

// --- This is how you would correctly chain them, which demonstrates "Callback Hell" ---

console.log("Fetching data...");

// 1. Start by getting data 1
getData(1, () => {
    // 2. After data 1 is finished (2 seconds later), this callback runs.
    console.log("Getting data 2...");
    getData(2, () => {
        // 3. After data 2 is finished (another 2 seconds), this callback runs.
        console.log("Getting data 3...");
        getData(3, () => {
            // 4. After data 3 is finished (another 2 seconds), this callback runs.
            console.log("Getting data 4...");
            getData(4, () => {
                // 5. And so on...
                console.log("All data received.");
            });
        });
    });
});

// ^ This nested, indented structure is "Callback Hell".
// The code "drifts" to the right, making it very difficult to read.
// This is the problem that Promises and Async/Await are designed to solve.

//data1 
//data2
//data3