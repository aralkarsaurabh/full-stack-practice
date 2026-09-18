// Q1
// Write a generic function identity<T>
// that takes a value of any type and returns it.
// Call it with a string, a number, and a boolean.

// Q2
// Write a generic function getFirst<T>
// that takes an array and returns the first element.
// Call it with a number array and a string array.

// Q3
// Write a generic function getLast<T>
// that takes an array and returns the last element.
// Call it with different types of arrays.

// Q4
// Write a generic function wrapInArray<T>
// that takes a single value and returns it wrapped in an array.
// Example: wrapInArray(5) → [5]

// Q5
// Write a generic function reverseArray<T>
// that takes an array and returns it reversed.
// Call it with a number array and a string array.

// Q6
// Write a generic function pair<T, U>
// that takes two values of potentially different types
// and returns them as an object: { first: T, second: U }.
// Call it with a string and a number.

// Q7
// Write a generic function filterArray<T>
// that takes an array and a predicate function,
// and returns a new array with only the matching elements.
// Use it to filter even numbers from [1, 2, 3, 4, 5, 6].

// Q8
// Create a generic interface Box<T> with:
// property: value (T).
// method: getValue(): T.
// Create a Box for a string and a Box for a number.

// Q9
// Write a generic function merge<T, U>
// that merges two objects into one.
// Example: merge({ name: "Alice" }, { age: 25 }) → { name: "Alice", age: 25 }

// Q10
// Write a generic function repeat<T>
// that takes a value and a count,
// and returns an array with the value repeated count times.
// Example: repeat("hello", 3) → ["hello", "hello", "hello"]

// Q11
// Create a generic class Stack<T> with:
// A private array to hold items of type T.
// Methods: push(item: T), pop(): T | undefined, peek(): T | undefined, isEmpty(): boolean.
// Use it with a number stack and a string stack.

// Q12
// Write a generic function findIndex<T>
// that takes an array and a value,
// and returns the index of the first occurrence or -1 if not found.

// Q13
// Create a generic interface Pair<T, U> with:
// first (T), second (U).
// Write a function swapPair<T, U>(pair: Pair<T, U>): Pair<U, T>
// that swaps the two values.

// Q14
// Write a generic function mapArray<T, U>
// that takes an array of type T and a transform function,
// and returns a new array of type U.
// Use it to convert a number array to a string array.

// Q15
// Create a generic class Repository<T> with:
// A private items array.
// Methods: add(item: T), getAll(): T[], findById(id: number): T | undefined.
// (Assume each T has an id: number property.)
// Create a Repository for a simple User type: { id: number, name: string }.
