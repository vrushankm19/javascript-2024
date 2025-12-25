# 🚀 Fetch API — Simple Explanation (Beginner → Interview)

---

## ✅ Fetch API kya hai? (ONE LINE)

> **Fetch API browser ka built-in method hai jisse hum backend / API se data get ya send karte hain.**

Use cases:

* Server se data lana (GET)
* Server ko data bhejna (POST, PUT)
* Data delete karna (DELETE)

👉 Fetch **promise return karta hai**

---

## ✅ Basic Syntax (Yaad rakhna)

```js
fetch(url, options)
```

* `url` → API ka address
* `options` → optional (method, body, headers)

---

## 📌 GET Request (Data lena)

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data));
```

### Step by step:

1. `fetch()` → server ko request bhejta hai
2. `res` → raw response (ReadableStream)
3. `res.json()` → response ko JS object me convert karta hai
4. `data` → actual data

👉 `res.json()` bhi **promise** return karta hai (important)

---

## 📌 POST Request (Data bhejna)

```js
const data = {
  title: "This is title",
  body: "This is post body",
  userId: 2,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then(res => res.json())
  .then(data => console.log(data));
```

### Important points:

* `method: "POST"` → request type
* `body` → data bhejna
* `JSON.stringify()` → object ko string banata hai
* `headers` → server ko batate hain data ka format

---

## 📌 PUT & DELETE

Bas **method change karo**:

```js
method: "PUT"
method: "DELETE"
```

Baaki sab same.

---

## 🎁 Fetch with Async / Await (Recommended)

```js
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

getUsers();
```

### Ye kyun better hai?

* Code clean hota hai
* `.then()` chain nahi
* Read karna easy

⚠️ Important correction:

```js
const data = res.json(); // ❌ wrong
const data = await res.json(); // ✅ correct
```

---

## 🧠 Common Interview Questions (Short Answers)

### Q: Fetch kya return karta hai?

> Promise

### Q: `res.json()` kya karta hai?

> Response ko JS object me convert karta hai

### Q: Fetch vs Axios?

> Fetch built-in hai, Axios library hai

### Q: Fetch error kab deta hai?

> Network error pe; 404/500 pe manually check karna padta hai

---

## 🔥 30-Second Interview Answer (Perfect)

> *“Fetch API browser ka built-in method hai jo HTTP requests karne ke liye use hota hai. Ye promise return karta hai. GET request me hum data fetch karte hain, POST request me data send karte hain. Response ko `res.json()` se parse karte hain. Async/await se code aur clean ho jata hai.”*

---

## ✅ One-Line Revision (Save this)

> **Fetch = HTTP request → Promise → res.json() → Data**

---