//callback function's:
// why do we need them ?
// js is single threaded, if it's stuck for a request answer, it could not do any other thing

// like:
const response = FetchingLibrary.get("/api");
console.log(response);

// so the old patterns is to use callbacks to run all the functionality that is related to response, whenever we got it

const response2 = FetchingLibrary.get("/api", (response) => {
  console.log(response2);
});

// this is where we encounter the callback hell problem, running each request right after the previous request was answered( we have not included the error handling yet here)
const response3 = FetchingLibrary.get("/api", (response) => {
  FetchingLibrary.get("/api", (response) => {
    FetchingLibrary.get("/api", (response) => {
      FetchingLibrary.get("/api", (response) => {});
    });
  });
});

// at this point we reach to promises
