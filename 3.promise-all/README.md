# Promises All in JavaScript

## Objective

The objective of this assignment is to learn how to handle multiple asynchronous operations using promises and promise chaining in JavaScript. You will use `Promise.all()` to fetch data from multiple API endpoints and process the responses.

## Instructions

### Step 1: Understanding Promises and Chaining

Before starting the assignment, make sure you understand the following concepts:

- **Promises**: Objects representing the eventual completion or failure of an asynchronous operation.
- **Promise Chaining**: The process of chaining multiple `.then()` methods to handle asynchronous operations in sequence.
- **Promise.all()**: A method that takes an array of promises and returns a single promise that resolves when all the promises have resolved.

### Step 2: Fetch Data from Multiple APIs

You will be provided with an array of URLs pointing to different API endpoints. Your task is to:

1. **Fetch** data from each URL using `fetch`.
2. **Chain** the promises using `Promise.all()` to ensure that all data is fetched and processed together.
3. **Handle** the JSON response from each fetch.
4. **Display** the relevant data from each response.

### Step 3: Implement the Promise Chaining

You will use `fetch` to retrieve data from multiple URLs. Use `Promise.all()` to wait until all fetch operations are complete, then process the data.

### Initial Code

Below is the initial code you will work with:

```javascript
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig',
];

// Please use Promise.all() to print user's login and id
// Start coding here

// ------ don't change the code below -------
// Expected output
// User: iliakan, ID: 349336
// User: remy, ID: 13700
// User: jeresig, ID: 1615
```
