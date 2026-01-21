# 📌 JavaScript ES6 (ECMAScript 2015) – Kya New Aaya? (Hinglish)

---

## 🔹 ES6 kya hota hai?

ES6 ka full form **ECMAScript 2015** hai.  
Ye JavaScript ka **major update** tha jo language ko:
- Clean
- Powerful
- Developer-friendly

banata hai.

👉 ES6 ke baad JavaScript modern ban gayi.

---

## 🔥 ES6 me kya-kya new aaya? (Most Important)

---

## 1️⃣ `let` & `const`

### ❌ ES5 (var problem)
```js
var x = 10;
x = 20; // allowed
````

### ✅ ES6

```js
let x = 10;
x = 20; // allowed

const y = 10;
y = 20; // ❌ error
```

👉 `let` = block scoped
👉 `const` = value reassign nahi hoti

---

## 2️⃣ Arrow Functions (`=>`)

```js
// ES5
function add(a, b) {
  return a + b;
}

// ES6
const add = (a, b) => a + b;
```

✔️ Short syntax
✔️ `this` keyword change nahi hota

---

## 3️⃣ Template Literals

```js
let name = "Rahul";
let age = 25;

console.log(`My name is ${name} and age is ${age}`);
```

✔️ String + variable easy
✔️ Multi-line strings

---

## 4️⃣ Default Parameters

```js
function greet(name = "Guest") {
  console.log(name);
}

greet(); // Guest
```

---

## 5️⃣ Destructuring (Object & Array)

```js
let user = { name: "Rahul", age: 25 };

let { name, age } = user;
```

✔️ Clean code
✔️ Less repetition

---

## 6️⃣ Spread Operator (`...`)

```js
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
```

✔️ Copy array/object
✔️ Merge values

---

## 7️⃣ Rest Parameters

```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
```

---

## 8️⃣ Classes

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}
```

👉 OOP style programming

---

## 9️⃣ Modules (`import / export`)

```js
// file1.js
export const x = 10;

// file2.js
import { x } from "./file1.js";
```

---

## 🔟 Promises

```js
let promise = new Promise((resolve, reject) => {
  resolve("Success");
});
```

👉 Async code clean ho gaya

---

## 1️⃣1️⃣ `for...of` Loop

```js
let arr = [1, 2, 3];

for (let val of arr) {
  console.log(val);
}
```

---

## 1️⃣2️⃣ New Data Structures

```js
let set = new Set([1, 2, 2, 3]);
let map = new Map();
```

✔️ `Set` = unique values
✔️ `Map` = key-value pairs

---

## 🔥 ES6 Summary Table

| Feature   | ES5       | ES6         |
| --------- | --------- | ----------- |
| Scope     | var       | let / const |
| Functions | long      | arrow       |
| Strings   | concat    | template    |
| Async     | callback  | promise     |
| OOP       | prototype | class       |

---

## 🧠 One-Line Summary

> ES6 JavaScript ka major update hai jo let/const, arrow functions, promises, classes jaise modern features introduce karta hai.

---

## ✅ Interview Answer (Short & Perfect)

> ES6 JavaScript ka ECMAScript 2015 version hai jisme let, const, arrow functions, template literals, destructuring, promises, classes aur modules jaise modern features introduce hue jisse code clean aur maintainable ho gaya.

```

