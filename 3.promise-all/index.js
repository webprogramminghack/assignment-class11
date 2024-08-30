let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig',
];

// Please use Promise.all() to print user's login and id
// Start coding here
// Use Promise.all() to fetch data from all URLs

// **Chain** the promises using `Promise.all()`
Promise.all(
  urls.map((url) =>
    // **Fetch** data from each URL using `fetch`.
    fetch(url).then((response) => {
      return response.json();
    })
  )
) //  **Handle** the JSON response from each fetch.
  .then((users) => {
    users.forEach((user) => {
      // **Display** the relevant data from each response.
      console.log(`User: ${user.login}, ID: ${user.id}`);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

// ------ don't change the code below -------
// Expected output
// User: iliakan, ID: 349336
// User: remy, ID: 13700
// User: jeresig, ID: 1615
