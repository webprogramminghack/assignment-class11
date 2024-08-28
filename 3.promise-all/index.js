let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig',
];

// Please use Promise.all() to print user's login and id
// Start coding here
Promise.all(
  urls.map(
    (i) =>
      new Promise((resolve, reject) => {
        fetch(i)
          .then((res) => res.json())
          .then((i) => resolve(console.log(`User: ${i.login}, ID: ${i.id}`)))
          .catch((err) => reject(err));
      })
  )
);

// ------ don't change the code below -------
// Expected output
// User: iliakan, ID: 349336
// User: remy, ID: 13700
// User: jeresig, ID: 1615
