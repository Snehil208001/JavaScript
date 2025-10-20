/*
================================================================================
 I. INTRODUCTION TO VARIABLES
 
 In JavaScript, variables are containers for storing data values.
 We use a keyword to "declare" a variable. The three keywords are:
 1. var (The old way, generally avoided now)
 2. let (The modern way for variables that will change)
 3. const (The modern way for variables that will not change)
================================================================================
*/


/*
================================================================================
 II. `let` - For variables that can be reassigned
================================================================================
*/

// 'let' declares a block-scoped variable. A "block" is any code inside curly braces {}.
// This is the preferred keyword for variables whose value you expect to change.
let currentScore = 100;

// The value of a 'let' variable can be updated or reassigned later in the code.
currentScore = 150;

// However, you CANNOT re-declare a variable using 'let' in the same scope.
// let currentScore = 200; // This would cause a SyntaxError: 'currentScore' has already been declared.


/*
================================================================================
 III. `const` - For variables that will NOT be reassigned (constants)
================================================================================
*/

// 'const' declares a block-scoped variable whose value cannot be reassigned.
// It's a "constant". You must assign a value to it when you declare it.
const playerName = "Alice";

// You CANNOT update the value of a 'const' variable.
// playerName = "Bob"; // This would cause a TypeError: Assignment to constant variable.

// --- Special Rule for Objects and Arrays ---
// When a 'const' variable holds an object or an array, the variable's reference is constant,
// but the contents of the object or array can still be changed.

const playerStats = {
  level: 5,
  health: 100
};

// This is ALLOWED: We are modifying a property inside the object, not reassigning the variable itself.
playerStats.level = 6;

// This is NOT ALLOWED: We are trying to assign a completely new object to the constant variable.
// playerStats = { level: 7, health: 120 }; // This would cause a TypeError.


/*
================================================================================
 IV. `var` - The old way (legacy)
================================================================================
*/

// 'var' declares a function-scoped or globally-scoped variable.
// It was the only way to declare variables before 2015 and has some quirky behaviors.
// It is generally recommended to use 'let' and 'const' instead.
var gameVersion = "1.0";

// 'var' variables can be updated, just like 'let'.
gameVersion = "1.1";

// 'var' variables CAN be re-declared in the same scope without causing an error.
// This can lead to bugs, as you might accidentally overwrite a variable.
var gameVersion = "2.0"; // This is allowed.