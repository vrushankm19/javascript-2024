# 📌 JavaScript call(), apply(), bind() – Interview Notes

## 🔹 Introduction

JavaScript में `call`, `apply`, और `bind` का use  
**function के `this` context को control करने** के लिए किया जाता है।

👉 ये तीनों methods **Function prototype** का part हैं।

---

## 🧠 Simple Rule (Yaad rakhne ke liye)

> **call / apply / bind → function ko kisi aur object ke `this` ke sath chalana**

---

## 🔹 Example Function

```js
function greet(city, country) {
  console.log(
    "Hello " + this.name + " from " + city + ", " + country
  );
}
````

---

## 🔹 Example Object

```js
let person = {
  name: "Rahul"
};
```

---

## 1️⃣ call()

### ✅ Definition

`call()` function ko **immediately execute** karta hai
aur arguments **comma separated** pass hote hain।

### ✅ Syntax

```js
function.call(thisArg, arg1, arg2, ...)
```

### ✅ Example

```js
greet.call(person, "Delhi", "India");
```

### ✔️ Output

```
Hello Rahul from Delhi, India
```

---

## 2️⃣ apply()

### ✅ Definition

`apply()` bhi function ko **immediately execute** karta hai
lekin arguments **array ke form me** pass hote hain।

### ✅ Syntax

```js
function.apply(thisArg, [arg1, arg2, ...])
```

### ✅ Example

```js
greet.apply(person, ["Mumbai", "India"]);
```

### ✔️ Output

```
Hello Rahul from Mumbai, India
```

---

## 3️⃣ bind()

### ✅ Definition

`bind()` function ko **execute nahi karta**
ye ek **new function return karta hai** jisme `this` permanently bind hota hai।

### ✅ Syntax

```js
function.bind(thisArg, arg1, arg2, ...)
```

### ✅ Example

```js
let newGreet = greet.bind(person, "Pune", "India");
newGreet();
```

### ✔️ Output

```
Hello Rahul from Pune, India
```

---

## 🔥 call vs apply vs bind (Difference Table)

| Method | Arguments       | Execute     |
| ------ | --------------- | ----------- |
| call   | Comma separated | Immediately |
| apply  | Array           | Immediately |
| bind   | Comma / Array   | Later       |

---

## 🔹 Real Interview Use Case (Math.max)

```js
let arr = [5, 8, 2, 10];

let max = Math.max.apply(null, arr);
console.log(max); // 10
```

---

## 🔹 Common Interview Question

```js
let obj = {
  name: "Amit",
  greet: function () {
    console.log(this.name);
  }
};

let fn = obj.greet;
fn(); // ❌ undefined
```

### ❓ Why?

* `this` lost ho gaya because function detached ho gaya

### ✅ Fix using bind

```js
let fixed = obj.greet.bind(obj);
fixed(); // Amit
```

---

## ⚠️ Important Notes (Interview)

* `call` / `apply` → **one-time use**
* `bind` → **reusable function**
* Arrow functions me `bind` ka effect nahi hota
* `apply` zyada useful hota hai jab arguments array me ho

---

## 🧠 One-Line Summary

* **call** → abhi call (comma arguments)
* **apply** → abhi call (array arguments)
* **bind** → baad me call

---

## ✅ Interview Answer (Short & Perfect)

> call, apply aur bind ka use function ke `this` context ko control karne ke liye hota hai.
> call aur apply function ko turant execute karte hain,
> jabki bind ek new function return karta hai jo baad me execute hota hai.

``` javascript
// Example:
function greet(city, country) {
  console.log(
    "Hello " + this.name + " from " + city + ", " + country
  );
}
let person = {
  name: "Rahul"
};

greet.call(person, "Delhi", "India"); // call 
greet.apply(person, ["Delhi", "India"]); // apply

let a = greet.bind(person, "Delhi", "India"); // bind
a()
```


