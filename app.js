const person = {
  name: "ali",
  hello: function () {
    return "hello";
  },
};

console.log(person.hello());
const pHello = person.hello;
console.log(pHello());

const newPerson = {
  name: "ali",
  hello: function () {
    return `${this.name} says hello`;
  },
};
console.log(newPerson.hello());
const pNewHello = newPerson.hello;
console.log(pNewHello());

// there is a slight problem here and we'll talk about that in this section
