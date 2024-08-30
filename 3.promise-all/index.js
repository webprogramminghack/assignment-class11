let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig',
];

// Please use Promise.all() to print user's login and id
// Start coding here

function fetchData(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

Promise.all(urls.map((url) => fetchData(url)))
  .then((responses) => {
    responses.forEach((user) => {
      // console.log(`User: ${user.login}, ID: ${user.id}, NI: ${user.node_id}`);
      console.log(`User: ${user.login}, ID: ${user.id}`);
    });
  })
  .catch((error) => {
    console.error(
      'There was a problem with one of the fetch operations:',
      error
    );
  });

// ------ don't change the code below -------
// Expected output
// User: iliakan, ID: 349336
// User: remy, ID: 13700
// User: jeresig, ID: 1615
