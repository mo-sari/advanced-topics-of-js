class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }
  static getRandomCat() {
    console.log(this);
  }

  dance(style = "tango") {
    return `Meow, I am ${this.firstName} and I like to ${style}`;
  }
}

let fluffy = new Cat("fluffy");
console.log(fluffy.dance());

console.log(Cat.getRandomCat());

const fDance = fluffy.dance;
console.log(fDance());

// here again we're calling a function on nothing, but
// when you call a function on nothing and the function comes
// from inside a class, the value of this will be undefined, not the window.
