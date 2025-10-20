// Q.1: For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class

// Step 1: Store the marks in an array
let marks  = [85, 97, 44, 37, 76, 60];

// Step 2: Initialize a variable to store the total sum of marks
let sum = 0;

// Step 3: Loop through each element of the array using for...of and add it to sum
for (let mark of marks) {
    sum += mark;  // sum = sum + mark
}

// Step 4: Calculate average by dividing total sum by the number of students
let avg = sum / marks.length;

// Step 5: Print the average marks
console.log("Average marks of the class:", avg);
// Output: Average marks of the class: 66.5

/*
Q.2: For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF. 
Change the array to store final price after applying offer.
*/

// Step 1: Original prices array
let MRP = [250, 645, 300, 900, 50];

// Step 2: Create an empty array to store discounted prices
let finalPrices = [];

// Step 3: Loop through each price and apply 10% discount
for (let price of MRP) {
    let discountedPrice = price * 0.9; // 10% off = multiply by 0.9
    finalPrices.push(discountedPrice); // add discounted price to new array
}

// Step 4: Print final prices after discount
console.log("Final prices after 10% OFF:", finalPrices);
// Output: [225, 580.5, 270, 810, 45]
