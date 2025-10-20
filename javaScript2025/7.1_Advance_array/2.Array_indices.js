// An array is a collection of multiple values stored in a single variable.
let marks = [97, 82, 75, 64, 36];  

// Array indexing starts from 0.
// marks[0] refers to the first element in the array.
console.log(marks[0]);  // Output: 97

// marks[4] refers to the fifth element in the array (index 4 = last element here).
console.log(marks[4]);  // Output: 36

// You can also add or update elements in an array using an index.
// Here, marks[5] adds a new element (since index 5 doesn’t exist yet).
marks[5] = 77;  // Adds a new value at the 6th position.

// Prints the updated array with the new element.
console.log(marks);  // Output: [97, 82, 75, 64, 36, 77]
