'use strict';

function fetchData(url) {
  // you can use fetch to get a Promise from URL
  // start coding here
  // use `fetch` to retrieve data from a URL
  fetch(url)
    .then((response) => response.json())
    // chaining multiple `.then()` and `.catch()` methods to handle asynchronous operations in sequence
    .then((data) => {
      console.log(`${data.name} lives in ${data.location}`);
    })
    .catch((err) => {
      if (err instanceof TypeError) {
        console.log('Error: Not Found');
      } else {
        throw err;
      }
    });
}

// don't change the code below
let url1 = 'https://api.github.com/users/iliakan';
let url2 = 'https://api.github.com/users/remy';
let url3 = 'https://api.github.com/users/jeresig';
let url4 = 'https://no-such-url';

fetchData(url1); // Output should be: Ilya Kantor lives in Amsterdam
fetchData(url2); // Output should be:  Remy Sharp lives in Brighton, UK
fetchData(url3); // Output should be:  John Resig lives in Hudson Valley, NY
fetchData(url4); // Output should be:  Error: Not Found
