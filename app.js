// new section: SessionStorage

// The statement "sessionStorage can store key-value pairs in a web browser for a single session" refers to the following:

// Key-Value Pairs: In sessionStorage, data is stored in the form of key-value pairs, similar to a JavaScript object or dictionary. You can set and retrieve values using unique keys. 
// Single Session: The "single session" part means that the data stored in sessionStorage is available only during the lifetime of the current browser tab or window session. Once the tab or window is closed, all the data stored in sessionStorage is cleared. However, refreshing the page or navigating to other pages within the same tab does not clear the data—it remains available until the session ends.

// Temporary Storage: Unlike localStorage, which persists even after the browser is closed and reopened, sessionStorage is temporary and tied to the current session.


const form = document.querySelector('#checkoutForm');
form.addEventListener('input', (e)=>{
  const {name, value} = e.target;
  const formData = JSON.parse(sessionStorage.getItem('form')) ?? {};
  formData[name] = value;
  sessionStorage.setItem('form', JSON.stringify(formData));
})