// --- Definitions ---

/**
 * 'async' keyword:
 * When you declare a function as 'async', it automatically does two things:
 * 1. It ensures the function *always* returns a Promise.
 * 2. It allows you to use the 'await' keyword inside it.
 * * Even though this function only logs "Hello" and doesn't explicitly return 
 * anything, it will return a Promise that resolves with 'undefined'.
 */
async function hello() {
  console.log("Hello");
}

/**
 * 'new Promise((resolve, reject) => { ... })':
 * A Promise is an object that represents the eventual completion (or failure) 
 * of an asynchronous operation.
 * * - The 'resolve' function is called when the operation is successful. 
 * The value passed to 'resolve' (in this case, 200) is the value the 
 * Promise will fulfill with.
 * - The 'reject' function (not used here) would be called if an error occurred.
 * * 'setTimeout' is used here to *simulate* a long-running task, like fetching 
 * data from a real weather API, which takes time.
 */
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather data");
      resolve(200); // The operation finished successfully
    }, 2000); // Simulate a 2-second delay
  });
}

/**
 * 'await' keyword:
 * The 'await' keyword can *only* be used inside an 'async' function.
 * It "pauses" the execution of the 'getWeatherData' function *until* the 
 * Promise on its right-hand side (the one from 'api()') settles (i.e., resolves or rejects).
 * * In this case, it will wait for the 2-second timeout from 'api()' to finish.
 * After 'api()' resolves, the code inside 'getWeatherData' will resume.
 */
async function getWeatherData() {
  await api(); // Pauses here for 2 seconds
}

// --- Proper Example Usage ---

/**
 * Example 1: Calling the async function
 * This shows the asynchronous flow.
 */
async function fetchAndGreet() {
  console.log("Calling hello...");
  await hello(); // 'hello()' runs, logs "Hello"
  console.log("...hello() is done.");

  console.log("Calling getWeatherData...");
  await getWeatherData(); // Pauses for 2 seconds, logs "Weather data"
  console.log("...getWeatherData() is done.");

  console.log("All finished.");
}

// Start the entire process
// fetchAndGreet();

/*
 * Console Output for Example 1:
 *
 * Calling hello...
 * Hello
 * ...hello() is done.
 * Calling getWeatherData...
 * (waits 2 seconds)
 * Weather data
 * ...getWeatherData() is done.
 * All finished.
 */


/**
 * Example 2: Handling the resolved value
 * This shows how 'await' can also "unwrap" the value from the Promise.
 */
async function getAndUseWeatherData() {
  console.log("Fetching data...");
  
  // The value '200' passed to 'resolve' in api() is now stored in 'statusCode'
  const statusCode = await api(); 
  
  console.log("...Fetch complete.");
  console.log(`The status code was: ${statusCode}`);
}

// Start the second example
getAndUseWeatherData();

/*
 * Console Output for Example 2:
 *
 * Fetching data...
 * (waits 2 seconds)
 * Weather data
 * ...Fetch complete.
 * The status code was: 200
 */