### 🔥 **Event Loop & Callbacks – Interview Ready Explanation**

---

## 🧠 **Callback kya hota hai?**

**Callback** ek function hota hai jo **dusre function ko argument ke roop me pass** kiya jata hai
aur **baad me execute hota hai** (usually async kaam ke baad).

### ✅ Example:

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data mil gaya");
  }, 1000);
}

fetchData((result) => {
  console.log(result);
});
```

---

## ❓ **Event Loop kya hota hai?**

**Event Loop** JavaScript ka mechanism hai jo **Call Stack, Callback Queue aur Microtask Queue ko manage karta hai**,
taaki **asynchronous code non-blocking tarike se execute ho sake**.

---

## 🧩 **JavaScript Runtime ke parts**

1. **Call Stack** – synchronous code execute hota hai
2. **Web APIs** – async tasks (setTimeout, fetch, DOM events)
3. **Callback Queue (Macrotask Queue)** – setTimeout, setInterval
4. **Microtask Queue** – Promise, async/await
5. **Event Loop** – sabko coordinate karta hai

---

## 🔄 **Flow kaise kaam karta hai?**

1. Synchronous code → **Call Stack**
2. Async code → **Web APIs**
3. Complete hone ke baad:

   * Promise → **Microtask Queue**
   * setTimeout → **Callback Queue**
4. **Event Loop**:

   * Pehle **Microtask Queue**
   * Phir **Callback Queue**
   * Tabhi jab **Call Stack empty ho**

---

## ⚠️ **IMPORTANT RULE (INTERVIEW FAVORITE)**

👉 **Microtask Queue hamesha pehle execute hoti hai**
👉 Phir Callback (Macrotask) Queue

---

## 🔥 **Tricky Output Question**

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

### ✅ Output:

```
Start
End
Promise
Timeout
```

### 🔍 Reason:

* Sync → Start, End
* Microtask → Promise
* Macrotask → setTimeout

---

## 🎯 **Interview One-Liner**

> **“Event Loop JavaScript ka mechanism hai jo call stack aur task queues ko monitor karke async code ko non-blocking tarike se execute karta hai.”**

---

## 🧠 **Callback Hell kya hota hai?**

Nested callbacks jo code ko unreadable bana dete hain

```js
doA(() => {
  doB(() => {
    doC(() => {
      doD();
    });
  });
});
```

### ✅ Solution:

* Promises
* async / await

---

## ⭐ **Real Use Case**

* API calls
* Button click
* Timers
* DOM events

---

## 🔥 **2 Line Summary (YAAD KAR LO)**

> JavaScript single-threaded hai, lekin Event Loop ki wajah se async code handle kar pata hai.
> Pehle microtasks, phir macrotasks execute hote hain.

---

Agar chaho to:

* **More output-based questions**
* **React ke sath Event Loop**
* **Rapid-fire mock interview**

abhi karwa deta hoon. Bas bolo 💪
