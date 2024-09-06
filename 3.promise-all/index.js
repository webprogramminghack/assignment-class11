let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig',
];
// Please use Promise.all() to print user's login and id
// Start coding here

Promise.all(urls.map((url) => fetch(url).then((response) => response.json())))
  .then((data) =>
    data.forEach((user) => {
      // console.log(user);
      console.log(`User: ${user.login}, ID: ${user.id}`);
    })
  )
  .catch((err) => console.log(err.message));

// ------ don't change the code below -------
// Expected output
// User: iliakan, ID: 349336
// User: remy, ID: 13700
// User: jeresig, ID: 1615
