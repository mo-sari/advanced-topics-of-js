// ====================================
// Plain old javascript objects (pojo)
const pet = {};
console.log(typeof pet);

const newPet = { species: "dog", name: "elton" };
console.log(newPet.species);
console.log(newPet["name"]);

const key = "species";
console.log(newPet.key);
// above looks for the exact key keyword, below evaluates it to a string first.
console.log(newPet[key]);
// not existing variable evaluate to undefined
// all key's get stringified
// pet[true] == pet['true']
// propertie values could be functions

pet.bark = function () {
  return "woof woof";
};

let tri = {
  a: 3,
  b: 4,
  getArea: function () {
    return (this.a * this.b) / 2;
  },
};

// we created a complete object and we can go on this way but creating lot's of objects
// in this way probably is going to be annoying. ( and we also need to repeat the same
// function's in different objects that wastes lot's of memory space)
