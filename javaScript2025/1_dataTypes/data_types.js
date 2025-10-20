/*
================================================================================
 I. PRIMITIVE DATA TYPES
 
 Primitives are "immutable," meaning their values cannot be changed once created.
 A new value is created instead.
================================================================================
*/

// 1. String: Represents textual data. It's enclosed in single (''), double (""), or backticks (``).
let employeeName = "Alice";
let message = 'Hello, world!';


// 2. Number: Represents both integer and floating-point numbers.
// There's no distinction between 'int' and 'float' like in other languages.
let age = 30;
let price = 199.99;


// 3. BigInt: Represents whole numbers larger than the maximum safe integer that the 'Number' type can hold.
// Created by adding 'n' to the end of an integer.
let veryLargeNumber = 90071992547409919999n;


// 4. Boolean: Represents a logical entity and can have only two values: true or false.
// Often used for conditional logic.
let isManager = true;
let hasCompletedTask = false;


// 5. Undefined: Represents a variable that has been declared but has not yet been assigned a value.
// This is often the default value.
let department; // This variable is currently 'undefined'.


// 6. Null: Represents the intentional absence of any object value.
// It's a deliberate assignment of "no value".
let supervisor = null; // The employee has no supervisor assigned.


// 7. Symbol: Represents a unique and anonymous identifier.
// Often used as unique keys for object properties to avoid name clashes.
let uniqueId = Symbol('id');


/*
================================================================================
 II. OBJECT DATA TYPE
 
 The Object is a non-primitive type used to store collections of data
 and more complex entities. It's a collection of key-value pairs.
 Arrays and Functions are also technically types of objects in JavaScript.
================================================================================
*/

// 1. Object: The most common non-primitive type. A collection of properties (key-value pairs).
let employeeProfile = {
  firstName: "Charlie", // The key is 'firstName', the value is the string "Charlie"
  lastName: "Brown",
  employeeId: 12345
};


// 2. Array: A special type of object used for storing ordered lists of values.
// Arrays use numbered indices starting from 0.
let teamMembers = ["Alice", "Bob", "Charlie"];


// 3. Function: A special type of object that can be called to execute a block of code.
// Functions are "first-class citizens" in JS, meaning they can be treated like any other variable.
function calculateBonus(salary) {
  return salary * 0.1;
}

// You can use the `typeof` operator to see the data type of a variable in your console.
console.log(typeof employeeName); // "string"
console.log(typeof age);          // "number"
console.log(typeof isManager);    // "boolean"
console.log(typeof employeeProfile); // "object"
console.log(typeof teamMembers);   // "object" (arrays are objects)