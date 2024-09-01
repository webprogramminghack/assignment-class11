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

# Menjanjikan Semua dalam JavaScript

## Tujuan

Tujuan dari tugas ini adalah mempelajari cara menangani beberapa operasi asinkron menggunakan janji dan rangkaian janji dalam JavaScript. Anda akan menggunakan `Promise.all()` untuk mengambil data dari beberapa titik akhir API dan memproses responsnya.

## Petunjuk

### Langkah 1: Memahami Janji dan Rantai

Sebelum memulai tugas, pastikan Anda memahami konsep berikut:

- **Janji**: Objek yang mewakili penyelesaian atau kegagalan operasi asinkron.
- **Promise Chaining**: Proses merangkai beberapa metode `.then()` untuk menangani operasi asinkron secara berurutan.
- **Promise.all()**: Metode yang mengambil serangkaian janji dan mengembalikan satu janji yang diselesaikan ketika semua janji telah diselesaikan.

### Langkah 2: Ambil Data dari Beberapa API

Anda akan diberikan serangkaian URL yang menunjuk ke titik akhir API yang berbeda. Tugas Anda adalah:

1. **Ambil** data dari setiap URL menggunakan `ambil`.
2. **Rantai** janji menggunakan `Promise.all()` untuk memastikan bahwa semua data diambil dan diproses bersama.
3. **Menangani** respons JSON dari setiap pengambilan.
4. **Menampilkan** data yang relevan dari setiap respons.

### Langkah 3: Terapkan Rantai Janji

Anda akan menggunakan `fetch` untuk mengambil data dari beberapa URL. Gunakan `Promise.all()` untuk menunggu hingga semua operasi pengambilan selesai, lalu proses datanya.

### Kode Awal

Di bawah ini adalah kode awal yang akan Anda gunakan:

```javascript
biarkan url = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig',
];

// Silakan gunakan Promise.all() untuk mencetak login dan id pengguna
// Mulai coding di sini

// ------ jangan ubah kode di bawah ini -------
// Hasil yang diharapkan
// Pengguna: iliakan, ID: 349336
// Pengguna: remy, ID: 13700
// Pengguna: jeresig, ID: 1615
```
