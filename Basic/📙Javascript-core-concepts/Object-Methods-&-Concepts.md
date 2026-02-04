👉 **File name suggestion:**
`Object-Methods-&-Concepts.md`

Tum isko direct copy–paste karke apni repo me add kar sakte ho.

---

# 🧠 JavaScript Objects – Complete Interview Notes (5+ Years)

> **Is file ka goal:**
> Interview se pehle ek hi file kholke **Object se related sab kuch revise ho jaye**
> (methods, syntax, shallow/deep, immutability, edge cases)

---

## 🔹 Object kya hota hai? (ONE LINE)

> **Object key–value pair ka collection hota hai jisme data aur behavior store hota hai.**

```js
const user = {
  name: "Rahul",
  age: 28
};
```

---

## 🔹 Object banane ke tareeke

```js
// Object literal
const obj = { a: 1 };

// Constructor
const obj2 = new Object();

// Object.create
const obj3 = Object.create(null);
```

👉 `Object.create(null)` ka koi prototype nahi hota (advanced)

---

# 🔥 Object.assign() (VERY IMPORTANT)

## ✅ Object.assign kya karta hai?

> **Source objects ki properties ko target object me copy karta hai**

```js
const target = { a: 1 };
const source = { b: 2 };

const result = Object.assign(target, source);
console.log(result); // { a:1, b:2 }
```

---

### ⚠️ Interview Point

* ❌ Deep copy nahi karta
* ✔️ Shallow copy karta hai

```js
const obj1 = { a: { x: 1 } };
const obj2 = Object.assign({}, obj1);

obj2.a.x = 5;
console.log(obj1.a.x); // 5 ❌
```

---

# 🔹 Object Spread (`...`)

```js
const obj2 = { ...obj1 };
```

👉 Spread bhi **shallow copy** hi karta hai
👉 Syntax clean hai, interview me prefer kiya jata hai

---

# 🔹 Object.keys()

> **Object ki saari keys ka array deta hai**

```js
Object.keys({ a:1, b:2 });
// ["a", "b"]
```

✔️ Returns → Array
✔️ Loop lagane ke liye useful

---

# 🔹 Object.values()

> **Object ki saari values ka array deta hai**

```js
Object.values({ a:1, b:2 });
// [1, 2]
```

---

# 🔹 Object.entries() (🔥 Interview Favorite)

> **Key–value pair ko array of arrays me convert karta hai**

```js
Object.entries({ a:1, b:2 });
// [["a",1], ["b",2]]
```

### Use case:

```js
for (let [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
```

---

# 🔹 Object.fromEntries()

> **entries ko wapas object me convert karta hai**

```js
const entries = [["a",1], ["b",2]];
Object.fromEntries(entries);
// { a:1, b:2 }
```

---

# 🔹 Object.hasOwn()

> **Check karta hai property object ki khud ki hai ya nahi**

```js
Object.hasOwn({ a:1 }, "a"); // true
```

✔️ `hasOwnProperty` ka modern replacement

---

# 🔹 Object.freeze()

> **Object ko completely immutable bana deta hai**

```js
const obj = { a: 1 };
Object.freeze(obj);

obj.a = 5;
console.log(obj.a); // 1
```

❌ Add
❌ Update
❌ Delete

---

# 🔹 Object.seal()

> **Existing properties update ho sakti hain, add/delete nahi**

```js
const obj = { a: 1 };
Object.seal(obj);

obj.a = 10; // ✅
obj.b = 2;  // ❌
```

---

# 🔹 freeze vs seal (INTERVIEW TABLE)

| Feature | freeze | seal |
| ------- | ------ | ---- |
| Add     | ❌      | ❌    |
| Delete  | ❌      | ❌    |
| Update  | ❌      | ✅    |

---

# 🔹 Object.defineProperty()

> **Property pe full control deta hai**

```js
const user = {};

Object.defineProperty(user, "name", {
  value: "Rahul",
  writable: false,
  enumerable: true,
  configurable: false
});
```

### Flags:

* `writable`
* `enumerable`
* `configurable`

---

# 🔹 Object.getOwnPropertyDescriptor()

```js
Object.getOwnPropertyDescriptor(user, "name");
```

👉 Property ke flags inspect karne ke liye

---

# 🔹 Object.create()

> **Prototype ke saath object create karta hai**

```js
const parent = { greet() { console.log("Hi"); } };
const child = Object.create(parent);

child.greet(); // Hi
```

---

# 🔹 Checking Property Exists

```js
"a" in obj;              // true
obj.hasOwnProperty("a") // true
Object.hasOwn(obj,"a")  // true (best)
```

---

# 🔹 Looping Objects

```js
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]);
  }
}
```

⚠️ `for...in` prototype properties bhi la sakta hai

---

# 🔹 Object Comparison (Tricky)

```js
{} === {} // false
```

👉 Objects **reference se compare hote hain**

---

# 🔹 Object to JSON

```js
JSON.stringify(obj);
JSON.parse(json);
```

⚠️ Functions & undefined ignore ho jate hain

---

# 🔹 Common Interview Traps

```js
const a = { x:1 };
const b = a;

b.x = 5;
console.log(a.x); // 5
```

👉 Reference copy

---

# 🔥 Real-World Use Cases

✔️ API response handling
✔️ State management
✔️ Config objects
✔️ Dynamic keys
✔️ Immutability (React/Redux)

---

# 🧠 One-Line Revision

> JavaScript objects reference-based hote hain
> aur Object methods unko safely manipulate, copy aur control karne ke liye use hote hain.

---

# 🎯 5+ Years Interview Closing Line

> “Main Object.assign aur spread shallow copy ke liye, freeze/seal immutability ke liye aur entries/fromEntries data transformation ke liye use karta hoon.”

