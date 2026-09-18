// Q1
// Write a try/catch block that tries to parse an invalid JSON string.
// Print the error message in the catch block.

// Q2
// Write a function divide(a: number, b: number): number.
// Throw an Error("Division by zero!") if b is 0.
// Call it with valid and invalid inputs inside try/catch blocks.

// Q3
// Write a function getElement(arr: number[], index: number): number.
// Throw an Error("Index out of bounds!") if index is invalid.
// Handle the error with try/catch and print a friendly message.

// Q4
// Write a try/catch/finally block.
// In try: print "Trying...".
// In catch: print "An error occurred".
// In finally: print "Always runs!".
// Run it once without errors and once with an error thrown in try.

// Q5
// Write a function validateAge(age: number): void.
// Throw an Error("Age must be a positive number.") if age is negative.
// Throw an Error("Age cannot exceed 120.") if age is above 120.
// Test with valid and invalid ages inside try/catch.

// Q6
// Create a custom error class ValidationError that extends Error.
// It should accept a message and a field name.
// Throw it when a username is empty.
// Catch it and print both the message and the field name.

// Q7
// Write a function parseNumber(input: string): number.
// Throw an Error("Not a valid number!") if the string cannot be parsed as a number.
// Use try/catch when calling it with "42", "abc", and "3.14".

// Q8
// Write an async function fetchData() that throws an Error("Network error!").
// Use try/catch with await to handle the error and print a message.

// Q9
// Write a function processArray(arr: number[]): number.
// Throw an Error("Array cannot be empty.") if the array is empty.
// Otherwise return the sum.
// Handle it with try/catch.

// Q10
// Create two custom error classes:
// - NotFoundError extends Error
// - UnauthorizedError extends Error
// Write a function getResource(id: number, isAuthorized: boolean).
// Throw NotFoundError if id < 0.
// Throw UnauthorizedError if isAuthorized is false.
// Use try/catch to catch each specific error type using instanceof.

// Q11
// Write a function readConfig(config: object | null).
// Throw an Error("Config is missing!") if config is null.
// Otherwise print config details.
// Handle the error with try/catch.

// Q12
// Write a function openFile(filename: string): string.
// Throw an Error("File not found: <filename>") if the filename is "missing.txt".
// Handle it with try/catch and print a fallback message.

// Q13
// Write an async function fetchUser(id: number).
// If id is negative, throw an Error("Invalid user ID.").
// Otherwise simulate a fetch and return a user object after 1 second.
// Use try/catch with await when calling it.

// Q14
// Write a function safeDivide(a: number, b: number): number | string.
// Instead of throwing, catch the division by zero case and return the string "Error: cannot divide by zero".
// Print the result for both valid and invalid inputs.

// Q15
// Write a function runPipeline(steps: Array<() => void>): void.
// Execute each step in order.
// If any step throws an error, catch it, print the error message,
// and continue to the next step.
// Test with a mix of steps: some that succeed and some that throw.
