// there is also Nullish coalescing assignment = 

let person = null;
let newPerson = 'ali';


person ??= 'firstPersonsName';
newPerson ??= 'newPersonsName';

console.log(person, newPerson);