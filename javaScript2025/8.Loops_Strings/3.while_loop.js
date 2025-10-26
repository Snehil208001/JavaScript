//While loop
// A 'while' loop repeatedly executes a block of code as long as a specified condition remains true.
// The condition is checked *before* each iteration.
// If the condition is false initially, the loop body will never run.

// print 1 to 5
let i = 1; // 1. Initialization: Start a counter variable 'i' at 1.
while (i <= 5) { // 2. Condition: The loop will continue as long as 'i' is less than or equal to 5.
    console.log(i); // 3. Loop Body: Print the current value of 'i'.
    i++; // 4. Update: Increment 'i' by 1. This is crucial to prevent an infinite loop.
         // If 'i' never changes, the condition (i <= 5) will always be true.
}
// Loop execution:
// i=1: Condition (1<=5) is true. Prints 1. i becomes 2.
// i=2: Condition (2<=5) is true. Prints 2. i becomes 3.
// i=3: Condition (3<=5) is true. Prints 3. i becomes 4.
// i=4: Condition (4<=5) is true. Prints 4. i becomes 5.
// i=5: Condition (5<=5) is true. Prints 5. i becomes 6.
// i=6: Condition (6<=5) is false. The loop terminates.


// do while loop
// A 'do-while' loop is similar to a 'while' loop, but with one key difference:
// The loop body is executed *at least once* *before* the condition is checked.
// After the first run, it will continue to execute as long as the condition remains true.

let j = 20; // 1. Initialization: Start 'j' at 20.
do {
    // 2. Loop Body: This block runs *at least once*, regardless of the condition.
    console.log("Snehil"); // Prints "Snehil"
    j++; // 'j' is incremented to 21.
} while (j <= 10); // 3. Condition: The condition (21 <= 10) is checked *after* the loop body runs.
                   // The condition is false.
                   
// Because the condition is false, the loop terminates after its first and only run.