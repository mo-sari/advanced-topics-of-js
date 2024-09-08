// next two patterns are:
// 1- sequntial calls( we've seen before with async function's or .then.catch)

// 2- many calls in sequence
// Promise.all accepts an array of promises and returns a new promise
// resolved if all promises resolved
// rejected even if one promise rejected

const promises = [fetch("url/1"), fetch("url/2"), fetch("url/3")];

// and we can handle them in two ways:

Promise.all(promises)
  .then((results) => console.log(results))
  .catch((err) => {
    console.log(err);
  });

async function func() {
  const responses = await Promise.all(promises);
  console.log(responses);
}
