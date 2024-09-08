// and this way we can chain multiple request
async function getData() {
  const result1 = await fetch("url");
  console.log(result1);
  // below is only initiated once the above is done
  const result2 = await fetch("url");
  console.log(result2);

  const result3 = await fetch("url");
  console.log(result3);
}

async function getData() {
  try {
    const result1 = await fetch("url");
    console.log(result1);

    const result2 = await fetch("url");
    console.log(result2);
  } catch (err) {
    console.log(err);
  }
}
