function greet() {
  return "hello";
}

console.log(greet());
window.console.log(greet());

// when you call a function on nothing, you call it on the "global object"
// in browser JS, that's typically window( the browser window);
// this is important because the keyword this, dependes on the object
// the function is called on.
