/* No need for script tags in html when you have a js file!
Example of a command: alert('text');
you don't usually want to use alerts for debugging because it blocks rest of script from running
you want to use the console in this case */

/* Chrome settings: developer tools: console (F12)
You can execute JS from the console, clear with clear()
Can output to console with console.log('text');
Things to do with console: https://developer.mozilla.org/en-US/docs/Web/API/console
Some examples: .error('text'), .warn('text') */

/* Variables: var, let, const
var - globally scoped (we can't have this name inside a conditional and then have another variable with that same name outside of it); basically it can NOT be reassigned, and you must assign a value
let - you can reassign values
Use const unless you know you're going to reassign a value */

// if num was a const, it would cause an error
let num = 30;
num = 31;
console.log(num);

/* Data types
Primitive - data is directly assigned to memory, not a resource - String, Numbers, Boolean, null, undefined, Symbol (not covered) */

// Strings can have double or single quotes
const name = 'Andy';
// Semi-colons aren't mandatory
const age = 20;
const rating = 3.1; // there's no float/decimal data type, it's just a number
const male = true;
const x = null;
const y = undefined;
let z; // also undefined

// testing type of a Variable
console.log(typeof name);
console.log(typeof age);
console.log(typeof rating); // also number
console.log(typeof male);
console.log(typeof x); // object, not null, even though it's not really an object (look this up)
console.log(typeof y); // it is undefined

// Concatenation: same as Java
console.log('My name is ' + name + ' and I am ' + age);
// Template String: use backticks (`)
// Gives the same thing: put variables in ${}
console.log(`My name is ${name} and I am ${age}`);
// can also assign these to variables

// Getting the length of a String
const s = 'Hello World';
console.log(s.length);
// length is a property, it doesn't have parentheses, if it does it's a method
console.log(s.toUpperCase()); // this is a method, same with toLowerCase() and substring(start, end)

console.log(s.split('')); // gives all chars of this string in an array
const blogpost = 'technology, computers, it, code';
console.log(blogpost.split(', ')); // indicate what to split by

/* Arrays */
// Using an array constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
const fruits = ['apples', 'oranges', 'pears', true, 10];
console.log(fruits);
// You can have multiple data types within the same array!
// JS isn't statically typed, so we don't have to do things like const name:string - TypeScript is used for this
// Accessing an array element
console.log(fruits[1]);
// Adding on to the end of the Array
fruits[5] = 'grapes';
console.log(fruits[5]);
// Even though the array is a const, you can add values to the end. The only thing you can't do is reassign
// There's also a push method for Arrays
fruits.push('mangoes');
console.log(fruits[6]);
// Add to beginning: unshift
fruits.unshift('strawberries');
// Take last one off: pop
fruits.pop();
console.log(fruits);
// Check if something is an Array
console.log(Array.isArray(fruits));
// get an index: indexOf
console.log(fruits.indexOf('oranges'));

// Object literals: key-value pairs
const person = {
  firstName: 'Andy',
  lastName: 'Le',
  age: 20,
  hobbies: ['coding', 'gaming', 'running'],
  // Embedded object
  address: {
    street: '50 Main St',
    city: 'Austin',
    state: 'TX'
  }
}

console.log(person);
// alerting person gives [object Object]
// access a single value: dot syntax
console.log(person.firstName);
console.log(person.age, person.lastName);
console.log(person.address.city);

// we can destructure to create variables from the object literal
// pulling out of person object
const { firstName, lastName } = person;
// firstName should have the same thing as the object literal
console.log(firstName);
// for an embedded object:
const { address: { city }} = person;
console.log(city);
// adding properties
person.email = 'andrewandyle@gmail.com'
console.log(person);

// Array of objects
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appointment',
    isCompleted: false
  }
];
console.log(todos);
// printing out something
console.log(todos[1].text);
// JSON format is similar to object literals
// Difference is double quotes around the keys, and double quotes around the Strings

