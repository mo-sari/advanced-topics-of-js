class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  dance(style = "tango") {
    return `Meow, I am ${this.firstName} and I like to ${style}`;
  }
}

let fluffy = new Cat("fluffy");
console.log(fluffy.dance());

let fDance = fluffy.dance;
console.log(fDance());

// in class it throws an error, why ? we'll see.
