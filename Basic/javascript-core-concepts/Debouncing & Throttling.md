### 🔥 **Debouncing & Throttling (Real Use Case + Code + Interview Lines)**

---

## 🟢 **1️⃣ Debouncing kya hota hai?**

**Debouncing** me function **tab execute hota hai jab user kuch time ke liye ruk jata hai**.

👉 Matlab: last action ke baad hi function chale

---

### ✅ **Real Use Case (SEARCH BOX)**

User search box me fast-fast type kar raha hai
➡️ Har keypress pe API call nahi karni
➡️ User ruk jaaye 300ms → tab API call

---

### 🧠 **Debouncing Example**

```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Usage
const searchApiCall = (query) => {
  console.log("API call for:", query);
};

const debouncedSearch = debounce(searchApiCall, 300);

// input event
debouncedSearch("react");
```

---

### 🎯 **Interview Line**

> **“Debouncing me function tab call hota hai jab user defined delay tak event trigger karna band kar deta hai. Search input ke liye best use hota hai.”**

---

---

## 🟡 **2️⃣ Throttling kya hota hai?**

**Throttling** me function **fixed interval me hi execute hota hai**, chahe event kitni baar bhi trigger ho.

👉 Matlab: limit laga dete hain

---

### ✅ **Real Use Case (SCROLL / RESIZE)**

User scroll kar raha hai
➡️ Scroll event 1000+ times fire hota hai
➡️ Hum chahte hain function **har 500ms me ek baar** chale

---

### 🧠 **Throttling Example**

```js
function throttle(fn, limit) {
  let flag = true;
  return function (...args) {
    if (flag) {
      fn.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}

// Usage
const onScroll = () => {
  console.log("Scroll event handled");
};

window.addEventListener("scroll", throttle(onScroll, 500));
```

---

### 🎯 **Interview Line**

> **“Throttling me function ek fixed time interval me hi execute hota hai, jaise scroll aur resize events handle karne ke liye.”**

---

## 🔥 **Debounce vs Throttle (Quick Table)**

| Feature       | Debounce           | Throttle        |
| ------------- | ------------------ | --------------- |
| Kab call hota | User rukne ke baad | Fixed interval  |
| Best for      | Search, input      | Scroll, resize  |
| API calls     | Kam hoti hain      | Controlled      |
| Example       | Auto search        | Infinite scroll |

---

## 🧠 **One-Line Difference (RAT LO)**

> **“Debounce last event ke baad function chalata hai, jabki throttle fixed interval me function chalata hai.”**

---

## ⭐ **React Use Case**

* Debounce → Search input (`useEffect + setTimeout`)
* Throttle → Scroll event listener

---

Agar chaho to:

* **React hooks ke sath debounce**
* **Output-based tricky questions**
* **Live interview Q&A**

karwa deta hoon.
Bas bolo 👍
