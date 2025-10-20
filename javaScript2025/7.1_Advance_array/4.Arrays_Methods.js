// 1. map(): Create a new array by transforming each element
let numbers = [1, 2, 3, 4];
let squares = numbers.map(num => num * num);
console.log("Squares:", squares); // [1, 4, 9, 16]

// ✅ React Native use case:
// - Rendering lists dynamically in JSX (Text, View, FlatList)
// Example:
// numbers.map(num => <Text key={num}>{num}</Text>)

// -----------------------------------------------------------

// 2. filter(): Create a new array with elements that pass a condition
let ages = [12, 17, 20, 25];
let adults = ages.filter(age => age >= 18);
console.log("Adults:", adults); // [20, 25]

// ✅ React Native use case:
// - Filtering data before rendering
// Example:
// users.filter(user => user.isActive).map(user => <UserCard key={user.id} {...user}/>)

// -----------------------------------------------------------

// 3. reduce(): Reduce array to a single value (sum, max, etc.)
let marks = [85, 97, 44, 37, 76, 60];
let total = marks.reduce((acc, curr) => acc + curr, 0);
console.log("Total marks:", total); // 399

// ✅ React Native use case:
// - Calculating totals, averages, or aggregating data from API
// Example: sum of cart items in a shopping app

// -----------------------------------------------------------

// 4. forEach(): Execute a function on each element (side-effects)
let hobbies = ["reading", "gaming", "drawing"];
hobbies.forEach(hobby => console.log("I like", hobby));
/* Output:
I like reading
I like gaming
I like drawing
*/

// ✅ React Native use case:
// - Performing side-effects like logging or updating local variables
// - Not used directly in JSX since it doesn't return a new array

// -----------------------------------------------------------

// 5. push(): Add elements to the end of an array
let fruits = ["apple", "banana"];
fruits.push("mango");
console.log("After push:", fruits); // ["apple", "banana", "mango"]

// ✅ React Native use case:
// - Adding new items to an array before updating state
// Example: setItems([...items, newItem])

// -----------------------------------------------------------

// 6. pop(): Remove last element
let numbers2 = [10, 20, 30];
numbers2.pop();
console.log("After pop:", numbers2); // [10, 20]

// ✅ React Native use case:
// - Removing last element of an array (undo actions, stack-like operations)

// -----------------------------------------------------------

// 7. includes(): Check if an element exists in the array
let colors = ["red", "green", "blue"];
console.log(colors.includes("green")); // true
console.log(colors.includes("yellow")); // false

// ✅ React Native use case:
// - Conditional rendering or validations
// Example: if(selectedColors.includes("blue")) { ... }

// -----------------------------------------------------------

// 8. find(): Find first element that satisfies a condition
let users = [
  {id: 1, name: "Alice", active: true},
  {id: 2, name: "Bob", active: false}
];
let activeUser = users.find(user => user.active);
console.log(activeUser); // {id: 1, name: "Alice", active: true}

// ✅ React Native use case:
// - Finding a specific object from API response
// Example: get the logged-in user or selected item

// -----------------------------------------------------------

// 9. findIndex(): Get index of first element that satisfies a condition
let index = users.findIndex(user => user.name === "Bob");
console.log("Index of Bob:", index); // 1

// ✅ React Native use case:
// - Updating or deleting a specific object in state array
// Example: items.splice(index, 1) to remove a selected item


// -----------------------------------------------------------

// 10. slice(): Returns a portion of an array without modifying the original
let numbers3 = [10, 20, 30, 40, 50];
let part = numbers3.slice(1, 4); // from index 1 to 3
console.log("Sliced array:", part);       // [20, 30, 40]
console.log("Original array:", numbers3); // [10, 20, 30, 40, 50]

// ✅ React Native use case:
// - Paginating data or showing a subset of a list
// Example: messages.slice(0, 5).map(msg => <Text key={msg.id}>{msg.text}</Text>)

// -----------------------------------------------------------

// 11. splice(): Adds/removes elements from an array (modifies original)
let numbers4 = [1, 2, 3, 4, 5];
numbers4.splice(2, 2, 8, 9); // remove 2 elements at index 2, add 8 & 9
console.log("After splice:", numbers4); // [1, 2, 8, 9, 5]

// ✅ React Native use case:
// - Updating or removing specific items in a state array
// Example:
// let todos = [...state.todos];
// todos.splice(index, 1); // remove selected todo
// setState({ todos });
