// Nullish Coalescing

console.log(false || 'anonymous');
console.log(0 || 'anonymous');

// || sometimes might not be what we need because something like false, 0 or an empty array are still valid data
// in these scenario's we can use this nullish thing

console.log(0 ?? 'anonymous');

// it just returns the right hand side if we get null or undefined

console.log(null ?? 'anonymous');