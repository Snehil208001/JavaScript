/*
=========================
LOOPS IMPORTANT FOR REACT NATIVE
=========================
*/

let n = 20

let Snehil = "Hello World"

// 1. for loop
let nums = [1, 2, 3, 4];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

// 2. for...of loop
let nums2 = [10, 20, 30];
for (let num of nums2) {
    console.log(num);
}

/*=========================
STRINGS IMPORTANT FOR REACT NATIVE
=========================*/

// 1. length
let str = "Hello";
console.log(str.length); // 5

// 2. toUpperCase() / toLowerCase()
console.log(str.toUpperCase()); // "HELLO"
console.log(str.toLowerCase()); // "hello"

// 3. indexOf() / includes()
console.log(str.indexOf("e")); // 1
console.log(str.includes("H")); // true

// 4. slice(start, end)
console.log(str.slice(0, 2)); // "He"

// 5. split(separator)
let csv = "apple,banana,mango";
let fruits = csv.split(",");
console.log(fruits); // ["apple","banana","mango"]

// 6. template literals
let name = "Alice";
console.log(`Hello, ${name}`); // "Hello, Alice"

/*=========================
LOOPS + STRINGS
=========================*/

// Iterating characters in a string
for (let char of str) {
    console.log(char);
}

// Reversing a string using loop
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed); // "olleH"

/*=========================
SUMMARY
=========================
Loops: for, for...of
Strings: length, toUpperCase, toLowerCase, indexOf, includes, slice, split, template literals
Loops + Strings: iterate characters, reverse strings, format text*/
