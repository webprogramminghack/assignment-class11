let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig',
];

// Please use Promise.all() to print user's login and id
// Start coding here

Promise.all(
  urls.map((url) =>
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Gagal mengambil data dari ${url}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(`User: ${data.login}, ID: ${data.id}`);
      })
      .catch((error) => {
        console.error(error.message);
      })
  )
).then(() => {
  console.log(`Semua data telah diambil dan diproses.`);
});

// ------ don't change the code below -------
// Expected output
// User: iliakan, ID: 349336
// User: remy, ID: 13700
// User: jeresig, ID: 1615
