// for...of loop

// Definition: The 'for...of' loop iterates over **iterable objects**.
// Iterable objects include Strings, Arrays, Maps, Sets, etc.
// It gives you the actual *value* of each element in the collection, one by one.
// Use case: When you need the *value* of each item in an array or each character in a string.

let str = "Snehil";

console.log("--- For...of loop with String 'Snehil' ---");
for (let char of str) { // 'char' (you named it 'i') will hold one character per iteration
    // Iteration 1: char = "S"
    // Iteration 2: char = "n"
    // ...
    // Iteration 6: char = "l"
    console.log("char =", char);
}

// Example: Using 'for...of' to find the length of a string
let str1 = "Snehil Snehil";
let size = 0;
console.log("\n--- For...of loop calculating string size ---");
for (let i of str1) { // 'i' represents the character
    console.log("i= ", i);
    size++; // Increment the counter for each character
}

// Note: I fixed the syntax error here. Use a comma (,) or plus (+) to concatenate.
console.log("String size =", size); // Output: String size = 13

// Perfect Example for 'for...of' (using an Array)
console.log("\n--- For...of loop with an Array ---");
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
    console.log(`I love to eat ${fruit}s!`);
}

//-----------------------------------------------

// for...in loop

// Definition: The 'for...in' loop iterates over the **enumerable properties** of an object.
// It gives you the *key* (or property name) of each property in the object.
// Use case: When you need to get the *keys* (like 'name', 'age') from an object.

let student = {
    name: "Rahul",
    age: 20,
    cgpa: 7.5,
    isPass: true
};

console.log("\n--- For...in loop with an Object (Keys only) ---");
for (let key in student) { // 'key' (you named it 'i') will hold one property *name* per iteration
    // Iteration 1: key = "name"
    // Iteration 2: key = "age"
    // Iteration 3: key = "cgpa"
    // Iteration 4: key = "isPass"
    console.log(key);
}

// Perfect Example for 'for...in' (accessing keys *and* values)
// To get the values, you use the key as an index on the object.
console.log("\n--- For...in loop (Keys and Values) ---");
for (let propName in student) {
    // student[propName] uses the variable 'propName' to access the object's value
    console.log(`${propName} : ${student[propName]}`);
}
// Output:
// name : Rahul
// age : 20
// cgpa : 7.5
// isPass : true