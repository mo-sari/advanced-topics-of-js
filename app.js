function applyTax(taxRate, price) {
  return price + price * taxRate;
}

console.log(applyTax(2, 3));
console.log(applyTax.call(null, 2, 3));

// a common usecase of bind method is to bake in an argument to an already
// existing function

const qomTax = applyTax.bind(null, 2);
console.log(qomTax(3));
// bind returns a new copy of the function that is bound to
