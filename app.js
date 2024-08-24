function greet() {
  return `${this} says hello`;
}

console.log(greet());
// calling greet this way is like calling ==> window.greet()
// the this keywrod's owner is on the left side (window itself)

const obj = {
  name: "ali",
  greet: greet,
};

console.log(obj.greet());
// now the owner on the left side is changed.

const person = {
  name: "ali",
  sing: function () {
    return `${this.name} sings LALALA`;
  },
};

// this is why the output of these two lines differ
console.log(person.sing());

const singsss = person.sing;
console.log(singsss());

// the second one is called on window like, window.singsss()
