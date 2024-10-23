// functional programming

// ===============================================
// ===============================================
// ===============================================
// ===============================================
// Currying
// A curried function can be called with any numbers of arguments, if you call it with fewer args than it takes, it returns a smaller partial, which you can then call with remaining arguments.

function add3(a, b, c){
  return a + b + c;
}

function curry(fn){
  return function curried(...args){
    if(args.length >= fn.length){
      return fn.apply(this, args);
      // or maybe this:
      // return fn(...args);
    }else{
      return function (...args2){
        return curried.apply(this, args.concat(args2));
        // or maybe this:
        // return curried(...args.concat(args2));
      }
    }
  }
}

const curriedAdd = curry(add3);

console.log(curriedAdd(10)(1)(1));

const curried10 = curriedAdd(10);
console.log(curried10(2)(3));