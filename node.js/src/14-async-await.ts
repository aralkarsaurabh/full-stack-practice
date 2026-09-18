// Q1
// Write an async function greet() that returns "Hello, World!".
// Call it and print the result using await.

// Q2
// Write an async function delay(ms: number) that waits for ms milliseconds.
// Use it to print "Start", wait 2 seconds, then print "End".

// Q3
// Write an async function fetchUser() that returns a user object
// after a simulated 1-second delay:
// { id: 1, name: "Saurabh", email: "saurabh@example.com" }
// Call it with await and print the user.

// Q4
// Write an async function getSquare(n: number) that returns n squared
// after a 500ms delay.
// Call it with await and print the result.

// Q5
// Write two async functions:
// - fetchPosts() – returns an array of post titles after 1 second.
// - fetchComments() – returns an array of comments after 1.5 seconds.
// Call them sequentially (one after the other) using await and print both.

// Q6
// Use the same fetchPosts() and fetchComments() from Q5.
// Call them in parallel using Promise.all with await.
// Compare the time taken to Q5.

// Q7
// Write an async function fetchProduct(id: number)
// that simulates fetching a product by ID after 1 second.
// Return a product object: { id, name: "Product <id>", price: id * 100 }.
// Call it for IDs 1, 2, and 3 using await in a loop and print each product.

// Q8
// Write an async function calculateTotal(prices: number[]) that
// simulates an async calculation (with a delay) and returns the sum.
// Call it with await and print the result.

// Q9
// Write an async function login(username: string, password: string).
// After a 1-second delay, return "Login successful" if credentials match "admin" / "1234".
// Otherwise throw an Error("Invalid credentials").
// Call it using await and handle the error with try/catch.

// Q10
// Write an async function loadConfig() that returns a config object after 1 second:
// { theme: "dark", language: "en", version: "1.0.0" }
// Write a second async function initApp() that awaits loadConfig()
// and prints each config value.
// Call initApp().

// Q11
// Write an async function processItems(items: string[]) that
// loops through each item, waits 500ms per item, and prints:
// "Processing: <item>"
// After all items, print "All items processed."

// Q12
// Write an async function fetchWithFallback().
// Try to await a Promise that rejects after 1 second.
// In the catch block, return a fallback value: "Fallback data".
// Print the final result.

// Q13
// Write an async function runTasks().
// It should run three async tasks sequentially:
// - task1() prints "Task 1 done" after 1 second.
// - task2() prints "Task 2 done" after 1 second.
// - task3() prints "Task 3 done" after 1 second.
// Print "All tasks complete" when done.

// Q14
// Write an async function getUserPosts(userId: number).
// First await fetchUser() (from Q3) to get the user.
// Then await fetchPosts() to get the posts.
// Print: "Posts for <user.name>: <posts>"

// Q15
// Write an async function retryFetch(maxAttempts: number).
// Simulate a failing API that succeeds only on the 3rd attempt.
// Use a loop with await to retry up to maxAttempts times.
// Print the attempt number on each try.
// Print "Success!" when it works, or "All attempts failed" if it doesn't.
