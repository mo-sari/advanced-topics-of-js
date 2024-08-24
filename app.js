const grandGreet = {
  greet() {
    return "hello";
  },
};

const parentGreet = {
  secondGreet() {
    return "secondHello";
  },
  age: 30,
  __proto__: grandGreet,
};

const child = {
  num: 2,
  __proto__: parentGreet,
};

console.log(child.greet());
// it goes up the chain to find what we used
// child now has access to all details of parentGreet and grandGreet
