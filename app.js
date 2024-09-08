// Promise.allSettled()

// get an array of promises and get's resolved or rejected as soon as the first promise was resolved or rejected

async function func() {
  const res1 = fetch("url");
  const res2 = fetch("url");

  const badResponse = fetch("badUrl");

  const res3 = fetch("url");
  const res4 = fetch("url");

  const winner = await Promise.race([res1, res2, res3, res4, badResponse]);

  console.log(winner);
}
