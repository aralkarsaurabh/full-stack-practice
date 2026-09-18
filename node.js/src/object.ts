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

type bankAccount = {
    accountHolder: string,
    balance: number,
    accountType: string
};

let account_1: bankAccount = {
    accountHolder: "Saurabh Aralkar",
    balance: 52000,
    accountType: "Savings"
};

console.log(account_1);

account_1.balance = account_1.balance + 10000;

console.log(account_1);

console.log('-----------------------------------------------------------------');

// Q7
// Create a restaurant object.
// Include name, location, rating, cuisine, and isOpen.

type Restaurant = {
    name: string,
    location: string,
    rating: number,
    cuisine: string[],
    isOpen: boolean
};

let restaurant_1: Restaurant = {
    name: "ASMOLG",
    location: "Hyderabad",
    rating: 4.7,
    cuisine: ["Paneer", "Tandoor", "Noodle"],
    isOpen: true
};

console.log(restaurant_1);

console.log('-----------------------------------------------------------------');

// Q8
// Create a laptop object.
// Include brand, model, RAM, storage, processor, and price.

type Laptop = {
    brand: string,
    model: string,
    RAM: string,
    storage: string,
    processor: string,
    price: number
};

let laptop_1: Laptop = {
    brand: "Apple",
    model: "MacBook Air M5",
    RAM: "24 GB",
    storage: "1 TB",
    processor: "M5",
    price: 137000
};

console.log(laptop_1);

console.log('-----------------------------------------------------------------');

// Q9
// Create an object representing a course.
// Include:
// title, instructor, duration, price, isPublished.

type Course = {
    title: string,
    instructor: string,
    duration: number,
    price: number,
    isPublished: boolean
};

let course_1: Course = {
    title: "AWS Basics",
    instructor: "Saurabh Aralkar",
    duration: 6.5,
    price: 5000,
    isPublished: true
};

console.log(course_1);

console.log('-----------------------------------------------------------------');

// Q10
// Create a shoppingCart object.
// It should contain:
// customerName, totalItems, totalAmount.
// Update totalItems and totalAmount.

type shoppingCart = {
    customerName: string,
    totalItems: number,
    totalAmount: number
};

let cart_1: shoppingCart = {
    customerName: "Saurabh Bhai",
    totalItems: 12,
    totalAmount: 28000
};

console.log(cart_1);

cart_1.totalItems = cart_1.totalItems + 4;
cart_1.totalAmount = cart_1.totalAmount + 6000;

console.log(cart_1);

console.log('-----------------------------------------------------------------');

// Q11
// Create a company object.
// Include:
// name, industry, employees, revenue.
// Increase the employee count by 50.

type Company = {
    name: string,
    industry: string,
    employees: number,
    revenue: number
};

let company_1: Company = {
    name: "Triroop Techconsult Pvt Ltd",
    industry: "Information Technology",
    employees: 4,
    revenue: 1000000000
};

console.log(company_1);

company_1.employees = company_1.employees + 50;

console.log(company_1);

console.log('-----------------------------------------------------------------');

// Q12
// Create a movie object.
// Include:
// title, director, releaseYear, rating, isReleased.

type Movie = {
    title: string,
    director: string,
    releaseYear: number,
    rating: number,
    isReleased: boolean
};

let movie_1: Movie = {
    title: "Dhurandhar",
    director: "Aditya Dhar",
    releaseYear: 2025,
    rating: 4.7,
    isReleased: true
};

console.log(movie_1);

console.log('-----------------------------------------------------------------');

// Q13
// Create a socialMediaProfile object.
// Include:
// username, followers, following, posts.
// Increase followers by 100.

type socialMediaProfile = {
    username: string,
    followers: number,
    following: number,
    posts: number
};

let profile_1: socialMediaProfile = {
    username: "saurabh_aralkar",
    followers: 417,
    following: 312,
    posts: 5
};

console.log(profile_1);

profile_1.followers = profile_1.followers + 100;

console.log(profile_1);

console.log('-----------------------------------------------------------------');

// Q14
// Create an order object.
// Include:
// orderId, customerName, productName, quantity, price.
// Calculate the total order value and store it in the object.

type Order = {
    orderId: string,
    customerName: string,
    productName: string,
    quantity: number,
    price: number,
    totalAmount: number,
};

let order_1: Order = {
    orderId: "1",
    customerName: "Saurabh Aralkar",
    productName: "MacBook Air",
    quantity: 14,
    price: 137000,
    totalAmount: 0,
};

console.log(order_1);

order_1.totalAmount = order_1.quantity * order_1.price;

console.log(order_1);

console.log('-----------------------------------------------------------------');

// Q15
// Create a real-world object of your choice.
// It must contain at least 8 properties.
// Read and modify at least 3 properties.

type MyObject = {
    name: string,
    phone: number,
    city: string,
    isEmployeed: boolean,
    income: number,
    expense: number,
    isMarried: boolean,
    gender: string,
};

let myObject: MyObject = {
    name: "Saurabh Aralkar",
    phone: 9011694002,
    city: "Hyderabad",
    isEmployeed: true,
    income: 29800,
    expense: 27000,
    isMarried: false,
    gender: "Male"
};

console.log(myObject);

myObject.income = myObject.income + 5000;
myObject.expense = myObject.expense + 2000;
myObject.isMarried = true;

console.log(`Income: ${myObject.income}`);
console.log(`Expense: ${myObject.expense}`);
console.log(`Married: ${myObject.isMarried}`);