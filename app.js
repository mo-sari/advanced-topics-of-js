// Throttling

function someFunc(){
  console.log('the function ran');
}

let isThrottled = false;
window.addEventListener('click',()=>{
  if(!isThrottled){
    someFunc();
  }
  isThrottled = true;
  setTimeout(() => {
    isThrottled = false;
  }, 3000);
})

// Throttling:
// Purpose: Throttling ensures that a function is called at most once in a specified period, no matter how many times it is triggered.
// How It Works: The function executes immediately but then waits for the specified period before it can be called again, even if the event is continuously triggered.
// Use Case: Ideal for scenarios where you want to limit the rate at which a function is executed, like handling scroll events, resizing windows, or button clicks that trigger expensive operations.
// Example: Limiting how often a user can trigger a function by clicking a button, ensuring it only fires once every second.