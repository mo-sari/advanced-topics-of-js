// promises:
// A promise of one-time guarantee of future value or failure.

fetch("http://google.com")
  .then((response1) => {
    console.log(response1);
    fetch("http://google.com")
      .then((response2) => {
        console.log(response2);
        fetch("http://google.com")
          .then((response3) => {
            console.log(response3);
          })
          .catch((err3) => {
            console.log(err3);
          });
      })
      .catch((err2) => {
        console.log(err2);
      });
  })
  .catch((err1) => {
    console.log(err1);
  });

// still have to chain promises together to have async functionality in order.

// this below is the prefered way, returning a promise after the fetch was completed and chain a .then to it
fetch("http://google.com")
  .then((response1) => {
    console.log(response1);
    return fetch("http://google.com");
  })
  .then((res2) => {
    console.log(res2);
    return fetch("http://google.com");
  })
  .then((res3) => {
    console.log(res3);
    return fetch("http://google.com");
  });
