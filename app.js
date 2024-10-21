// var 

var person = 'ali'
// if you declare a global var variable like this you have access to it everywhere

function newPerson (){
  var myName = 'mohsen'
  console.log(myName);
}
// the var in this function is only tied to the function's scop
// this will throw an error:
// console.log(myName);


// a var variable in any code block like an if or for is scoped to global scope(window)
if(true){
  var myLastName = 'ansari';
}

console.log(myLastName);