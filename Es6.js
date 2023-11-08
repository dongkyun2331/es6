// const and let
let age = 20;
const name = 'John';

// arrow functions
const array = [1,2,3];

// template string
const greeting = (name) => {
    const string = 'Hello, ' + name + '!';
    const templateString = `Hello, ${name}!`;
}

// default parameters
const add = (a,b=0) => console.log(a+b);

add(2);