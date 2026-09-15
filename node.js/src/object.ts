// Q1
// Create an object representing a student.
// Include name, age, course, and isPresent.

type Student = {
    name: string,
    age: number,
    course: string,
    isPresent: boolean
};

let roll_1: Student = {
    name: "Saurabh",
    age: 23,
    course: "Computer Science",
    isPresent: true
};

console.log(roll_1);

let roll_2: Student = {
    name: "Piyush",
    age: 23,
    course: "Computer Science",
    isPresent: false,
};

console.log(roll_2);

console.log('-----------------------------------------------------------------');

// Q2
// Create an object representing a product.
// Include name, price, quantity, and category.

type Product = {
    name: string,
    price: number,
    quantity: number,
    category: string
};

let product_1: Product = {
    name: "MacBook Air M5",
    price: 147000,
    quantity: 23,
    category: "Electronics"
};

console.log(product_1);

let product_2: Product = {
    name: "iPhone 15",
    price: 86000,
    quantity: 12,
    category: "Electronics"
};

console.log(product_2);

console.log('-----------------------------------------------------------------');

// Q3
// Create a user object.
// Print the user's name and email.

type User = {
    name: string,
    email: string,
    phone: number,
    city: string
};

let user_1: User = {
    name: "Saurabh",
    email: "saurabharalkar@gmail.com",
    phone: 9011694002,
    city: "Hyderabad"
};

console.log(`Name of the user_1: ${user_1.name}`);
console.log(`Email of the user_1: ${user_1.email}`);

console.log('-----------------------------------------------------------------')

// Q4
// Create a car object.
// Include brand, model, year, price, and isElectric.

type Car = {
    brand: string,
    model: string,
    year: number,
    price: number,
    isElectric: boolean
};

let car_1: Car = {
    brand: "Maruti Suzuki",
    model: "Baleno",
    year: 2024,
    price: 1050000,
    isElectric: false
};

console.log(car_1);

console.log('-----------------------------------------------------------------')

// Q5
// Create an employee object.
// Include name, role, salary, and department.
// Increase the salary by 10%.

type Employee = {
    name: string,
    role: string,
    salary: number,
    department: string
};

let emp_1: Employee = {
    name: "Saurabh",
    role: "Software Engineer",
    salary: 1200000,
    department: "Information Technology"
};

console.log(emp_1);

emp_1.salary = emp_1.salary + (emp_1.salary * 0.10);

console.log(emp_1);

console.log('-----------------------------------------------------------------');

// Q6
// Create a bankAccount object.
// Include accountHolder, balance, and accountType.
// Deposit ₹10,000 into the account.

// Q7
// Create a restaurant object.
// Include name, location, rating, cuisine, and isOpen.

// Q8
// Create a laptop object.
// Include brand, model, RAM, storage, processor, and price.

// Q9
// Create an object representing a course.
// Include:
// title, instructor, duration, price, isPublished.

// Q10
// Create a shoppingCart object.
// It should contain:
// customerName, totalItems, totalAmount.
// Update totalItems and totalAmount.

// Q11
// Create a company object.
// Include:
// name, industry, employees, revenue.
// Increase the employee count by 50.

// Q12
// Create a movie object.
// Include:
// title, director, releaseYear, rating, isReleased.

// Q13
// Create a socialMediaProfile object.
// Include:
// username, followers, following, posts.
// Increase followers by 100.

// Q14
// Create an order object.
// Include:
// orderId, customerName, productName, quantity, price.
// Calculate the total order value and store it in the object.

// Q15
// Create a real-world object of your choice.
// It must contain at least 8 properties.
// Read and modify at least 3 properties.