// This part is correct
var name = "Snehil";
var slice = name.slice(0, 3); // Extracts characters from index 0 up to 3
console.log(slice); // Output: Sne

// This is the corrected part
var Name = ("Snehil").toUpperCase(); // <-- Added parentheses () to call the function
console.log(Name); // Output: snehil