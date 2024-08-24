const ringo = {
  firstName: "ringo",
  greet: function (greeting, punctuation) {
    console.log(`${this.firstName} says ${greeting}${punctuation}`);
  },
};

const george = {
  firstName: "George",
};

console.log(ringo.greet("hello", "!!!"));
console.log(ringo.greet.call(george, "hello", "!!"));

console.log(ringo.greet.apply(george, ["hello", "!!!!"]));
// the difference is just how we pass the arguments
