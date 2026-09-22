// Q1
// Print numbers from 1 to 10 using a for loop.

function numberUpto10() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

    return;
};

numberUpto10();

console.log('------------------------------------------------');

// Q2
// Print all even numbers from 1 to 20.

function printEvenNumbers() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

    return;
};

printEvenNumbers();

console.log('------------------------------------------------');

// Q3
// Print the multiplication table of 5 (from 5×1 to 5×10).

function tableOf5() {
    for (let i = 1; i <= 10; i++) {
        console.log(`5 x ${i} = ${5 * i}`);
    }

    return;
};

tableOf5();

console.log('------------------------------------------------');

// Q4
// Print numbers from 10 down to 1 using a for loop.

function countDownNumber() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }

    return;
};

countDownNumber();

console.log('------------------------------------------------');

// Q5
// Use a while loop to print numbers from 1 to 10.

function whileLoop() {
    let i = 1;

    while (i <= 10) {
        console.log(i);
        i++;
    }

    return;
}

whileLoop();

console.log('------------------------------------------------');

// Q6
// Calculate the sum of all numbers from 1 to 100 using a loop.
// Print the result.

function sumOfNumbersTill100() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum = sum + i;
    }

    console.log(sum);

    return;
};

sumOfNumbersTill100();

console.log('------------------------------------------------');

// Q7
// Print all odd numbers between 1 and 30.

function printOddNumbers() {
    for (let i = 1; i <= 30; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }

    return;
};

printOddNumbers();

console.log('------------------------------------------------');

// Q8
// Use a loop to print each character of the string "TypeScript" one by one.

function printChar() {
    let str = "TypeScript";

    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }

    return;
};

printChar();

console.log('------------------------------------------------');

// Q9
// Given an array of numbers: [3, 7, 2, 9, 4, 6, 1].
// Use a loop to find and print the largest number.

function largestNumber() {
    let arr: number[] = [3, 7, 2, 9, 4, 6, 1];

    let largest: number = arr[0]!;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i]! > largest) {
            largest = arr[i]!;
        }
    }

    console.log(largest);

    return;
};

largestNumber();

console.log('------------------------------------------------');

// Q10
// Use a loop to print the first 10 terms of the Fibonacci sequence.
// (0, 1, 1, 2, 3, 5, 8, ...)

function fibonacciSequence() {
    let firstTerm = 0;
    let secondTerm = 1;
    let nextTerm: number;

    console.log(firstTerm);
    console.log(secondTerm);

    for (let i = 2; i < 10; i++) {
        nextTerm = firstTerm + secondTerm;

        firstTerm = secondTerm;
        secondTerm = nextTerm;

        console.log(nextTerm);
    }

    return;
}

fibonacciSequence();

console.log('------------------------------------------------');

// Q11
// Use a loop to reverse a string.
// Example: "hello" → "olleh"

function reverseString() {
    let str = 'hello';
    let revStr: string = '';

    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i]!;
    }

    console.log(revStr);
};

reverseString()

console.log('------------------------------------------------');

// Q12
// Use a loop to count the number of vowels in the string "Hello World".

function countVowels() {
    let str = "Hello World";
    let vowelCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            vowelCount++;
        }
    }

    console.log(vowelCount);

    return;
};

countVowels();

console.log('------------------------------------------------');

// Q13
// Use a loop to print the following pattern:
// *
// **
// ***
// ****
// *****

function printPattern() {
    for (let i = 1; i <= 5; i++) {

        let row = "";

        for (let j = 1; j <= i; j++) {
            row += "*"
        }

        console.log(row);
    }

    return;
};

printPattern();

console.log('------------------------------------------------');

// Q14
// Use a loop to calculate the factorial of a given number.
// Example: factorial(5) = 120

function factorial() {
    let num = 5;
    let fact = 1;

    for (let i = num; i > 0; i--) {
        fact = fact * i;
    }

    console.log(fact);

    return;
};

factorial();

console.log('------------------------------------------------');

// Q15
// Given an array of numbers: [10, 25, 3, 47, 8, 99, 12].
// Use a loop to find the sum and the average.
// Print both.

function sumAndAverage() {
    let arr = [10, 25, 3, 47, 8, 99, 12];

    let sum = 0;
    let avg = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]!;
    }

    avg = sum / arr.length;

    console.log(sum);
    console.log(avg);

    return;
};

sumAndAverage();

console.log('------------------------------------------------');