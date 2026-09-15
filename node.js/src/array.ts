// Q1
// Create an array containing 5 programming languages.
// Print the array.

let programmingLang: string[] = ["Dart", "Javascript", "C", "C++", "Python"];

console.log(programmingLang);

console.log("-----------------------------");

// Q2
// Create an array of 5 numbers.
// Calculate the sum of all numbers.

let num: number[] = [4, 7, 8, 2, 9];

let sum: number = 0;

for (let i = 0; i < num.length; i++) {
    sum = sum + num[i]!;
}

console.log(sum);

console.log("-----------------------------");

// Q3
// Create an array of numbers.
// Find the largest number.

let largestNumber: number = num[0]!;

for (let i = 0; i < num.length; i++) {
    if (num[i]! > largestNumber) {
        largestNumber = num[i]!;
    }
}

console.log(`The largest number is: ${largestNumber}`);

console.log("-----------------------------");

// Q4
// Create an array of numbers.
// Find the smallest number.

let smallestNumber: number = num[0]!;

for (let i = 0; i < num.length; i++) {
    if (num[i]! < smallestNumber) {
        smallestNumber = num[i]!;
    }
}

console.log(`The smallest number is: ${smallestNumber}`);

console.log("-----------------------------");

// Q5
// Create an array of your 5 favorite foods.
// Add one more food to the array.

let favFood: string[] = ["Pav Bhaji", "Misal Pav", "Chai", "Tarri Poha", "Sev Bhaji"];

favFood.push("Saar");

console.log(favFood);

console.log("-----------------------------");

// Q6
// Create an array of 5 numbers.
// Remove the last number.

num.pop();

console.log(num);

console.log("-----------------------------");

// Q7
// Create an array of names.
// Add a name at the beginning and remove the first name.

let names: string[] = ["Saurabh", "Shweta", "Piyush", "Aditya"];

names.unshift("Gobu");

console.log(names);

names.shift();

console.log(names);

console.log("-----------------------------");

// Q8
// Create an array containing the prices of 5 products.
// Calculate the total price.

let productPrices: number[] = [100, 230, 540, 210, 320]

let totalPrice: number = 0;

for (let i = 0; i < productPrices.length; i++) {
    totalPrice = totalPrice + productPrices[i]!;
}

console.log(`The total amount of the products is: ${totalPrice}`);

console.log("-----------------------------");

// Q9
// Create an array of student marks.
// Calculate the average marks.

let stdMarks: number[] = [40, 60, 38, 98, 77];

let avgMarks: number = 0;

for (let i = 0; i < stdMarks.length; i++) {
    avgMarks = avgMarks + stdMarks[i]!;
}

console.log(`The average marks of the student is: ${avgMarks / stdMarks.length}`);

console.log("-----------------------------");

// Q10
// Create an array of numbers.
// Create another array containing the same numbers multiplied by 2.

let orgNum: number[] = [2, 3, 4, 5, 6];

let doubleNum: number[] = [];

for (let i = 0; i < orgNum.length; i++) {
    doubleNum.push(orgNum[i]! * 2);
}

console.log(orgNum);
console.log(doubleNum);

console.log("-----------------------------");

// Q11
// Create an array of numbers.
// Count how many numbers are greater than 50.

let bigNums: number[] = [500, 480, 12, 50, 20]

let greaterNumber: number = 0;

for (let i = 0; i < bigNums.length; i++) {
    if (bigNums[i]! >= 50) {
        greaterNumber++;
    }
}

console.log(`The count of numbers greater than 50 is: ${greaterNumber}`);

console.log("-----------------------------");

// Q12
// Create an array of names.
// Check whether a particular name exists in the array.

let nameToCheck: string = "Aditya";

for (let i = 0; i < names.length; i++) {
    if (names[i] === nameToCheck) {
        console.log("Name is present in the array.");
        break;
    }
}

console.log("-----------------------------");

// Q13
// Create an array of numbers.
// Reverse the array.

console.log(`The original array is: ${num}`);

console.log(`The reversed array of numbers is: ${num.reverse()}`);

console.log("-----------------------------");

// Q14
// Create an array of products.
// Remove a specific product from the array.

let product: string[] = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphone"];

console.log(`The original array is: ${product}`);

product.splice(2, 1);

console.log(`The updated array is: ${product}`);

console.log("-----------------------------");

// Q15
// Create an array representing your weekly expenses.
// Calculate:
// 1. Total expenses
// 2. Average daily expense
// 3. Highest expense

let weeklyExpenses: number[] = [180, 120, 80, 140, 60, 200, 260]

let totalExpenses: number = 0;
let dailyAverage: number = 0;
let highestExpense: number = weeklyExpenses[0]!;

for (let i = 0; i < weeklyExpenses.length; i++) {
    totalExpenses = totalExpenses + weeklyExpenses[i]!;
}

dailyAverage = totalExpenses / weeklyExpenses.length;

for (let i = 0; i < weeklyExpenses.length; i++) {
    if (weeklyExpenses[i]! > highestExpense) {
        highestExpense = weeklyExpenses[i]!;
    }
}

console.log(`The total expenses for the week is: ${totalExpenses}`);
console.log(`The average daily expense for the week is: ${dailyAverage}`);
console.log(`The highest expense for the week is: ${highestExpense}`);