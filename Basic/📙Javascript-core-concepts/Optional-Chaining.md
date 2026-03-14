**Optional Chaining (`?.`)** is a JavaScript feature that lets you **safely access nested properties, methods, or array elements** without throwing an error if something is `null` or `undefined`.

Instead of your code crashing, it simply returns **`undefined`**.

---

## ❌ Without Optional Chaining

```js
let user = {};
console.log(user.profile.name); 
// ❌ TypeError: Cannot read properties of undefined
```

Because `profile` does not exist.

---

## ✅ With Optional Chaining

```js
let user = {};
console.log(user.profile?.name);
// ✅ undefined (no error)
```

If `profile` is `undefined` or `null`, JavaScript stops and returns `undefined`.

---

## 📌 Where You Can Use `?.`

### 1️⃣ Accessing Object Properties

```js
let user = { profile: { name: "Krupa" } };

console.log(user.profile?.name);   // "Krupa"
console.log(user.address?.city);   // undefined
```

---

### 2️⃣ Calling Methods Safely

```js
let user = {
  greet() {
    return "Hello!";
  }
};

console.log(user.greet?.());   // "Hello!"
console.log(user.sayHi?.());   // undefined (no error)
```

---

### 3️⃣ Accessing Array Elements

```js
let users = [{ name: "A" }, { name: "B" }];

console.log(users?.[0]?.name);   // "A"
console.log(users?.[5]?.name);   // undefined
```

---

## 🧠 Why Use Optional Chaining?

✔ Prevents **runtime errors**
✔ Makes code **cleaner & shorter**
✔ Perfect for **API responses, configs, and React props**

---

## ⚠️ Important Rules

### 🔸 Works only for `null` or `undefined`

```js
let obj = { value: 0 };
console.log(obj.value?.toString()); // "0" (because value exists)
```

### 🔸 You **cannot assign** using optional chaining

```js
user?.name = "Krupa";   // ❌ Invalid
```

### 🔸 Stops evaluation early (Short-circuit)

```js
let user = null;
user?.profile?.name;   // stops at user → returns undefined
```

---

## 🔁 Equivalent Old Way

```js
let name = user && user.profile && user.profile.name;
```

Cleaner with optional chaining:

```js
let name = user?.profile?.name;
```

---

## ⚛️ React Example

```jsx
<h1>{user?.profile?.name}</h1>
```

Prevents app crash when `user` data is still loading.

---

## 🧩 Optional Chaining in TypeScript

```ts
type User = {
  profile?: {
    name?: string;
  };
};

const user: User = {};
console.log(user.profile?.name); // undefined
```

``` javascript
let users = [{ name: "A" }, { name: "B" }];

let a = users?.[0]?.name;
// let b = users?.[5].name; // ❌ TypeError: Cannot read properties of undefined (reading 'name')
let b = users?.[5]?.name; // ✅ if i not use optional chaining then it will throw error and code will be crash
console.log("hello")
console.log(a) // A
console.log(b) // undefined
```

