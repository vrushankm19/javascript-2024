# 📘 JavaScript Promise – Complete Notes (Practice + Interview)

---

## 🔹 Promise kya hota hai?

**Promise** JavaScript ka ek object hai jo **future me milne wale result** ko represent karta hai.

📌 Async kaam jaise:
- API calls
- File read
- setTimeout
- Database query

👉 Simple words me:

> "Abhi kaam chal raha hai, baad me ya to success milega ya error"

---

## 🔹 Promise ke 3 States

1️⃣ **Pending** – kaam chal raha hai  
2️⃣ **Fulfilled** – kaam successfully complete ho gaya  
3️⃣ **Rejected** – kaam fail ho gaya  

```

Pending → Fulfilled (resolve)
Pending → Rejected (reject)

````

---

## 🔹 Promise banane ka syntax

```js
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data mil gaya");
  } else {
    reject("Error aa gaya");
  }
});
````

### 🔍 Samjho:

* `resolve()` → success case
* `reject()` → error case

---

## 🔹 Promise consume (use) karna

```js
myPromise
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

### 🔍 Samjho:

* `.then()` → jab promise resolve ho
* `.catch()` → jab promise reject ho

---

## 🔹 Real-Life Example (API jaisa)

```js
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ id: 1, name: "React" });
  }, 2000);
});

fetchData.then(data => console.log(data));
```

👉 2 second baad data milega

---

## 🔹 Promise Chaining

Ek `then()` ka output dusre `then()` me use karna.

```js
myPromise
  .then(res => {
    console.log(res);
    return "Next step";
  })
  .then(step => {
    console.log(step);
  })
  .catch(err => console.log(err));
```

✔ Multiple async steps ko chain me likh sakte ho
✔ Callback hell se bachata hai

---

## 🔹 `.then()`, `.catch()`, `.finally()`

* ✅ **then()** → success
* ❌ **catch()** → error
* 🔁 **finally()** → hamesha chalega (success / fail)

```js
fetchData()
  .then(data => console.log(data))
  .catch(err => console.log(err))
  .finally(() => console.log("Done"));
```

---

## 🔹 async / await (Modern & Best Way)

👉 Promise handle karne ka **clean aur readable syntax**

```js
const getData = async () => {
  try {
    const res = await myPromise;
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

getData();
```

### 🔍 Fayde:

* Code readable hota hai
* Error handling easy (`try/catch`)
* `.then()` se zyada clean

---

## 🔥 Promise Important Methods (Interview Focus)

---

### 1️⃣ `Promise.all()` – Parallel Execution

* Saare promises **ek saath run**
* Sab success ⇒ result milega
* Ek bhi fail ⇒ **poora reject**

```js
const p1 = fetch("/api/users");
const p2 = fetch("/api/posts");

Promise.all([p1, p2])
  .then(([res1, res2]) => {
    console.log("Both Success");
  })
  .catch(err => {
    console.log("One failed:", err);
  });
```

🧠 **Use Case:**
✔ Jab **sab API ka data chahiye ho**

---

### 2️⃣ `Promise.allSettled()` – Success + Fail dono ka Result

* Koi fail ho tab bhi **sabka result milega**

```js
Promise.allSettled([p1, p2]).then(results => {
  console.log(results);
});
```

**Output Format:**

```js
[
  { status: "fulfilled", value: ... },
  { status: "rejected", reason: ... }
]
```

🧠 **Use Case:**
✔ Jab **partial data bhi acceptable ho**

---

### 3️⃣ `Promise.race()` – Jo Sabse Pehle Complete Kare

* Pehla resolve/reject hone wala promise return hota hai

```js
Promise.race([p1, p2]).then(result => {
  console.log("Fastest result:", result);
});
```

🧠 **Use Case:**

* Timeout handling
* Fastest server response choose karna

---

### 4️⃣ `Promise.any()` – Pehla Successful Promise

* Pehla **successful** promise return
* Sab fail ⇒ error

```js
Promise.any([p1, p2])
  .then(result => console.log(result))
  .catch(err => console.log("All failed"));
```

🧠 **Use Case:**
✔ Backup API logic

---

### 5️⃣ `Promise.resolve()` & `Promise.reject()`

```js
Promise.resolve("Success").then(res => console.log(res));
Promise.reject("Error").catch(err => console.log(err));
```

---

## 🔄 Sequential vs Parallel Promise

### ❌ Sequential (Slow)

```js
const a = await api1();
const b = await api2();
```

### ✅ Parallel (Fast)

```js
const [a, b] = await Promise.all([api1(), api2()]);
```

---

## 🧠 Interview Tricky Questions

### ❓ Q1: Promise vs Callback?

| Callback             | Promise        |
| -------------------- | -------------- |
| Callback Hell        | Clean chaining |
| Error handling messy | try/catch easy |
| Hard to read         | Readable       |

---

### ❓ Q2: Promise vs async/await?

👉 `async/await` **promise ka hi cleaner syntax** hai

---

### ❓ Q3: Promise.all() me ek fail ho jaye?

👉 Poora reject
👉 ✅ Solution: `Promise.allSettled()`

---

### ❓ Q4: Promise.any() vs Promise.race()?

| Promise.any      | Promise.race                 |
| ---------------- | ---------------------------- |
| First success    | First settled (success/fail) |
| All fail ⇒ error | Fail bhi return ho sakta hai |

---

## 💡 Real React Example (Multiple APIs)

```js
useEffect(() => {
  const loadData = async () => {
    try {
      const [usersRes, postsRes] = await Promise.all([
        fetch("/api/users"),
        fetch("/api/posts")
      ]);

      const users = await usersRes.json();
      const posts = await postsRes.json();

      console.log(users, posts);
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  loadData();
}, []);
```

---

## 🎯 One-Line Interview Answer

> “Promise JavaScript me async operations ko handle karne ka object hota hai.
> async/await uska cleaner syntax hai, aur multiple API calls ke liye Promise.all() use hota hai.”

---

## ✅ Interview Tip

1️⃣ Definition bolo
2️⃣ Simple example do
3️⃣ async/await mention karo
4️⃣ Promise.all ka use batao

---

📌 **Perfect for Practice + Interview Revision**
⭐ Save & revise before JavaScript / React interviews

---

## Example: async/await with Custome Promise

```javascript
const newPms = new Promise((resolve, reject) => {
  let success = true;
  if(success){
    resolve({id: 1, name: "Vrushank"})
  } else {
    reject("Error...");
  }
})

const getData = async () => {
  try {
    let data = await newPms;
    return data;
  } catch (e) {
    console.log(e);
  }
}

const main = async () => {
  let ans = await getData();
  console.log(ans)
}

main();
```
## Make a sleep function that delays execution for a given number of milliseconds

```javascript
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});

async function sleep(mini) {
  return new Promise(resolve => setTimeout(resolve, mini))
}
```