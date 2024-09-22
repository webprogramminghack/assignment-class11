'use strict';

function fetchData(url) {
  // you can use fetch to get a Promise from URL
  // start coding here
 return fetch(url)  
  .then(response => {
    if (!response.ok) {
      throw new Error('Not Found'); 
    }
    return response.json();
  })
  .then(userData => {
    const location = userData.location || 'Location not available';
    console.log(`${userData.name} lives in ${location}`); 
  })
  .catch(error => {
    if (error.name === 'TypeError') {
      throw new Error('Fetch failed');
    } else {
      throw error;
    }
  });
}  
  
// don't change the code below
let url1 = 'https://api.github.com/users/iliakan';
let url2 = 'https://api.github.com/users/remy';
let url3 = 'https://api.github.com/users/jeresig';
let url4 = 'https://no-such-url';

//fetchData(url1); // Output should be: Ilya Kantor lives in Amsterdam
//fetchData(url2); // Output should be:  Remy Sharp lives in Brighton, UK
//fetchData(url3); // Output should be:  John Resig lives in Hudson Valley, NY
//fetchData(url4); // Output should be:  Error: Not Found

fetchData(url1)
  .then(() => fetchData(url2)) 
  .then(() => fetchData(url3)) 
  .then(() => fetchData(url4))  
  .catch(error => {
    console.log(`Error: ${error.message}`); 
  });