# 🚀 Multiple / Parallel API Calls in React (Interview Notes)

Interview me aksar **“parallel API calls”** ya **“multiple API calls at once”** ke naam se question pucha jata hai.

---

## ✅ 1️⃣ Promise.all() (MOST IMPORTANT – Interview Favorite)

Agar aap chahte ho ki **multiple APIs ek saath call ho** aur **sabka response aane ke baad hi data use ho**, to `Promise.all()` best option hai.

### 🔹 Example (React + Fetch)

```js
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, postsRes] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/users"),
          fetch("https://jsonplaceholder.typicode.com/posts")
        ]);

        const usersData = await usersRes.json();
        const postsData = await postsRes.json();

        setUsers(usersData);
        setPosts(postsData);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Users: {users.length}</h2>
      <h2>Posts: {posts.length}</h2>
    </>
  );
}

export default App;
````

### 🔍 Interview Explanation

* `Promise.all()` **multiple promises ko parallel me execute karta hai**
* Jab tak **sab APIs ka response nahi aata**, code aage execute nahi hota
* **Agar ek bhi API fail ho jaye → pura Promise.all reject ho jata hai**

---

## ✅ 2️⃣ Sequential API Calls (Ek ke baad ek)

Jab **dusri API ko pehli API ke data par depend karna ho**, tab sequential calls use karte hain.

### 🔹 Example

```js
useEffect(() => {
  const fetchData = async () => {
    try {
      const res1 = await fetch("https://api.example.com/user");
      const user = await res1.json();

      const res2 = await fetch(
        `https://api.example.com/posts/${user.id}`
      );
      const posts = await res2.json();

      console.log(user, posts);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);
```

### 🔍 Use Case

👉 Jab **2nd API ko 1st API ke result ki zarurat ho**

---

## ✅ 3️⃣ Axios ke Saath Multiple API Calls

Agar project me **axios** use hota hai, to bhi same approach hoti hai.

### 🔹 Example (Axios + Promise.all)

```js
import axios from "axios";

useEffect(() => {
  const fetchData = async () => {
    try {
      const [res1, res2] = await Promise.all([
        axios.get("/api/users"),
        axios.get("/api/orders")
      ]);

      console.log(res1.data, res2.data);
    } catch (err) {
      console.log(err);
    }
  };

  fetchData();
}, []);
```

---

## ❓ Common Interview Questions

### 🔹 Q1: Promise.all vs Multiple `await`?

**Answer:**

* `Promise.all()` → **parallel execution (fast)**
* Multiple `await` → **sequential execution (slow)**

---

### 🔹 Q2: Agar ek API fail ho jaye to kya hoga?

**Promise.all():**

* Ek bhi API fail → **poora Promise reject**

### ✅ Solution: `Promise.allSettled()`

```js
const results = await Promise.allSettled([
  fetch("/api/one"),
  fetch("/api/two")
]);

console.log(results);
```

* Ye **har API ka result deta hai**
* Fail ya success – dono ka status milta hai

---

### 🔹 Q3: React me multiple API calls kahan karte ho?

👉 **`useEffect()` ke andar**

---

## 🧠 Short & Perfect Interview Answer

> “React me ek hi time par multiple API call karne ke liye main `Promise.all()` use karti hoon.
> Isse sabhi APIs parallel me call hoti hain aur jab sabka response aa jata hai tab hi data process hota hai.
> Agar APIs ek dusre par depend karti hain to main sequential `await` use karti hoon.”

---

## ⭐ Pro Tip (Extra Edge in Interview)

* **Parallel APIs** → `Promise.all`
* **Dependent APIs** → Sequential `await`
* **Partial success chahiye** → `Promise.allSettled`

---

✅ **Ready for Interview Revision**
📌 Save this file & revise before interviews

---
