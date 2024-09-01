# Promise Chaining in JavaScript

## Objective

The objective of this assignment is to understand and implement promise chaining in JavaScript. You will learn how to handle multiple asynchronous operations sequentially by chaining promises together.

## Instructions

### Step 1: Understanding Promises and Promise Chaining

Before starting the assignment, make sure you understand the following concepts:

- **Promises**: Objects representing the eventual completion or failure of an asynchronous operation.
- **Promise Chaining**: The process of chaining multiple `.then()` and `.catch()` methods to handle asynchronous operations in sequence.

### Step 2: Sequential Data Fetching

In this assignment, you will implement a function to fetch data from a series of URLs. Each fetch operation should occur in sequence, with the results from each fetch being processed and logged to the console.

### Step 3: Implement the `fetchData` Function

You will use `fetch` to retrieve data from a URL. The `fetchData` function should fetch the data, process the result, and then log the relevant information to the console.

### Initial Code

Below is the initial code you will work with:

```javascript
function fetchData(url) {
  // you can use fetch to get a Promise from URL
  // start coding here
}

// don't change the code below
let url1 = 'https://api.github.com/users/iliakan';
let url2 = 'https://api.github.com/users/remy';
let url3 = 'https://api.github.com/users/jeresig';

fetchData(url1); // Output should be: Ilya Kantor lives in Amsterdam
fetchData(url2); // Output should be:  Remy Sharp lives in Brighton, UK
fetchData(url3); // Output should be:  John Resig lives in Hudson Valley, NY
```

# Rantai Janji dalam JavaScript

## Tujuan

Tujuan dari tugas ini adalah untuk memahami dan mengimplementasikan rangkaian janji dalam JavaScript. Anda akan mempelajari cara menangani beberapa operasi asinkron secara berurutan dengan merangkai janji bersama-sama.

## Petunjuk

### Langkah 1: Memahami Promise dan Promise Chaining

Sebelum memulai tugas, pastikan Anda memahami konsep berikut:

- **Janji**: Objek yang mewakili penyelesaian atau kegagalan operasi asinkron.
- **Promise Chaining**: Proses merangkai beberapa metode `.then()` dan `.catch()` untuk menangani operasi asinkron secara berurutan.

### Langkah 2: Pengambilan Data Berurutan

Dalam tugas ini, Anda akan mengimplementasikan fungsi untuk mengambil data dari serangkaian URL. Setiap operasi pengambilan harus dilakukan secara berurutan, dengan hasil dari setiap pengambilan diproses dan dicatat ke konsol.

### Langkah 3: Implementasikan Fungsi `fetchData`

Anda akan menggunakan `fetch` untuk mengambil data dari URL. Fungsi `fetchData` harus mengambil data, memproses hasilnya, lalu mencatat informasi yang relevan ke konsol.

### Kode Awal

Di bawah ini adalah kode awal yang akan Anda gunakan:

```javascript
fungsi mengambilData(url) {
  // Anda dapat menggunakan pengambilan untuk mendapatkan Janji dari URL
  // mulai membuat kode di sini
}

// jangan ubah kode di bawah ini
biarkan url1 = 'https://api.github.com/users/iliakan';
biarkan url2 = 'https://api.github.com/users/remy';
biarkan url3 = 'https://api.github.com/users/jeresig';

ambilData(url1); // Outputnya seharusnya: Ilya Kantor tinggal di Amsterdam
ambilData(url2); // Outputnya seharusnya: Remy Sharp tinggal di Brighton, Inggris
ambilData(url3); // Outputnya seharusnya: John Resig tinggal di Hudson Valley, NY
```
