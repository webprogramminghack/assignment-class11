let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig',
];

// Please use Promise.all() to print user's login and id
// Start coding here
Promise.all(urls.map(url => 
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      return response.json();
    })
))
.then(dataArray => {
  dataArray.forEach(userData => {
    console.log(`User: ${userData.login}, ID: ${userData.id}`);
  });
})
.catch(error => {
  console.error('Error:', error.message);
});

// ------ don't change the code below -------
// Expected output
// User: iliakan, ID: 349336
// User: remy, ID: 13700
// User: jeresig, ID: 1615
