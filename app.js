// Promise.allSettled()

// get an array of promises and get's resolved only once all those promises are either resolved of rejected, unlike Promise.all doesn't care if all must resolve

async function func() {
  const res1 = fetch("url");
  const res2 = fetch("url");

  const badResponse = fetch("badUrl");

  const res3 = fetch("url");
  const res4 = fetch("url");

  const results = await Promise.allSettled([
    res1,
    res2,
    res3,
    res4,
    badResponse,
  ]);

  console.log(results);
}
