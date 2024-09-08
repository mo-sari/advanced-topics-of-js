//callback function's:
// just functions we pass to other function's to call

const arr = [1, 2, 3, 4, 5, 6, 7];
const evens = arr.filter((num) => num % 2 === 0);
console.log(evens);

// other example's include passing a callback to eventListener's, async operation's
function newfun() {
  console.log("hello");
}
setTimeout(newfun, 3000);
