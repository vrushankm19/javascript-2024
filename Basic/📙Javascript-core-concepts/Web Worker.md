# JavaScript Web Workers – Interview Preparation Guide

## Web Worker kya hota hai?

Web Worker JavaScript ka ek feature hai jo **background thread** me code run karne deta hai. Normally JavaScript **single-threaded** hota hai aur sab kuch main thread par chalta hai, jis se heavy computation par UI freeze ho sakti hai. Web Workers is problem ko solve karte hain.

👉 Simple words me: **Heavy kaam alag thread me bhej do, UI smooth rahegi.**

---

## Web Worker kyun use karte hain?

* Heavy calculations (loops, data processing)
* Large file parsing
* Background tasks
* UI ko block hone se bachane ke liye

**Without Worker:** UI freeze 😵‍💫
**With Worker:** UI smooth 😎

---

## Web Worker kaise kaam karta hai?

Main thread aur worker thread **direct memory share nahi karte**.

Communication hota hai:

* `postMessage()`
* `onmessage`

Data **copy** hota hai (structured clone algorithm).

---

## Basic Example

### main.js

```javascript
const worker = new Worker("worker.js");

worker.postMessage(10);

worker.onmessage = function (e) {
  console.log("Result from worker:", e.data);
};
```

### worker.js

```javascript
onmessage = function (e) {
  let num = e.data;
  let result = num * num;
  postMessage(result);
};
```

---

## Types of Web Workers

### 1. Dedicated Worker

* Sirf ek script use karti hai
* Sabse common type

### 2. Shared Worker

* Multiple tabs/windows share kar sakte hain

### 3. Service Worker

* Background sync
* Push notifications
* Offline support (PWA)

⚠️ Interview me aksar **Dedicated vs Service Worker** pucha jata hai.

---

## Web Worker ki Limitations

* DOM access nahi hota
* `window`, `document` use nahi kar sakte
* File access limited
* Extra memory use hoti hai

---

## Web Worker vs Main Thread

| Feature    | Main Thread | Web Worker |
| ---------- | ----------- | ---------- |
| UI Access  | Yes         | No         |
| Heavy Task | ❌           | ✅          |
| Blocking   | Yes         | No         |

---

## Interview Questions (Important)

### Q1. Web Worker kya hota hai?

➡️ JavaScript ka feature jo background thread me code run karta hai.

### Q2. Web Worker kyun use karte hain?

➡️ UI blocking avoid karne ke liye.

### Q3. Kya Web Worker DOM access kar sakta hai?

➡️ ❌ Nahi

### Q4. Web Worker aur Service Worker me difference?

➡️ Web Worker calculation ke liye, Service Worker network & caching ke liye.

### Q5. Communication kaise hota hai?

➡️ `postMessage()` aur `onmessage`

---

## Real-Life Use Cases

* Image processing
* Data analytics
* Encryption/decryption
* Video/audio processing

---

## Short One-Liner (Interview Tip)

> "Web Workers JavaScript me background threads hote hain jo heavy computation ko main thread se alag run karte hain."

---

## Bonus Tip ⭐

Agar interviewer bole:

> *JavaScript single-threaded hai, phir Web Worker kaise?*

Answer:
➡️ **JavaScript single-threaded hoti hai, lekin browser multi-threaded environment provide karta hai.**

---

Agar chaho to main:

* MCQs
* Advanced interview Q&A
* Real project example

bhi add kar sakta hoon 🙂


Samajhne ke liye seedha-sa aur **interview-friendly** comparison de raha hoon 👇
(**Web Worker vs Service Worker**)

---

## 🔹 Web Worker vs Service Worker

| Point                 | **Web Worker**               | **Service Worker**                        |
| --------------------- | ---------------------------- | ----------------------------------------- |
| Purpose               | Heavy computation            | Network, caching, offline                 |
| Runs where?           | Background thread            | Browser ke background me                  |
| UI / DOM access       | ❌ Nahi                       | ❌ Nahi                                    |
| Page ke saath life    | Page band → worker band      | Page band hone ke baad bhi chal sakta hai |
| Use case              | Calculation, data processing | PWA, offline app, push notification       |
| Internet control      | ❌ Nahi                       | ✅ Yes (fetch intercept)                   |
| Multiple tabs         | ❌ (Dedicated)                | ✅ Yes                                     |
| Interview me kaha use | Performance                  | PWA / Offline support                     |

---

## 🧠 Easy yaad rakhne ka tareeqa

### ✅ Web Worker

> **“Computation worker”**

* Heavy loops
* Image / video processing
* Large data handling
* UI smooth rakhna

👉 Example:
`10 lakh numbers ka calculation bina UI freeze`

---

### ✅ Service Worker

> **“Network worker”**

* Offline website
* Cache management
* Push notifications
* Background sync

👉 Example:
`Internet band ho, phir bhi app chale`

---

## 🔥 Interview One-Liners

### ❓ Web Worker kya karta hai?

👉 Background me **heavy computation**.

### ❓ Service Worker kya karta hai?

👉 **Network requests handle**, cache karta hai, offline support deta hai.

### ❓ Kya Service Worker bina page ke chal sakta hai?

👉 ✅ Haan

### ❓ Kya Web Worker page band hone ke baad chalta hai?

👉 ❌ Nahi

---

## ⭐ Most Common Interview Trap Question

**“Dono background me chalte hain, phir difference kya?”**

✅ Best Answer:

> *Web Worker performance ke liye hota hai,
> Service Worker network aur offline experience ke liye.*

