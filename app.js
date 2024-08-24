// the new keyword does four things:
// 1 creates an empty object
// 2 stes the keyword this to be that object
// 3 returns the object - return this
// 4 creates a link to the object's prototype

function Dog(name, breed) {
  console.log(this);
  this.name = name;
  this.breed = breed;
}
// this is a factory that describes the shape of an object
// it's uppercase to notify everyone that this is not a regular
// function and it's an object factory.
console.log(Dog("name", "breed"));
console.log(new Dog("newName", "newBreed"));
