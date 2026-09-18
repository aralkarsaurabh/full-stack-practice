// Note: For modules, each question asks you to create separate files
// and use import/export between them.
// The import/export exercises are in imports-exports.ts.
// This file focuses on organizing and structuring modules.

// Q1
// Create a file mathUtils.ts that exports:
// - add(a, b)
// - subtract(a, b)
// - multiply(a, b)
// - divide(a, b)
// Import and use all four functions here.

// Q2
// Create a file stringUtils.ts that exports:
// - capitalize(str) – capitalizes first letter
// - reverseString(str) – reverses a string
// - countVowels(str) – counts vowels
// Import and use all three functions here.

// Q3
// Create a file constants.ts that exports:
// - PI (3.14159)
// - GRAVITY (9.8)
// - APP_NAME (a string of your choice)
// Import and print all three here.

// Q4
// Create a file greetings.ts that exports:
// - greetMorning(name)
// - greetEvening(name)
// - greetNight(name)
// Import and use all three here.

// Q5
// Create a file arrayUtils.ts that exports:
// - getMax(arr) – returns the largest number
// - getMin(arr) – returns the smallest number
// - getSum(arr) – returns the sum
// - getAverage(arr) – returns the average
// Import and use them here with the array [5, 3, 9, 1, 7].

// Q6
// Create a file validators.ts that exports:
// - isEmail(str) – returns true if the string contains "@" and "."
// - isPositive(n) – returns true if a number is positive
// - isNotEmpty(str) – returns true if a string is not empty
// Import and test each validator here.

// Q7
// Create a file converters.ts that exports:
// - celsiusToFahrenheit(c)
// - kmToMiles(km)
// - kgToPounds(kg)
// Import and use each converter here.

// Q8
// Create a file userUtils.ts that exports a type User:
// { id: number, name: string, email: string }
// and a function createUser(id, name, email): User
// Import and use createUser here.

// Q9
// Create a file logger.ts that exports:
// - logInfo(message)    – prints "[INFO]: <message>"
// - logWarning(message) – prints "[WARNING]: <message>"
// - logError(message)   – prints "[ERROR]: <message>"
// Import and use all three here.

// Q10
// Create a file geometry.ts that exports:
// - circleArea(r)
// - rectangleArea(w, h)
// - triangleArea(base, height)
// Import and use all three here.

// Q11
// Create a file randomUtils.ts that exports:
// - getRandomNumber(min, max) – returns a random number in range
// - getRandomElement(arr)     – returns a random element from an array
// Import and use both here.

// Q12
// Create a file dateUtils.ts that exports:
// - getCurrentYear() – returns the current year
// - isLeapYear(year) – returns true if the year is a leap year
// - getDaysInMonth(month, year) – returns the number of days in a month
// Import and use all three here.

// Q13
// Create a file config.ts that uses a default export
// to export a configuration object:
// { appName, version, isDev, port }
// Import it here and print each property.

// Q14
// Create a file temperature.ts that exports:
// - A class Temperature with a constructor that takes Celsius.
// - Methods: toCelsius(), toFahrenheit(), toKelvin().
// Import and use the class here.

// Q15
// Create a file index.ts (a barrel file) that re-exports everything
// from mathUtils.ts, stringUtils.ts, and arrayUtils.ts.
// Import from the barrel file and use functions from all three modules.
