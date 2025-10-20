// --- Step 1: Generate a random decimal number ---
// Math.random() is a built-in JavaScript function that generates a 
// random floating-point (decimal) number between 0 (inclusive) and 1 (exclusive).
// Example: The value of 'n' could be 0.12345, 0.98765, or any other random decimal in that range.
var n = Math.random();

// --- Step 2: Scale the number to the desired range ---
// We multiply our random decimal (0 - 0.999...) by 6.
// This expands the range of possible values from 0 up to 5.999...
// Example: If n was 0.5, it now becomes 3. If n was 0.9, it now becomes 5.4.
n = n * 6;

// --- Step 3: Round the number down to a whole number ---
// Math.floor() is a function that rounds a number DOWN to the nearest whole integer.
// This effectively chops off the decimal part, leaving only the whole number.
// Example: 5.999... becomes 5, and 0.123 becomes 0.
// This is how we get a random whole number from 0 to 5.
n = Math.floor(n);

// --- Step 4: Display the final result ---
// console.log() prints the final value of 'n' to the console.
// The output will be a single random integer: 0, 1, 2, 3, 4, or 5.
console.log(n);