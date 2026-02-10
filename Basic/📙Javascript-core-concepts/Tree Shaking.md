# 📌 Tree Shaking in JavaScript – Hinglish Interview Notes

---

## 🔹 Tree Shaking kya hota hai?

**Tree Shaking** ek **optimization technique** hai  
jo final bundle se **unused (dead) code remove** kar deta hai.

👉 Simple words:
> Jo code use nahi ho raha, usse bundle se hataa dena = Tree Shaking 🌳✂️

---

## 🔹 Tree Shaking kyun important hai?

- Bundle size kam hota hai
- App fast load hoti hai
- Better performance
- Production build optimized hoti hai

---

## 🔹 Tree Shaking ka naam kyun pada?

Code ko ek **tree (dependency graph)** ki tarah socho  
👉 Jo branches use nahi ho rahi → hila kar gira di 😄

---

## 🔹 Tree Shaking kaise kaam karta hai?

Tree Shaking **ES6 modules** (`import / export`) par depend karta hai.

👉 Static analysis ke through Webpack/Vite/Rollup decide karta hai  
kaunsa code use ho raha hai aur kaunsa nahi.

---

## 🔹 Example (Without Tree Shaking)

```js
// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
````

```js
// app.js
import { add } from "./math";

add(2, 3);
```

❌ Dono functions bundle me aa jayenge (ES5 / CommonJS me)

---

## 🔹 With Tree Shaking (ES6 Modules)

👉 Production build me:

```js
subtract() // ❌ removed
add()      // ✅ kept
```

---

## 🔹 Tree Shaking ke liye requirements (Interview Important)

### ✅ 1️⃣ ES6 Modules use karo

```js
import { add } from "./math";
```

❌ `require()` avoid karo

---

### ✅ 2️⃣ Production Mode

```js
mode: "production"
```

👉 Webpack automatically dead code remove karega

---

### ✅ 3️⃣ Side Effects define karo

```json
// package.json
{
  "sideEffects": false
}
```

👉 Webpack ko pata chalega code safe hai remove karna

---

## 🔹 Side Effects kya hota hai?

Agar file me:

* Global variable modify ho
* CSS import ho
* Polyfills ho

👉 Usse remove nahi kar sakte

```js
import "./style.css"; // side effect
```

---

## 🔹 Tree Shaking in React

* React production build automatically tree shaking karta hai
* `import { Button } from "library"` better than full import

❌ Bad:

```js
import * as utils from "./utils";
```

✅ Good:

```js
import { calculate } from "./utils";
```

---

## 🔹 Tree Shaking vs Minification

| Feature       | Tree Shaking | Minification |
| ------------- | ------------ | ------------ |
| Remove code   | Unused code  | ❌            |
| Compress code | ❌            | ✅            |
| When          | Build time   | Build time   |

👉 Dono **saath me** use hote hain

---

## 🔥 Common Interview Questions

### ❓ Tree Shaking CommonJS me kyun nahi hota?

👉 Kyunki `require()` dynamic hota hai

---

### ❓ Kya Tree Shaking runtime par hota hai?

❌ Nahi
👉 Build time par hota hai

---

## 🧠 One-Line Summary

> Tree Shaking ek build-time optimization hai jo ES6 modules ke through unused code ko final bundle se remove karta hai.

---

## ✅ Interview Answer (Short & Perfect)

> Tree Shaking ek optimization technique hai jo production build ke time unused code ko bundle se remove karti hai. Ye ES6 modules par based hoti hai aur bundle size aur performance improve karti hai.

---

## 🔥 Interview Tip

👉 ES6 modules mention karo
👉 Production build bolna
👉 SideEffects explain karna

