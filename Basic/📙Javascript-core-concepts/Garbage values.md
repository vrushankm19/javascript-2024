# 🗑️ Garbage Values in JavaScript

## 🔹 Garbage Value kya hoti hai?

Jab koi variable ya object:

* kisi variable se reference me nahi hai
* kisi function me accessible nahi hai
* program usko use nahi kar sakta

👉 Tab wo **garbage** ban jata hai.

---

## 🔹 Example 1 (Primitive)

```js
let a = 10;
a = 20;
```

Yaha kya hua?

* Pehle `10` memory me store hua
* Fir `a` ko `20` assign kiya
* Ab `10` ka koi reference nahi hai

👉 `10` ab garbage ban gaya.

---

## 🔹 Example 2 (Object)

```js
let obj = { name: "Rahul" };
obj = null;
```

Yaha:

* Object `{ name: "Rahul" }` create hua
* Fir `obj = null` kar diya
* Ab us object ka koi reference nahi

👉 Wo object garbage ban gaya.

---

# 🧠 Garbage Collector kya karta hai?

JavaScript engine automatically:

* Unused memory detect karta hai
* Garbage values ko remove karta hai
* Memory free karta hai

Is process ko bolte hain:

# ♻️ Garbage Collection

---

## 🔹 JavaScript ka GC Method

JavaScript mostly use karta hai:

### 🔵 Mark and Sweep Algorithm

Steps:

1. Root se reachable variables mark karta hai
2. Jo reachable nahi hain → unko delete kar deta hai

---

## 🔥 Memory Leak kya hota hai?

Jab garbage remove nahi hota kyunki:

* Koi hidden reference bacha hua hai
* Event listeners remove nahi kiye
* Closures unnecessary data hold kar rahe hain

Example:

```js
let arr = [];
setInterval(() => {
  arr.push(new Date());
}, 1000);
```

👉 Memory continuously badhti rahegi
👉 Ye memory leak hai

---

# 📌 Important Points (Interview)

✔ JavaScript me manual memory free nahi karte
✔ GC automatic hota hai
✔ Unreachable objects garbage hote hain
✔ Closures aur global variables se memory leak ho sakta hai

---

# 🎯 One-Line Interview Answer

> Garbage values wo unused objects ya data hote hain jo program me reachable nahi hote aur unko JavaScript ka garbage collector automatically memory se remove kar deta hai.

