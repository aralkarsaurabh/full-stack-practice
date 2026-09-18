// Q1
// Write a function that prints "Hello, World!".

function greet() {
    return "Hello, World!";
};

console.log(greet());

console.log('----------------------------------------------------------------');

// Q2
// Write a function that prints your name.

function printMyName() {
    return "Saurabh Sudhir Aralkar";
};

console.log(printMyName());

console.log('----------------------------------------------------------------');

// Q3
// Write a function that takes a name and prints:
// "Hello, <name>"

function customName(name: string) {
    return `Hello, ${name}`;
};

console.log(customName("Raghu"));

console.log('----------------------------------------------------------------');

// Q4
// Write a function that takes two numbers
// and prints their sum.

function sum(a: number, b: number): number {
    return a + b;
};

console.log(sum(5, 9));

console.log('----------------------------------------------------------------');

// Q5
// Write a function that takes a number
// and prints its square.

function square(a: number): number {
    return a * a;
};

console.log(square(4));

console.log('----------------------------------------------------------------');

// Q6
// Write a function that takes a number
// and determines whether it is positive or negative.

function positiveOrNegative(a: number): boolean {
    if (a > 0) {
        return true;
    }

    return false;
};

console.log(positiveOrNegative(-9));
console.log(positiveOrNegative(2));

console.log('----------------------------------------------------------------');

// Q7
// Write a function that takes two numbers
// and prints the larger number.

function largerNumber(a: number, b: number): number {
    if (a > b) {
        return a;
    }

    return b;
};

console.log(largerNumber(9, 5));
console.log(largerNumber(5, 2));

console.log('----------------------------------------------------------------');

// Q8
// Write a function that takes a person's age
// and prints whether they are an adult or minor.

function adultOrMinor(a: number): string {
    if (a > 18) {
        return 'The person is adult';
    };

    return 'The person is minor';
};

console.log(adultOrMinor(24));
console.log(adultOrMinor(12));

console.log('----------------------------------------------------------------');

// Q9
// Write a function that takes the price and quantity
// of a product and calculates the total price.

function totalPrice(price: number, quantity: number): number {
    return price * quantity;
};

console.log(`The total price of the product is: ${totalPrice(250, 23)}`);

console.log('----------------------------------------------------------------');

// Q10
// Write a function that takes Celsius temperature
// and converts it to Fahrenheit.

function convertToFahrenheit(celsius: number): number {
    return (celsius * 1.8) + 32;
};

console.log(`The Celsius temperature is: 32`);
console.log(`The Fahrenheit temperature is: ${convertToFahrenheit(32)}`);

console.log('----------------------------------------------------------------');

// Q11
// Write a function that takes three subject marks
// and calculates the average.

function avgMarks(sub_1: number, sub_2: number, sub_3: number): number {
    return (sub_1 + sub_2 + sub_3) / 3;
};

console.log(`The subject 1 marks are: 87`);
console.log(`The subject 2 marks are: 95`);
console.log(`The subject 3 marks are: 78`);

console.log(`The average marks is: ${avgMarks(87, 95, 78)}`);

console.log('----------------------------------------------------------------');

// Q12
// Write a function that takes a number
// and determines whether it is even or odd.

function evenOrOdd(a: number): string {
    if (a % 2 === 0) {
        return 'even';
    };

    return 'odd';
};

console.log(`The number is: 43 and it is ${evenOrOdd(43)}`);
console.log(`The number is: 86 and it is ${evenOrOdd(86)}`);

console.log('----------------------------------------------------------------');

// Q13
// Write a function that takes a person's
// monthly income and expenses and calculates savings.

function calculateSavings(income: number, expenses: number): number {
    return income - expenses;
};

console.log(`The monthly income is: 1,25,000`);
console.log(`The monthly expenses is: 45,000`);
console.log(`The monthly savings is: ${calculateSavings(125000, 45000)}`);

console.log('----------------------------------------------------------------');

// Q14
// Write a function that takes the radius of a circle
// and calculates its area.

function calculateAreaOfCircle(r: number): number {
    return 3.14 * r * r;
}

console.log(`The radius of the circle is: 7`);
console.log(`The area of the circle is: ${calculateAreaOfCircle(7)}`);

console.log('----------------------------------------------------------------');

// Q15
// Write a function that takes:
// name, age, city
// and prints a sentence describing the person.

function person(name: string, age: number, city: string): string {
    return `The name of the person is ${name} and he / she is ${age} years old who is from ${city}.`;
};

console.log(person("Saurabh", 23, "Hyderabad"));