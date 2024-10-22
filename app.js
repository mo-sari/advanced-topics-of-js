// when we declare a variable with let, we define it in global scope
// and we can reach it using window.<<varName>>, this is not good because we might
// change something in window object unintentionaly
// but let and const are also global but are not saved in window object

// in a function if we declare a variable, it doesn't matter if we use let, var or const
// they're all bined to that function's scope

// another distinction is that let and const are block scope(if, for ...) but var is not

// The scope chain:
// 1. In the local scope
// 2. Any outer functions
// 3. Global scope

// js is static scope
let animal = 'Barn';

function printAniaml(){
  console.log(animal);
}

function alsoPrintAnimal(){
  let animal = 'new owl'
  printAniaml();
}

console.log(alsoPrintAnimal());
// the scope of printAniaml is determined when we wrote this function, that is why this is happening
