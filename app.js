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

// we can also bind a function to a context, call method gets tedious sometimes
// like when you want to call it multiple times

console.log(hasan.sing.call(lisa));
console.log(hasan.sing.call(lisa));
console.log(hasan.sing.call(lisa));
console.log(hasan.sing.call(lisa));
console.log(hasan.sing.call(lisa));
console.log(hasan.sing.call(lisa));

const func = hasan.sing.bind(lisa);
// NOW we created a new function( sing's functionality but always bind to lisa)
console.log(func());
