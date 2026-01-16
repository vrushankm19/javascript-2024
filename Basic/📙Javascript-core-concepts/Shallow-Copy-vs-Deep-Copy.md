# 📌 Shallow Copy vs Deep Copy (Object / Array) – Hinglish Interview Notes

## 🔹 Copy ka matlab kya hota hai?

JavaScript me jab hum object ya array ko copy karte hain,  
toh **do tarah ki copy** hoti hai:

1️⃣ Shallow Copy  
2️⃣ Deep Copy  

👉 Difference **reference** aur **memory sharing** ka hota hai.

---

## 🔹 Shallow Copy kya hoti hai?

> **Shallow copy me sirf top-level copy hoti hai**  
> nested object / array ka **same reference share hota hai**

### ⚠️ Problem:
Nested data change karoge → original bhi change ho jayega

---

## 🔹 Shallow Copy Examples

### ✅ Object Shallow Copy

```js
let obj1 = {
  name: "Rahul",
  address: {
    city: "Delhi"
  }
};

let obj2 = { ...obj1 }; // shallow copy

obj2.name = "Amit";
obj2.address.city = "Mumbai";

console.log(obj1.name);           // Rahul ✅
console.log(obj1.address.city);   // Mumbai ❌
````

👉 `address` same reference share kar raha hai

---

### ✅ Array Shallow Copy

```js
let arr1 = [1, 2, [3, 4]];

let arr2 = [...arr1];

arr2[0] = 100;
arr2[2][0] = 300;

console.log(arr1); // [1, 2, [300, 4]]
```

---

## 🔹 Shallow Copy banane ke common tareeke

| Method            | Works for      |
| ----------------- | -------------- |
| `Object.assign()` | Object         |
| Spread (`...`)    | Object / Array |
| `Array.slice()`   | Array          |
| `Array.concat()`  | Array          |

---

## 🔹 Deep Copy kya hoti hai?

> **Deep copy me poora object / array nayi memory me copy hota hai**
> nested data bhi **alag reference** rakhta hai

👉 Original aur copied object completely independent hote hain

---

## 🔹 Deep Copy Examples

### ✅ Method 1: `JSON.parse(JSON.stringify())`

```js
let obj1 = {
  name: "Rahul",
  address: {
    city: "Delhi"
  }
};

let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.address.city = "Mumbai";

console.log(obj1.address.city); // Delhi ✅
```

### ⚠️ Limitation:

* Functions ❌
* `undefined` ❌
* `Date`, `Map`, `Set` ❌

---

### ✅ Method 2: `structuredClone()` (Modern & Best)

```js
let obj2 = structuredClone(obj1);
```

✔️ Handles nested objects
✔️ Safer than JSON method

---

### ✅ Method 3: Recursive Function (Interview Favorite)

```js
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    copy[key] = deepCopy(obj[key]);
  }

  return copy;
}
```

---

## 🔥 Shallow vs Deep Copy (Difference Table)

| Feature         | Shallow Copy     | Deep Copy     |
| --------------- | ---------------- | ------------- |
| Memory          | Partial new      | Fully new     |
| Nested data     | Shared reference | New reference |
| Safe for nested | ❌ No             | ✅ Yes         |
| Performance     | Fast             | Slower        |

---

## 🔹 Interview Trick Question

```js
let a = { x: 1 };
let b = a;

b.x = 5;
console.log(a.x); // ?
```

### ✔️ Output:

```
5
```

👉 Reason: Reference copy, not shallow/deep

---

## ⚠️ Important Interview Notes

* Shallow copy = **top level copy only**
* Deep copy = **complete copy**
* Spread operator **deep copy nahi karta**
* JSON method limited hai
* `structuredClone()` modern best option hai

---

## 🧠 One-Line Summary

> Shallow copy nested data ka reference share karti hai,
> jabki deep copy poore object ko nayi memory me copy karti hai.

---

## ✅ Interview Answer (Short & Perfect)

> Shallow copy me top-level properties copy hoti hain
> lekin nested objects same reference share karte hain.
> Deep copy me poora object nayi memory me copy hota hai
> isliye original aur copied object independent hote hain.
