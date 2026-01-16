# 📌 Promise.all(), Promise.race(), Promise.allSettled() – Hinglish Interview Notes

## 🔹 Promise kya hota hai? (Quick Recap)

Promise ek object hota hai jo **future me kisi async task ka result** batata hai.

Promise ke 3 states hoti hain:
- `pending`
- `fulfilled`
- `rejected`

---

## 🔹 Kyun Promise combinators chahiye?

Jab:
- multiple async tasks ek sath run karne ho  
- ya unke results ko combine karna ho  

👉 tab hum **Promise.all / race / allSettled** use karte hain.

---

## 1️⃣ Promise.all()

### ✅ Definition
`Promise.all()` **saare promises ke fulfill hone ka wait karta hai**.  
Agar **ek bhi promise reject** ho gaya → poora `Promise.all` reject ho jata hai.

---

### ✅ Syntax
```js
Promise.all([promise1, promise2, promise3])
````

---

### ✅ Example

```js
let p1 = Promise.resolve(10);
let p2 = Promise.resolve(20);
let p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

### ✔️ Output

```
[10, 20, 30]
```

---

### ❌ Reject Case

```js
let p1 = Promise.resolve(10);
let p2 = Promise.reject("Error");
let p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

### ❌ Output

```
Error
```

👉 Baaki promises ka result ignore ho jata hai

---

### 🔥 Use Case

* Multiple API calls
* Sabka data chahiye, warna fail

---

## 2️⃣ Promise.race()

### ✅ Definition

`Promise.race()` **jo promise sabse pehle settle hota hai**
(fulfilled ya rejected), **usi ka result return karta hai**.

---

### ✅ Syntax

```js
Promise.race([promise1, promise2, promise3])
```

---

### ✅ Example

```js
let p1 = new Promise(res => setTimeout(() => res("First"), 2000));
let p2 = new Promise(res => setTimeout(() => res("Second"), 1000));

Promise.race([p1, p2])
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

### ✔️ Output

```
Second
```

---

### ❌ Reject Case

```js
let p1 = new Promise((_, rej) => setTimeout(() => rej("Fail"), 500));
let p2 = new Promise(res => setTimeout(() => res("Success"), 1000));

Promise.race([p1, p2])
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

### ❌ Output

```
Fail
```

---

### 🔥 Use Case

* Timeout logic
* Fastest API response

---

## 3️⃣ Promise.allSettled()

### ✅ Definition

`Promise.allSettled()` **saare promises ke settle hone ka wait karta hai**,
chahe wo **resolve ho ya reject**.

👉 Kabhi reject nahi hota

---

### ✅ Syntax

```js
Promise.allSettled([promise1, promise2])
```

---

### ✅ Example

```js
let p1 = Promise.resolve(10);
let p2 = Promise.reject("Error");

Promise.allSettled([p1, p2])
  .then(res => console.log(res));
```

### ✔️ Output

```js
[
  { status: "fulfilled", value: 10 },
  { status: "rejected", reason: "Error" }
]
```

---

### 🔥 Use Case

* Sabka result chahiye (success + failure)
* Analytics / logging
* Partial success acceptable ho

---

## 🔥 Comparison Table (Very Important)

| Feature                | Promise.all      | Promise.race   | Promise.allSettled |
| ---------------------- | ---------------- | -------------- | ------------------ |
| Waits for all          | ✅ Yes            | ❌ No           | ✅ Yes              |
| Rejects on one failure | ✅ Yes            | ❌ Depends      | ❌ No               |
| Returns                | Values array     | First settled  | Status + result    |
| Use when               | All must succeed | Fastest result | Need all results   |

---

## ⚠️ Important Interview Notes

* `Promise.all` = **fail fast**
* `Promise.race` = **first settle wins**
* `Promise.allSettled` = **never rejects**
* Order of result = **same as input order**

---

## 🧠 One-Line Summary

> Promise.all sabka wait karta hai aur ek failure pe reject ho jata hai,
> Promise.race jo pehle complete ho uska result deta hai,
> aur Promise.allSettled sabka final status return karta hai.

---

## ✅ Interview Answer (Short & Perfect)

> Promise.all saare promises ke resolve hone ka wait karta hai aur ek reject par fail ho jata hai.
> Promise.race sabse pehle settle hone wale promise ka result deta hai.
> Promise.allSettled sab promises ke settle hone ke baad unka status aur result return karta hai.

