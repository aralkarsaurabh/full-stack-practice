// Q1
// Create a named export for a function sayHello() in a separate file.
// Import it here and call it.

// Q2
// Create a named export for a constant MAX_RETRIES = 3 in a separate file.
// Import it here and print it.

// Q3
// Create a default export for a function greetUser(name) in a separate file.
// Import it here with any name and call it.

// Q4
// Create a file that exports:
// - a named export function add(a, b)
// - a default export function multiply(a, b)
// Import both here using the correct syntax for each.

// Q5
// Create a file with multiple named exports:
// - firstName, lastName (strings)
// - age (number)
// Import them all in a single import statement here and print them.

// Q6
// Create a file that exports a type alias UserRole:
// "admin" | "editor" | "viewer"
// Import the type here and use it to type a variable.

// Q7
// Create a file that exports a named function formatDate(date: Date): string.
// Import it here with an alias (rename it on import) and use it.

// Q8
// Create a file that exports an interface Product:
// { id: number, name: string, price: number }
// Export a function createProduct that creates a Product.
// Import both the interface and the function here.

// Q9
// Create a file that has named exports.
// Import everything from that file using:
// import * as Utils from './...'
// Print several of the imported values.

// Q10
// Create a file that exports an array of strings called fruits.
// Import it here, loop through it, and print each fruit.

// Q11
// Create a file that exports a class Calculator with add, subtract, multiply, divide.
// Import the class here, create an instance, and use all methods.

// Q12
// Create three separate files, each exporting one utility function.
// Create a barrel file (index.ts or utils.ts) that re-exports all three.
// Import from the barrel file here and use all three functions.

// Q13
// Create a file that exports a default class Animal with a speak() method.
// Create another file that imports Animal and creates a Dog subclass.
// Import Dog here and call speak().

// Q14
// Create a file that has both named exports and a default export.
// Import the default and named exports together in a single import statement.
// Use all of them here.

// Q15
// Create two files that import from each other (circular imports) — 
// file A exports a value used in file B, and file B exports a value used in file A.
// Import from both here and print both values.
// Observe and note any behavior differences from normal imports.
