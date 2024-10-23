// functional programming

// ===============================================
// ===============================================
// ===============================================
// ===============================================
// Composition:
// this is mechanism for combiging multiple fucntions to build a more cimplicated one
// where the result of each function is passed to the next one.

// a simple example:
function compose(fn1, fn2){
  return function (val){
    return fn2(fn1(val));
  }
}

function repeatTwice(str){
  return str.repeat(2);
}

function upperCase(str){
  return str.toUpperCase();
}

const repeatAndUppercase = compose(repeatTwice, upperCase);
console.log(repeatAndUppercase('lol'));

// if we wanted to make it more flexible:

function flexibleCompose(...fucntions){
  // return function(val){
  //   return fucntions.reduceRight((acc, fnc) => fnc(acc), val);
  // }
  return function(val){
    return fucntions.reduceRight((acc, fnc) => {
      console.log(fnc.name);
      return fnc(acc);
    }, val);
  }
}

const output = flexibleCompose(repeatTwice, upperCase);
console.log(output('hello'))