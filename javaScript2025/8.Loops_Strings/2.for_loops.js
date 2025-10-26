//loops in JS
//Loops are fundamental control structures in programming.
//They are used to execute a piece of code repeatedly as long as a certain condition is true.

//-----------------------------------------------

//for loop
//The 'for' loop is often used when you know in advance how many times you want the loop to run.
//It has three parts separated by semicolons:
// 1. Initialization: (let i = 1) Runs once before the loop starts. Used to declare and initialize a counter variable.
// 2. Condition: (i <= 6) Checked *before* each iteration. If it's true, the loop body runs. If it's false, the loop stops.
// 3. Update: (i++) Runs *after* each iteration. Used to increment or decrement the counter.

for (let i = 1; i <= 6; i++) {
    console.log('Snehil'); // This block of code will run 6 times
}

console.log('Loops has ended');

//-----------------------------------------------

//Calculate sum of 1 to 5
let sum = 0; // Initialize an 'accumulator' variable to store the total
for (let x = 1; x <= 5; x++) {
    // In each iteration, add the current value of 'x' to 'sum'
    // Iteration 1: sum = 0 + 1  (sum is 1)
    // Iteration 2: sum = 1 + 2  (sum is 3)
    // Iteration 3: sum = 3 + 3  (sum is 6)
    // Iteration 4: sum = 6 + 4  (sum is 10)
    // Iteration 5: sum = 10 + 5 (sum is 15)
    sum = sum + x;
}

console.log('Sum =', sum); // Output will be 15

//-----------------------------------------------

//Calculate sum of 1 to n (a variable upper limit)
let sum1 = 0;
let n = 10; // We can easily change 'n' to calculate a different sum

for (let z = 1; z <= n; z++) {
    sum1 = sum1 + z;
}

console.log('Sum =', sum1); // Output will be 55 (sum of 1 to 10)

//===============================================
