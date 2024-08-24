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

// sometimes you'll need to say "call this function on this object",
// that's what call() is for!
const fluffy = new Cat("fluffy");

let fDance = fluffy.dance;
const newCat = new Cat("gholi");

console.log(fDance.call(newCat));
// we can even provide arguments
console.log(fDance.call(fluffy, "tango"));

const hasan = {
  name: "hasan",
  sing: function () {
    return `${this.name} sings`;
  },
};
const lisa = {
  name: "lisa",
};

console.log(hasan.sing());
console.log(hasan.sing.call(lisa));
