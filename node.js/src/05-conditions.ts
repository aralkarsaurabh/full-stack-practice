// Q1
// Check if a number is positive, negative, or zero.
// Print the result.

function checkPosNegZero(a: number): string {
    if (a === 0) {
        return "The number is zero";
    } else if (a > 0) {
        return "The number is positive"
    }

    return "The number is negative";
};

console.log(checkPosNegZero(0));
console.log(checkPosNegZero(-1));
console.log(checkPosNegZero(1));

console.log('-----------------------------------------------------');

// Q2
// Take a person's age.
// Print whether they are a child (< 13), teen (13–17), or adult (18+).

function ageCheck(age: number): string {
    if (age < 0) {
        return "The age cannot be less than 0";
    } else if (age > 0 && age <= 13) {
        return "The person is a child";
    } else if (age > 13 && age <= 17) {
        return "The person is a teen";
    }

    return "The person is adult";
};

console.log(ageCheck(-4));
console.log(ageCheck(4));
console.log(ageCheck(14));
console.log(ageCheck(40));

console.log('-----------------------------------------------------');

// Q3
// Take two numbers.
// Print which one is greater, or if they are equal.

function compareTwoNumbers(a: number, b: number): string {
    if (a === b) {
        return 'Both the numbers are equal';
    } else if (a > b) {
        return `The ${a} is greater than ${b}`;
    }

    return `The ${b} is greater than ${a}`;
};

console.log(compareTwoNumbers(4, 2));
console.log(compareTwoNumbers(2, 2));
console.log(compareTwoNumbers(1, 8));

console.log('-----------------------------------------------------');

// Q4
// Take a number.
// Print whether it is even or odd.

function evenOrOdd(a: number): string {
    if (a === 0) {
        return `The ${a} is zero, hence neither even nor odd`;
    } else if (a % 2 === 0) {
        return `The ${a} is even number`;
    }

    return `The ${a} is odd number`;
};

console.log(evenOrOdd(0));
console.log(evenOrOdd(8));
console.log(evenOrOdd(1));

console.log('-----------------------------------------------------');

// Q5
// Take a student's marks (0–100).
// Print their grade:
// A (90–100), B (75–89), C (60–74), D (45–59), F (below 45).

function gradeCalculations(a: number): string {
    if (a >= 90 && a <= 100) {
        return `The student got the grade A`;
    } else if (a >= 75 && a < 90) {
        return `The student got the grade B`;
    } else if (a >= 60 && a < 75) {
        return `The student got the grade C`;
    } else if (a >= 45 && a < 60) {
        return `The student got the grade D`;
    }

    return `The student got the grade F`;
};

console.log(gradeCalculations(95));
console.log(gradeCalculations(80));
console.log(gradeCalculations(65));
console.log(gradeCalculations(50));
console.log(gradeCalculations(30));

console.log('-----------------------------------------------------');

// Q6
// Take a temperature value.
// Print "Hot" if above 35°C, "Warm" if 20–35°C, "Cold" if below 20°C.

function temperature(a: number): string {
    if (a > 35) {
        return `Hot`;
    } else if (a >= 20 && a <= 35) {
        return `Warm`;
    }

    return `Cold`;
};

console.log(temperature(40));
console.log(temperature(28));
console.log(temperature(17));

console.log('-----------------------------------------------------');

// Q7
// Take a username and password.
// Print "Login successful" if username is "admin" and password is "1234".
// Otherwise print "Invalid credentials".

function login(username: string, password: string): string {
    if (username === "admin" && password === "1234") {
        return "Login Successful";
    }

    return "Invalid Credentials";
};

console.log(login("saurabh_aralkar", "123456"));
console.log(login("admin", "1234"));

console.log('-----------------------------------------------------');

// Q8
// Take a number.
// Print whether it is divisible by both 3 and 5, only 3, only 5, or neither.

function numberCheck(a: number): string {
    if (a % 3 === 0 && a % 5 === 0) {
        return `The number ${a} is divisible by both 3 and 5`;
    } else if (a % 3 === 0) {
        return `The number ${a} is divisible only by 3`;
    } else if (a % 5 === 0) {
        return `The number ${a} is divisible only by 5`;
    }

    return `The number ${a} is neither divisible by 3 nor by 5`;
};

console.log(numberCheck(15));
console.log(numberCheck(9));
console.log(numberCheck(10));
console.log(numberCheck(7));

console.log('-----------------------------------------------------');

// Q9
// Take a year.
// Print whether it is a leap year.
// (Hint: divisible by 4, but not 100, unless also divisible by 400.)

