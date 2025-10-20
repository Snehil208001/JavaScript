/*
  --- What are if-else statements? ---

  'if-else' statements are a fundamental concept in programming used for making decisions.
  They allow your code to run different blocks of instructions based on whether a certain
  condition is true or false.

  Think of it like a fork in the road fork_and_knife_with_plate:
  - The 'if' is the first path. You check a condition (e.g., "is it raining?").
  - If the condition is true, you execute the code inside the 'if' block (e.g., "take an umbrella").
  - The 'else' is the alternative path. If the condition is false, you execute the code
    inside the 'else' block (e.g., "wear sunglasses").
  - 'else if' lets you check multiple conditions in a sequence.

  --- Structure ---

  if (condition1 is true) {
    // Do this
  } else if (condition2 is true) {
    // Do this instead
  } else {
    // If none of the above are true, do this
  }
*/

// --- BMI Calculator Example ---

// Step 1: Define a function to calculate and interpret the BMI.
// A function bundles our logic so we can easily reuse it.
function bmiCalculator(weight, height) {

    // Step 2: Calculate the BMI using the formula: weight (kg) / (height (m) * height (m))
    // Math.pow(height, 2) is the same as height * height.
    var bmi = weight / Math.pow(height, 2);

    // This variable will hold our final interpretation message.
    var interpretation;

    // Step 3: Use an if-else if-else chain to make a decision based on the BMI value.

    // First, check if the BMI is less than 18.5
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } 
    // If the first condition was false, check if the BMI is between 18.5 and 24.9
    else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } 
    // If none of the above conditions were true, this block will run by default.
    else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }

    // Step 4: 'return' the final message. This sends the result out of the function.
    return interpretation;
}

// --- Calling the function ---
// Now we use our function with some sample data.
// Let's test with a weight of 65kg and a height of 1.8m.
var bmiResult = bmiCalculator(74, 1.78);

// Print the result to the console.
console.log(bmiResult); // Output: Your BMI is 20.06..., so you have a normal weight.