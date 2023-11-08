// const and let
let age = 20;
const name = "John";

// arrow functions
// const array = [1,2,3];

// template string
const greeting = (name) => {
  const string = "Hello, " + name + "!";
  const templateString = `Hello, ${name}!`;
};

// default parameters
const add = (a = 2, b = 2) => console.log(a + b);

// array destructuring
const array = [1, 2, 3];

const first = array[0];
const third = array[2];

console.log(first, third);
