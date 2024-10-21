// js Generators

function* evens(n){
  while(true){
    yield n;
    n+=2;
  }
}
const even = evens()
console.log(even.next());

function* colorsGen (){
  yield 'blue';
  yield 'red';
  yield 'brown';
  yield 'yellow';
}

// this generator in js is useful when you have a big chunck of data and want to use a part
// of it every time