// async

// we can declare any function as async, they
// always return a promise

// await
// inside async function's we can use await, it
// pauses execution, think of the await keyword like a pause button

async function getData() {
  const result = await fetch("url");
  console.log(result);
}
// this will wait for the data back and then log it,
// but the below function will log the promise that was made

function getData2() {
  const result = fetch("url");
  console.log(result);
}
