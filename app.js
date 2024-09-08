// .then/.catch and async/await do the same thing, just async await are modern
// but there might be some scenario's where usign .then .catch is better

// like when I want to make multiple requests but I don't care if they run one after another,

const results = [];

fetch("url").then((res) => results.push(res));
fetch("url").then((res) => results.push(res));
fetch("url").then((res) => results.push(res));

// and the rest of code is running down here

// or this way with async functions

async function fetching() {
  const res = await fetch("url");
  console.log(res);
}
async function fetching2() {
  const res = await fetch("url");
  console.log(res);
}

fetching();
fetching2();
