// Array.from needs an iterable to convert it into an array, and could get a mapping
// function as well to manipulate the data the way we want

const newArray = Array.from('hello', (e)=> e.toUpperCase());
console.log(newArray);

// we can use this to create big sequence's as well
// just need to have an object with a length property
const numarray = Array.from({length: 100}, (_, i)=> i);
// in mapping function, the element itself is undefined here
console.log(numarray);