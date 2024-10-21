// Logical or assignment ||=

const todo = {priority: ''}

// these two lines do the exact same thing

todo.priority || (todo.priority = 'something');
console.log(todo.priority);

todo.priority ||= 'newsomething';
console.log(todo.priority);
// didn't change here because now it's not falsy(it's not an empty string)
// we would use this operator to update a varaible if it's value is falsy
// the opposite is to use:

// Logical and assignement &&=

todo.priority &&= 'anotherSomething';
console.log(todo.priority);