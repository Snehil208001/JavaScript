/*
  --- What are Functions? ---

  Think of a function as a way to package a set of instructions under a single name. 
  It's like a recipe 📜. Instead of listing every single step each time you want to bake a cake, 
  you just say "follow the chocolate cake recipe."

  In coding, you write a block of code once, give it a name, and then you can run that 
  entire block anytime you want by simply "calling" its name. This saves you from 
  rewriting the same code over and over again.

  --- How to Create a Function ---

  1. The 'function' keyword: You start by telling JavaScript you are creating a function.
  2. The function name: You give it a descriptive name (like getMilk).
  3. Parentheses '()': These are for passing in data (we'll see this in the next example).
  4. Curly Braces '{}': The instructions, or "recipe steps," go inside these braces.

*/

// Here we are DEFINING the function. We are creating the recipe.
function getMilk() {
    console.log("Leave");
    console.log("Move right");
    console.log("Move right");
    console.log("move straight");
    console.log("move straight");
    console.log("get milk");
    console.log("come back");
    console.log("home");
}

// Here we are CALLING the function. We are telling the program to run the recipe.
getMilk();


/**
 * Calculates the cost of buying a certain number of milk cartons.
 * @param {number} numberOfCartons - The number of milk cartons the robot should buy.
 * @param {number} costPerCarton - The cost of a single carton of milk.
 */
function calculateMilkCost(numberOfCartons, costPerCarton) {
    console.log("Robot is leaving the house.");
    
    // Calculate the total cost
    let totalCost = numberOfCartons * costPerCarton;
    
    // The 'return' keyword sends a value back from the function
    console.log("Robot calculated the total cost. It is $" + totalCost + ".");
    return totalCost;
}

// --- Calling the function and using its output ---

// Call the function to buy 2 cartons that cost $3 each.
let moneyToBring = calculateMilkCost(2, 3); 

console.log("Okay, I need to give the robot $" + moneyToBring + ".");