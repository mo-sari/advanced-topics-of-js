// we can build our own Promises,
// if we wanted to fake an http request which successeds of fails after a moment we could do it like below

// function customPromise() {
//   return new Promise((resolve) => {
//     resolve("this is the value returned");
//   });
// }
// async function newFunc() {
//   const res = await customPromise();
//   console.log(res);
// }
// newFunc();

// or if we wanted to fake some time taking :
// function customPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("this is the value returned");
//     }, 1000);
//   });
// }
// async function newFunc() {
//   const res = await customPromise();
//   console.log(res);
// }
// newFunc();

// resolving or rejecting:
function customPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("this is the value returned");
      } else {
        reject("this promise was rejected");
      }
    }, 2000);
  });
}
async function newFunc() {
  const res = await customPromise();
  console.log(res);
}
newFunc();
// or this way:
customPromise()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
