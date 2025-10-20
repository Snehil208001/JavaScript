// An array is a collection of multiple values stored in a single variable.
let fruits = ["apple", "banana", "mango", "orange", "grapes"];

// -----------------------------
// Example 1: Using a traditional for loop
// -----------------------------
// The for loop allows you to run a block of code multiple times.
// It is useful when you need both the element and its index.
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit at index", i, "is", fruits[i]);
    // Example output: Fruit at index 0 is apple
}

// -----------------------------
// Example 2: Using a for...of loop
// -----------------------------
// The for...of loop is used to directly iterate through the elements of an array.
// Here we will create a new array containing the length of each fruit name.
let nameLengths = [];  // empty array to store lengths

for (let fruit of fruits) {
    // .length gives the number of characters in each string.
    nameLengths.push(fruit.length);
}

console.log("Length of each fruit name:", nameLengths);
// Example output: Length of each fruit name: [5, 6, 5, 6, 6]
