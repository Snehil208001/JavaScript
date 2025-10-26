// Definition: A callback is a function that is passed as an argument to another function. 
// This "outer" function can then execute (or "call back") the passed-in function at a specific time 
// or when a certain task is complete. It's a key concept for asynchronous programming 
// and for creating flexible, reusable functions.

function sum(a,b){
    // 4. This function is finally executed. 'a' is 1 and 'b' is 2.
    console.log(a+b); // 5. It prints the result (3) to the console.
}

function calculator(a,b,summCallback){
    // 2. Inside 'calculator', 'a' is 1, 'b' is 2, 
    //    and 'summCallback' is a reference to the 'sum' function.
    summCallback(a,b); // 3. The 'calculator' function "calls back" the function it received, 
                     //    passing 1 and 2 to it. This line effectively becomes: sum(1, 2);
}

// 1. We call 'calculator' and pass three arguments:
//    - The number 1 (for 'a')
//    - The number 2 (for 'b')
//    - The 'sum' function itself (for 'summCallback'). 
//      Note: We are passing the *function*, not calling it (no parentheses).
calculator(1,2,sum);

// --- Code Explanation ---
// 1. You define a function `sum` that takes two numbers and prints their sum.
// 2. You define a "higher-order" function `calculator` that takes two numbers AND a third argument, `summCallback`, which it *expects* to be a function.
// 3. Inside `calculator`, it executes whatever function was passed to it as `summCallback`, using the numbers `a` and `b`.
// 4. When you call `calculator(1, 2, sum)`, you are telling the `calculator` to use the `sum` function as its callback.
// 5. The `calculator` runs `summCallback(a, b)`, which is just a placeholder for `sum(1, 2)`.
// 6. The `sum` function runs, calculates `1 + 2`, and prints `3` to the console.