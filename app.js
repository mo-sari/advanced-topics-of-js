function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

const dog1 = new Dog("dog", "breed");
const dog2 = new Dog("dog2", "breed2");

Dog.prototype.bark = function () {
  return `${this.name} says woof!`;
};

console.log(dog1, dog2);
console.log(dog1.__proto__ === dog2.__proto__);

// for objects created by factory function's we have to manualy add
// function's to their prototype

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

console.log(dog3.__proto__);

console.log(dog3.__proto__ === dog4.__proto__);
// every object has access to another special object called prototype
// that is created when we use class keyword.

// remember in both cases the new keyword is
// linking the objects with their respective prototype's
// like link's dog1 to Dog's prototype
