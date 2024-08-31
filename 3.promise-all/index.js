let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig',
  // 'https://api.github.com/users/jeresiggg',
];

// Please use Promise.all() to print user's login and id
// Start coding here
Promise.all(urls)
  .then(allUrl => allUrl.map(url => {
    // console.log(url);

    fetch(url)
      .then(result => result.json())
      .then(data => {
        let id        = data.id;
        let login     = data.login;
        let message   = `User: ${data.login}, ID: ${data.id}`;
  
        // result
        if (id === undefined || login === undefined) {
          console.log(`Error: User and ID Not Found`);
        } else {
          console.log(message);
        }
      });
    
  }))
  .catch((error) => console.log(error.message));


// ------ don't change the code below -------
// Expected output
// User: iliakan, ID: 349336
// User: remy, ID: 13700
// User: jeresig, ID: 1615