// to convert to JSON:
const todoJSON = JSON.stringify(todos);
console.log(todoJSON); // returns a JSON string

/* Loops */
// for Loops
for (let i = 0; i < 10; i++) {
  console.log(`For loop number ${i}`);
}
// while Loops
let i = 0;
while (i < 10) {
  console.log(`While loop number ${i}`);
  i++;
}

// Looping through Arrays
for (let i = 0; i < todos.length; i++) {
  console.log(`For loop: ${todos[i].text}`);
}
// for-of Loops (this is like a for-each loop in Java)
for(let todo of todos) {
  console.log(`For-of loop: ${todo.text}`);
}
// High-order array methods
// forEach - loops through array elements
todos.forEach(function(todo) {
  console.log(`forEach loop: ${todo.text}`);
});
// map - returns a new array from an array
const todoText = todos.map(function(todo) {
  return todo.text;
});
console.log(todoText);
// filter - makes a new array based on a condition
// return only the ones that are true
const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
}).map(function(todo) { // if you just want the text
  return todo.text;
})
console.log(todoCompleted);
// This is straight up functional programming.

// Conditionals
const c = 10;
if (c == 10) {
  console.log('c is 10');
}
// double equals doesn't match the data type
// triple equals matches the data types as well, so it will be false if you do c === '10' (because c isn't a string)
const d = '10';
if (d === 10) {
  console.log('d is 10');
} else {
  console.log('d is NOT 10');
} // can add many else ifs as you want
// can use regular inequalities like >, >=, etc.

// just like Java: or is ||, and is &&
// Ternary operator: short-hand if-else statement
const e = 10;
// if e is greater than 10, then set color to red, else set to blue
const color = e > 10 ? 'red' : 'blue';
console.log(color);
// ? - then, : - else

// Switch statement
switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is not red or blue');
    break;
}

// Functions:
function addNums(num1, num2) {
  // we can put parameters inside parentheses
  // no variable type/data type this time
  console.log(num1 + num2);
  // you can also just return the value instead
  // you don't indicate return type when declaring a function
}

// Call the function
addNums(5, 4);
// remove parameters and you get NaN
// we can set default values in our parameters (ex: function addNums(num = 1, num2 = 1)): they will be used if no parameters are passed, but will be overridden if there are parameters

// turn into an arrow function: instead of using the keyword function, we would name it as a variable and put an equals sign, and a fat arrow (=>) after the parantheses

const addNumsArrow = (num1 = 1, num2 = 1) => console.log(num1 + num2);
// curly braces or return statement can be omitted if there's only one expression
addNumsArrow(5, 5);
// if you only have one parameter, you can just omit the parantheses
const addFiveToNum = num1 => num1 + 5;
console.log(addFiveToNum(5));
todos.forEach((todo) => console.log(todo));
// You can use the this keyword in certain situations

/* Object-oriented programming
We can construct objects using a constructor function using prototypes, or ES6 classes */
// Constructor function:
function Person(firstName, lastName, dob) {
  // pass in properties you want to set
  this.firstName = firstName;
  this.lastName = lastName;
  // can change this to a date object
  this.dob = new Date(dob);
}

// prototypes
// we can attach methods and properties to the prototype
// we want to put the functions we just made in the prototype
Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}
// if we look at the console log, we don't see the function in the object itself, but it's in the prototype

// Instantiate the object
const person1 = new Person('Andy', 'Le', '8-13-1999');
console.log(person1);
// Looks like the object literal but it's prefixed with the actual name of the object
console.log(person1.dob);
// Date object has some methods
console.log(person1.dob.getFullYear());

// We can add methods to this Person object
// we added getBirthYear
console.log(`Function call: ${person1.getBirthYear()}`);
console.log(person1.getFullName());

// ES6 classes - this is syntactic sugar, everything looks prettier but it does the same thing under the hood
// you can make a class fast by class + tab
class Human {
  constructor() {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() { // also adds to prototype
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
// Doing the above should give the same results
