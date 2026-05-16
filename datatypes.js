// PrimitiveData Types in JavaScript
//int
//boolean
//String
//undefined
//null
//BigInt
//Symbol

// Non-primitive data types in JavaScript
// Object
// Function
// Array    


// Primitive Data Types
let name = "Sitaram";
let age = 24;
let isTester = true;
let city;
let salary = null;
let bigNumber = 123456789012345678901234567890n;
let id1 = Symbol("id");
let id2 = Symbol("id");




// Output printing
console.log(name);
console.log(age);
console.log(isTester);
console.log(city);
console.log(salary);
console.log(bigNumber);
console.log(id1);
console.log(id2);

// Objects --> Non-primitive data type
let student = {
    name: "Sitaram Kadam",
    age: 24
};
console.log(student);

// Function --> Non-primitive data type
function greet() {
    console.log("Hello, welcome to JavaScript!");
}
greet();

// Arrays --> Non-primitive data type
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

// Typeof operator
console.log(typeof name);
console.log(typeof age);
console.log(typeof isTester);
console.log(typeof city);
console.log(typeof salary);
console.log(typeof bigNumber);
console.log(typeof student);    
console.log(typeof greet);
console.log(typeof fruits);
