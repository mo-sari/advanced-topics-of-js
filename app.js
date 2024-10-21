// while dealing with the data which we get from databases we might not always get something organized
// if we're dealing with deeply nested objects we might get an error if some property doest not exist and we
// ask for it. in these scenario's we would use optional chaining

const person = {
  name: 'ali',
  lastName: {
    formal: 'ansari',
    informal: 'ghanbari'
  },
  address: {
    coordinates:{
      long: '12323',
      latt: '234234',
    }
  },
  greet(){
    return 'hello';
  }
}

// these two lines do the same thing but the second one is more up to date,

const p1_address = person && person.address && person.address.coordinates && person.address.coordinates.long

const p2_address = person?.address?.coordinates?.long;

console.log(p1_address, p2_address);

// and this is how to call methods with optional chaining

console.log(person?.greet?.())