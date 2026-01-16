# 📌 JavaScript Object Destructuring – Hinglish Interview Notes

---

## 🔹 Object Destructuring kya hota hai?

Object Destructuring ka matlab hota hai  
**object se values nikaal kar variables me assign karna**  
wo bhi **short & clean syntax** ke sath.

👉 Ye ES6 (ES2015) feature hai.

---

## 🔹 Without Destructuring (Old Way)

```js
let user = {
  name: "Rahul",
  age: 25,
  city: "Delhi"
};

let name = user.name;
let age = user.age;
let city = user.city;
````

❌ Zyada lines
❌ Repetitive code

---

## 🔹 With Object Destructuring (Modern Way)

```js
let user = {
  name: "Rahul",
  age: 25,
  city: "Delhi"
};

let { name, age, city } = user;

console.log(name); // Rahul
console.log(age);  // 25
console.log(city); // Delhi
```

✔️ Clean
✔️ Readable
✔️ Interview friendly

---

## 🔹 Order matter karta hai kya?

❌ **Nahi**
Object destructuring me **key name important hota hai**, order nahi.

```js
let { city, name } = user;
```

---

## 🔹 Rename variables (Very Important)

```js
let user = {
  name: "Rahul",
  age: 25
};

let { name: userName, age: userAge } = user;

console.log(userName); // Rahul
console.log(userAge);  // 25
```

👉 Jab same variable name already exist ho

---

## 🔹 Default Values

```js
let user = {
  name: "Rahul"
};

let { name, age = 18 } = user;

console.log(age); // 18
```

👉 Agar key missing ho

---

## 🔹 Nested Object Destructuring

```js
let user = {
  name: "Rahul",
  address: {
    city: "Delhi",
    pincode: 110001
  }
};

let {
  address: { city, pincode }
} = user;

console.log(city);    // Delhi
console.log(pincode); // 110001
```

⚠️ Common interview topic

---

## 🔹 Function Parameter Destructuring

```js
function greet({ name, city }) {
  console.log(`Hello ${name} from ${city}`);
}

greet({ name: "Rahul", city: "Delhi" });
```

✔️ Cleaner function signature
✔️ Used a lot in React

---

## 🔹 Destructuring with Rest Operator

```js
let user = {
  name: "Rahul",
  age: 25,
  city: "Delhi"
};

let { name, ...rest } = user;

console.log(name); // Rahul
console.log(rest); // { age: 25, city: "Delhi" }
```

---

## 🔹 Destructuring with Existing Variable

```js
let a, b;

({ a, b } = { a: 10, b: 20 });
```

⚠️ Parentheses zaroori hain

---

## 🔹 Common Mistake (Interview Trap)

```js
let { x } = undefined; // ❌ Error
```

### ✅ Safe Way

```js
let obj = undefined;
let { x } = obj || {};
```

---

## 🔥 Object Destructuring – Benefits

* Less code
* Better readability
* Avoid repetitive `obj.key`
* Clean function parameters

---

## 🧠 One-Line Summary

> Object destructuring se hum object ki properties ko direct variables me extract kar sakte hain using clean syntax.

---

## ✅ Interview Answer (Short & Perfect)

> Object destructuring JavaScript ka feature hai jisse hum object ki properties ko easily variables me extract kar sakte hain. Isme key names match hone chahiye aur ye code ko concise aur readable banata hai.


