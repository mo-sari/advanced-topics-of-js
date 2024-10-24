// new seciton: Fetch API:

// fetch will only reject our request if there is a network or server side error,
// this means if we had the wrong url and got 404 response, fetch will not deal with
// that as an error and we have to go further, like in our try block we have to do:
// if(!res.ok){
//    throw new Error(`${res.status}`)
// }

// in a request with FETCH we have to go through two steps:
// const response = await fetch('url');
// const data = await response.json();
// google what fetch and .json return


// Headers
// the simple way to send headers with our request is to have a second argument in our
// FETCH request, which is an object with a headers key, that itself is an object
// with different keys and values, like:
// fetch('url', {headers:{'key':'value'}})

// the other way of passing headers is to :
const headers = new Headers({"content_type":'application/json'});
// and then pass this headers object as the second argument of fetch in curly braces{}
// search for benefits