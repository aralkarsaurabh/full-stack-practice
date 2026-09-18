// Q1
// Create variables for your name, age, isStudent, and city.
// Explicitly define the type of each variable.

let name: string = 'saurabh';
let age: number = 23;
let isStudent: boolean = false;
let city: undefined = undefined;

console.log('name: ' + name);
console.log(`age: ${age}`);
console.log(`isStudent: ${isStudent}`);
console.log(`city: ${city}`);

console.log('------------------------');

// Q2
// Create variables for a product:
// name, price, quantity, and isAvailable.
// Calculate and store the total price.

let productName = 'MacBook Air';
let productPrice = 129000;
let productQuantity = 23;
let isAvailable = true;

let totalPrice = productPrice * productQuantity;

console.log(`Product Name: ${productName}`);
console.log(`Product Price: ${productPrice}`);
console.log(`Product Availability: ${isAvailable}`);
console.log(`Available Quantities: ${productQuantity}`);
console.log(`Total Price: ${totalPrice}`);

console.log('------------------------');

// Q3
// Create a variable representing your bank balance.
// Add ₹5,000 to it and store the new balance.

let bankBalance: number = 100000;
let depositAmount: number = 5000;

console.log(`Your current balance is: ${bankBalance}`);
console.log(`Amount after deposit: ${bankBalance + depositAmount}`);

console.log('------------------------');

// Q4
// Create variables for:
// firstName, lastName, age.
// Create a fourth variable fullName using the first two.

let firstName: string = 'Saurabh';
let lastName: string = 'Aralkar';
let myAge: number = 23;

console.log(`${firstName} ${lastName} is ${myAge} years old`);

console.log('------------------------');

// Q5
// Create a variable for temperature in Celsius.
// Convert it to Fahrenheit and store the result.

let tempC: number = 38;
let tempF = (tempC * 1.8) + 32;

console.log(`Temperature in Fahrenheit: ${tempF}`);

console.log('------------------------');

// Q6
// Create variables for the dimensions of a rectangle.
// Calculate its area and perimeter.

let recLength: number = 10;
let recWidth: number = 6;

let recArea: number = recLength * recWidth;

let recPerimeter: number = recLength + recWidth;

console.log(`Rectangle Area: ${recArea}`);
console.log(`Rectangle Perimeter: ${recPerimeter}`);

console.log('------------------------');

// Q7
// Create variables representing a student's:
// name, marks in 3 subjects.
// Calculate the total and average marks.

let stName: string = 'Ramesh';
let s1: number = 85;
let s2: number = 67;
let s3: number = 98;

let sTotal: number = s1 + s2 + s3;
let sAvg: number = sTotal / 3;

console.log(`Student Name: ${stName}`);
console.log(`Student Total: ${sTotal}`);
console.log(`Student Average: ${sAvg}`);

console.log('------------------------');

// Q8
// Create a variable for your current year and birth year.
// Calculate your approximate age.

let currentYear: number = 2026;
let birthYear: number = 2003;

console.log(`My age is ${currentYear - birthYear}`);

console.log('------------------------');

// Q9
// Create variables for an item's price and discount percentage.
// Calculate the discounted price.

let itemPrice: number = 1500;
let itemDiscount: number = 10;

let discountedPrice: number = itemPrice - (itemPrice / itemDiscount);

console.log(`The original price is ${itemPrice}`);
console.log(`The discount percentage is ${itemDiscount}`);
console.log(`The discounted price is ${discountedPrice}`);

console.log('------------------------');

// Q10
// Create variables for a company's:
// name, numberOfEmployees, revenue, and isProfitable.

let companyName: string = 'BusyBrains AI';
let noOfEmployees: number = 3;
let companyRevenue: number = 0;
let isProfitable: boolean = false;

console.log(`Company Name: ${companyName}`);
console.log(`Number of Employees: ${noOfEmployees}`);
console.log(`Company Revenue: ${companyRevenue}`);
console.log(`Is the company profitable: ${isProfitable}`);

console.log('------------------------');

// Q11
// Create a variable for seconds.
// Convert it into minutes and remaining seconds.

let totalSeconds: number = 3876;

let remainingSeconds: number = totalSeconds % 60;
let minutes: number = (totalSeconds - remainingSeconds) / 60;

console.log(`Original Seconds: ${totalSeconds}`);
console.log(`Minutes converted: ${minutes}`);
console.log(`Remaining seconds: ${remainingSeconds}`);

console.log('------------------------');

// Q12
// Create variables for distance in kilometers and time in hours.
// Calculate average speed.

let distKm: number = 60;
let timeHr: number = 1.5;

let avgSpeed: number = distKm / timeHr;

console.log(`Total distance in kilometers: ${distKm}`);
console.log(`Total time in hours: ${timeHr}`);
console.log(`Average speed: ${avgSpeed}`);

console.log('------------------------');

// Q13
// Create variables for:
// username, password, isLoggedIn.
// Update isLoggedIn to true.

let username: string = 'saurabh_aralkar';
let password: string = '123456';
let isLoggedIn: boolean = false;

isLoggedIn = true;

console.log(`Username: ${username}`);
console.log(`Password: ${password}`);
console.log(`Login Status: ${isLoggedIn}`);

console.log('------------------------');

// Q14
// Create variables representing a mobile phone:
// brand, model, price, storageGB, has5G.

let mobileBrand: string = 'Apple';
let mobileModel: string = 'iPhone 15';
let mobilePrice: number = 89000;
let mobileStorageGB: number = 256;
let mobileHas5G: boolean = true;

console.log(`Mobile Brand: ${mobileBrand}`);
console.log(`Mobile Model: ${mobileModel}`);
console.log(`Mobile Price: ${mobilePrice}`);
console.log(`Mobile Storage: ${mobileStorageGB}`);
console.log(`Mobile 5G: ${mobileHas5G}`);

console.log('------------------------');

// Q15
// Create variables for your monthly income and monthly expenses.
// Calculate your savings.

let monthlyIncome: number = 29800;
let monthlyExpense: number = 26000;

let monthlySavings: number = monthlyIncome - monthlyExpense;

console.log(`Monthly Income: ${monthlyIncome}`);
console.log(`Monthly Expenses: ${monthlyExpense}`);
console.log(`Monthly Savings: ${monthlySavings}`);