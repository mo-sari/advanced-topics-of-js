// functional programming

// Writing pure functions: 

// - the function always gives the same return value for the same arguments 
// - the function cannot depend on any mutable state
// - the function cannot cause any side effects
// - side effects may include I/O (eg, writing to the console or a log file), modifying a mutable Object, reassigning a variable, etc.


let value = 2;

function squareAndUpdateValue(num){
  value = num ** num;
  return value;
}

console.log(value);
const output = squareAndUpdateValue(value);
console.log(output, value);
// the above function had side effects, it changed a variable outside the function


function squerWithoutUpdate(num){
  return num ** num;
}
console.log('=========================================')
console.log(value);
const newOutput = squerWithoutUpdate(value);
console.log(newOutput, value);

// ===============================================
const colors = ['blue', 'orange']

function addToArray(arr, value){
  return arr.push(value);
}

const colorOutput = addToArray(colors, 'red');
console.log(colors);
// here we are updating the an array outside the funcion

function pureAddToArray(arr, value){
  return [...arr, value];
}
// ===============================================
// ===============================================
// ===============================================
// ===============================================

// Higher Order functions:
// A function that recieves another function as an argument or returns a function
// or maybe does both.

function multiplyBy(num){
  return function inner(value){
    return num * value;
  }
};

const double = multiplyBy(2);
console.log(double(3));
console.log(double(4));

// ===============================================
// ===============================================
// ===============================================
// ===============================================

// Immutability
// this is one of the important thing we should take into consideration,
// if you're writing a function that is going to get some arguments from
// outside the function, just make sure you're not chaing the value if it's
// mutable and making a copy of it.

const person = {name: 'ali', age:26};
// there is a way for example to make an object immutable,

Object.freeze(person);
person['name'] = 'hassan';
person.age = 23;
console.log(person);
// ===============================================
// ===============================================
// ===============================================
// ===============================================

// Partial application:

// the process of executing a function with some or all if its arguments. The partially applied function then gets returned for later use.

function greet(greeting, name){
  console.log(`${greeting} ${name} ?`);
}

const qomiGreeting = greet.bind(null, 'Cheetoori');
console.log(qomiGreeting('mamadde'));

// better example of a partial function:
// it doesn't even care if we bake a single argument or more into the function
function multiply(a, b){
  return a * b;
}

function partial(func, ...fixedArgs){
  return function (...remainingArgs){
    return func(...fixedArgs, ...remainingArgs);
  }
}

const newDouble = partial(multiply, 2);
console.log(newDouble(4));