// Definition: An array is an ordered collection of values.
// Each value is called an element, specified by an index.

// Example 1: Creating an array of strings (e.g., for a list of names).
// The first element is at index 0.
const names = ["Alice", "Bob", "Charlie"];

// Example 2: Creating an array of objects (a very common pattern in React Native).
// This is how you'd typically receive data from an API (e.g., a list of users).
const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
];

// --- Accessing and Modifying Elements ---

// Accessing an element: You use its index in square brackets [].
// This would get the user object for "Bob".
const secondUser = users[1]; // Result: { id: 2, name: "Bob", age: 25 }

// Getting the length: The .length property tells you how many elements are in the array.
const numberOfUsers = users.length; // Result: 3

// Adding an element: The .push() method adds a new element to the end of the array.
// Note: In React, you should avoid modifying arrays directly (see spread syntax below).
names.push("David"); // names is now ["Alice", "Bob", "Charlie", "David"]


const userList = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Charlie", role: "user" },
];

// --- .map() ---
// Definition: Creates a new array by calling a function for each element.
// Use Case: You'd use this inside your component's return statement to show all user names.
// For example: userNames.map(name => <Text>{name}</Text>)
const userNames = userList.map(user => user.name);
// userNames is now ["Alice", "Bob", "Charlie"]


// --- .filter() ---
// Definition: Creates a new array with all elements that pass the test implemented by the provided function.
// Use Case: To get a list of all users who are not admins.
const regularUsers = userList.filter(user => user.role === "user");
// regularUsers is now [{ id: 2, name: "Bob", role: "user" }, { id: 3, name: "Charlie", role: "user" }]


// --- Spread Syntax (...) for updating state ---
// Definition: The spread syntax (...) allows you to copy an existing array.
// Use Case: This is the correct way to add a new item to an array stored in React state.
const newUser = { id: 4, name: "David", role: "user" };
const updatedUserList = [...userList, newUser]; // Creates a NEW array
// updatedUserList is a copy of userList with newUser added to the end.