function leapYear(year: number): string {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return `The ${year} is a leap year`;
    }

    return `The ${year} is not a leap year`;
};

console.log(leapYear(2100));
console.log(leapYear(2024));
console.log(leapYear(2000));

console.log('-----------------------------------------------------');

// Q10
// Take a traffic light color as a string: "red", "yellow", or "green".
// Print the appropriate action: "Stop", "Slow down", or "Go".

function trafficLight(light: string): string {
    if (light === "red") {
        return `For ${light} you should Stop`;
    } else if (light === 'yellow') {
        return `For ${light} you should Slow down`;
    }

    return `For ${light} you should Go`;
};

console.log(trafficLight("red"));
console.log(trafficLight("yellow"));
console.log(trafficLight("green"));

console.log('-----------------------------------------------------');

// Q11
// Take a number between 1 and 7.
// Print the name of the corresponding day of the week.
// Print "Invalid" if out of range.

function dayOfWeek(a: number): string {
    if (a === 1) {
        return `Monday`;
    } else if (a === 2) {
        return `Tuesday`;
    } else if (a === 3) {
        return `Wednesday`;
    } else if (a === 4) {
        return `Thursday`;
    } else if (a === 5) {
        return `Fireday`;
    } else if (a === 6) {
        return `Saturday`;
    } else if (a === 7) {
        return `Sunday`;
    }

    return `Invalid`;
};

console.log(dayOfWeek(1));
console.log(dayOfWeek(4));
console.log(dayOfWeek(7));
console.log(dayOfWeek(10));

console.log('-----------------------------------------------------');

// Q12
// Take a person's BMI.
// Print their category:
// Underweight (< 18.5), Normal (18.5–24.9), Overweight (25–29.9), Obese (30+).

function bmi(bmi_index: number): string {
    if (bmi_index < 18.5) {
        return `For BMI of ${bmi_index} we call it as underweight`;
    } else if (bmi_index >= 18.5 && bmi_index < 25) {
        return `For BMI of ${bmi_index} we call it as normal`;
    } else if (bmi_index >= 25 && bmi_index < 30) {
        return `For BMI of ${bmi_index} we call it as overweight`;
    }

    return `For BMI of ${bmi_index} we call it as obese`;
};

console.log(bmi(17));
console.log(bmi(22));
console.log(bmi(27));
console.log(bmi(35));

console.log('-----------------------------------------------------');

// Q13
// Take two boolean values: hasTicket and hasID.
// Print "Entry allowed" only if both are true.
// Otherwise print "Entry denied".

function entryCheck(hasTicket: boolean, hasId: boolean): string {
    if (hasTicket === true && hasId === true) {
        return `Entry allowed`;
    }

    return `Entry denied`;
};

console.log(entryCheck(true, true));
console.log(entryCheck(true, false));
console.log(entryCheck(false, true));
console.log(entryCheck(false, false));

console.log('-----------------------------------------------------');

// Q14
// Take a month number (1–12).
// Print how many days that month has.
// Assume it is not a leap year.

function monthDays(month: number): string {
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        return `${month} has 31 days`;
    } else if (month === 2) {
        return `${month} has 28 days`;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        return `${month} has 30 days`;
    }

    return `Invalid month`;
};

console.log(monthDays(1));
console.log(monthDays(2));
console.log(monthDays(3));
console.log(monthDays(4));
console.log(monthDays(5));
console.log(monthDays(6));
console.log(monthDays(7));
console.log(monthDays(8));
console.log(monthDays(9));
console.log(monthDays(10));
console.log(monthDays(11));
console.log(monthDays(12));
console.log(monthDays(13));

console.log('-----------------------------------------------------');

// Q15
// Take a product's price and a coupon code.
// If the coupon is "SAVE10", apply a 10% discount.
// If the coupon is "SAVE20", apply a 20% discount.
// Otherwise print "Invalid coupon".
// Print the final price.

function productCost(price: number, coupon: string): string {
    if (price < 0) {
        return `Invalid amount. Amount can not be negative`;
    }

    if (coupon === "SAVE10") {
        return `The final price of the product after SAVE10 coupon is going to be ${price - (price * 0.1)}`;
    } else if (coupon === "SAVE20") {
        return `The final price of the product after SAVE20 coupon is going to be ${price - (price * 0.2)}`;
    }

    return `Invalid coupon`;
};

console.log(productCost(10000, "SAVE10"));
console.log(productCost(10000, "SAVE20"));
console.log(productCost(-100, "SAVE10"));