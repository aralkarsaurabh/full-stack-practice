// Q1
// Create a Promise that resolves with the string "Hello from Promise!"
// after 1 second. Print the value using .then().

// Q2
// Create a Promise that rejects with an Error("Something went wrong!").
// Handle the error using .catch() and print the error message.

// Q3
// Create a Promise that resolves with a number after 2 seconds.
// Chain .then() to double the number and print the result.

// Q4
// Create a function fetchUser() that returns a Promise.
// It should resolve with an object: { id: 1, name: "Saurabh" }.
// Call fetchUser() and print the user using .then().

// Q5
// Create two Promises:
// - The first resolves with "Data 1" after 1 second.
// - The second resolves with "Data 2" after 2 seconds.
// Use Promise.all() to wait for both and print the results.

// Q6
// Create three Promises that resolve with different values.
// Use Promise.race() to print the value of the first one to resolve.

// Q7
// Create a function getTemperature() that returns a Promise
// resolving with a random number between 20 and 40.
// Chain .then() to print "Hot" if above 35, "Warm" otherwise.

// Q8
// Create a Promise that resolves with an array of numbers: [1, 2, 3, 4, 5].
// Chain .then() to filter only even numbers and print them.

// Q9
// Create a function login(username: string, password: string) that returns a Promise.
// Resolve with "Login successful" if username is "admin" and password is "1234".
// Reject with "Invalid credentials" otherwise.
// Test both cases using .then() and .catch().

// Q10
// Create three Promises:
// - The first resolves after 1 second.
// - The second rejects after 2 seconds.
// - The third resolves after 3 seconds.
// Use Promise.allSettled() and print the status and value/reason of each.

// Q11
// Create a function fetchData() that returns a Promise.
// It should resolve with "API Data" after 1.5 seconds.
// Chain two .then() calls:
// - First: add a prefix "Received: " to the data.
// - Second: print the final string.

// Q12
// Create a function divide(a: number, b: number) that returns a Promise.
// Reject with "Division by zero not allowed" if b is 0.
// Otherwise resolve with the result.
// Test both cases and handle them with .then() and .catch().

// Q13
// Create a Promise chain that simulates placing an order:
// - Step 1 Promise: "Order placed"
// - Step 2 Promise: "Order shipped"
// - Step 3 Promise: "Order delivered"
// Each step should resolve after 1 second.
// Print each step's message as the chain progresses.

// Q14
// Create a function fetchWithTimeout(timeoutMs: number) that returns a Promise.
// It should resolve with "Data loaded" after 2 seconds.
// Create a timeout Promise that rejects with "Request timed out" after timeoutMs.
// Use Promise.race() to handle whichever resolves/rejects first.
// Test with timeoutMs = 1000 and timeoutMs = 3000.

// Q15
// Create a function retryOperation(attempts: number) that returns a Promise.
// It should fail for the first 2 attempts and succeed on the 3rd.
// Use recursion with Promises to retry and eventually print "Success after retries".
