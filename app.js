// Debouncing

// Debouncing in JavaScript is a technique used to limit the rate at which a function is executed. It ensures that a function is only called after a certain period of inactivity, meaning it won't be triggered again until a specified delay has passed since the last time the function was invoked.

// debouncing is commonly used in React, especially when handling input events like search fields, or actions that trigger API calls or state updates. It helps improve performance by reducing the number of function calls, such as preventing multiple API requests from being fired on every keystroke in a search bar.

// this is an example of implementing this concept in react.js :

import React, { useState, useEffect, useRef } from 'react';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  
  // Create a ref to store the current timeout ID
  const debounceTimeout = useRef(null);

  const handleSearch = (term) => {
    console.log('Searching for:', term);
    // Simulate an API call
    setResults([`Result 1 for ${term}`, `Result 2 for ${term}`]);
  };

  const onInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Clear the previous timeout
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // Set a new timeout
    debounceTimeout.current = setTimeout(() => {
      handleSearch(term);
    }, 300); // 300ms delay
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={onInputChange}
        placeholder="Search..."
      />
      <div>
        <h3>Results:</h3>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchComponent;
