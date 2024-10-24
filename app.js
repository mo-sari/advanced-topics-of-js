// new section: LocalStorage
// these below are the basic method's available while working with localstorage

localStorage.setItem('key', 'value');
localStorage.getItem('key');
localStorage.removeItem('key');
// this below is to delete multiple key value pairs
localStorage.clear()

// localstorage only stores data as a string, if we need to store any complext data
// we might want to turn that into json
localStorage.setItem('nums', JSON.stringify([1, 2, 3, 4]));
JSON.parse(localStorage.getItem('nums'));

// NOTHING SENSITIVE SHOULD BE STORED IN LOCALSTORAGE LIKE PASSWORD'S ...
// what we can store in ls ? stuff like user preferences(dark mode ...), the products
// which user has reviewd, if they have field any form partially we could store that, shopping card data, caching data, analytics, add trackings ...