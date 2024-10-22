// closure
// closure is a function inside another function which we have returned and this inner
// function has access to the outter function's scope and it's varialbles even after
// the execution of the outter function is finished.

function outterfunction(){
  const variable = 'something';
  function inner(){
    console.log(variable);
  }
  return inner;
}

const closure = outterfunction();
console.log(closure());


function idGenerator(){
  let count = 1
  function innerIdGen(){
    return count++;
  }
  return innerIdGen;
}

// const idGen = idGenerator()
// for (let i = 0; i < 10; i++) {
//   console.log(idGen());  
// }

// =======================================================
// this concept could be useful in scenario's wher we want to hide a variable
// (kind of make them private) and force the user to access to it through function's, like:

// function createCounter(){
//   let count = 0;
//   return {
//     increment: function (){
//       return count++;
//     },
//     decrement: function(){
//       return count--;
//     },
//     getCount: function(){
//       console.log(count);
//     }
//   }
// }

// const counter = createCounter()
// for (let i = 0; i < 10; i++) {
//   if(Math.random() > 0.5){
//     counter.increment()
//   }else{
//     counter.decrement()
//   }
//   counter.getCount();
// }

// =============================================================
// another usecase is to create factory function's

function createExponentFunction(exponent){
  function value(val){
    return val** exponent;
  }
  return value;
}

const squre = createExponentFunction(2);
const cube = createExponentFunction(3);

for (let index = 1; index < 10; index++) {
  console.log(squre(index));
  console.log(cube(index));
  console.log('========================================')
}

// or another example:
function uniuqueIdGen(prefix){
  let id = 0;
  return function(){
    id++;
    return `${prefix}_${id}`;
  }
}
const idgenerator = uniuqueIdGen('book')
for (let index = 1; index < 10; index++) {
  console.log(idgenerator());
}