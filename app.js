class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  superGreet() {
    console.log(`1: I am ${this.firstName}`);

    setTimeout(function () {
      console.log(`this is: `, this);
      console.log(`2: I am ${this.firstName}`);
    });

    setTimeout(() => {
      console.log("this is: ", this);
      console.log(`3 I am ${this.firstName}`);
    });
  }
}

let kitty = new Cat("kitty");
kitty.superGreet();
// arrow function don't create their own this keyword
