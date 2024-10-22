// Hoisting

console.log(name);
// this line will throw an error, but below will return undefined
console.log(lastName);
var lastName = 'ansari';
// why? becuase what js does when it see's a var declaration is like this:
// it first brings the var to the top of the scope

var lastName = undefined;
console.log(lastName);
lastName = 'ansari';

// this is the same if we were doing that inside a function as well
function hoisting(){
  console.log(newfirstname);
  var newfirstname = 'mohsen';
}

hoisting();

// for let and const however this works differently, we get an error if we
// use the variable before declaring it, js again does hoist the variable
// to the top of the scope, but puts it in a TEMPORAL DEAD ZONE that we can't reach it
// (for simplicity you can think of it like js does not HOIST the let and const variables
// at all)

// an interesting example:
function blah(){
  if(false){
    var message = 'hello'
  }
  console.log(message);
}
blah();
// in this example we don't get an error, why do you think that is ?