// promises:
// A promise of one-time guarantee of future value or failure.

// how to handle the value when promise resolved or rejected

// .then or .catch which both accept callbacks
// .then has access to the promises resolved value
// .catch has access to the reason of rejection

fetch("http://google.com")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

// but the callback hell problem still exists
