function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.bark = function () {
    return `${this.name} says woof!`;
  };
}

const dog1 = new Dog("dog", "breed");
const dog2 = new Dog("dog2", "breed2");

console.log(dog1, dog2);
// THEY both have their own copy of bark method,
// if you create a thousand of them, you'll have a thousand
// numbers of bark method.

console.log(dog1.bark === dog2.bark);

class NewDog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    return `${this.name} says woof!`;
  }
}
const dog3 = new NewDog("dog", "breed");
const dog4 = new NewDog("dog2", "breed2");

console.log(dog3, dog4);
// the bark method is shared through prototypes.
console.log(dog3.bark === dog4.bark);
