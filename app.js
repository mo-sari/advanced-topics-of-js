// isNaN only returns false if it's not NaN and the value can not be interpreted as a number
console.log(isNaN('sfse'));
console.log(isNaN([]));
console.log(Number([]));


// Number.isNan will return false if the argument is anything but Nan
console.log(Number.isNaN('sfse'));
console.log(Number.isNaN([]));
console.log(Number.isNaN(0/0));
