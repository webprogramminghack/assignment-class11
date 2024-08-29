'use strict';

function fetchData(url) {
  // you can use fetch to get a Promise from URL
  // start coding here
  fetch(url)
  .then(res => res.json())
  .then(data => console.log(`${data.name} lives in ${data.location}`))
  .catch(err => console.log(`${err.name}: ${err.message}`));
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
