# 📘 JavaScript Promise – Complete Notes (Practice + Interview)

## 🔹 Promise kya hota hai?

Promise JavaScript ka ek object hai jo **future me milne wale result** ko represent karta hai.

👉 Simple words me:

> "Abhi kaam chal raha hai, baad me ya to success milega ya error"

---

## 🔹 Promise ke 3 States

1. **Pending** – kaam chal raha hai
2. **Fulfilled** – kaam successfully complete ho gaya
3. **Rejected** – kaam fail ho gaya

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
```

### 🔍 Samjho:

* `resolve()` → success case
* `reject()` → error case

---

## 🔹 Promise consume (use) karna

```js
myPromise
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
```

### 🔍 Samjho:

* `.then()` → jab promise resolve ho
* `.catch()` → jab promise reject ho

---

## 🔹 Real-life Example (API jaisa)

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

## 🔹 Promise chaining

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

👉 Multiple async steps ko chain me likh sakte ho

---

## 🔹 async / await (Promise ka modern use)

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

### 🔍 Fayda:

* Code readable hota hai
* `.then()` se zyada clean

---

## 🔹 Promise.all()

```js
Promise.all([promise1, promise2])
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

👉 Sab promises resolve hone chahiye

---

## 🔹 Promise.race()

```js
Promise.race([promise1, promise2])
  .then(res => console.log(res));
```

👉 Jo pehle complete ho wahi result

---

## 🔹 Interview Important Questions

### Q1. Promise kya hota hai?

➡ Async operation handle karne ka object

### Q2. Promise ke states?

➡ Pending, Fulfilled, Rejected

### Q3. then vs catch?

➡ then = success, catch = error

### Q4. async/await kya hai?

➡ Promise ko handle karne ka clean syntax

### Q5. Promise vs Callback?

➡ Promise readable + avoid callback hell

---

## 🔹 One-line Revision

> Promise future ka result batata hai – ya success ya error

---

## ✅ Tip for Interview

👉 Pehle **definition** bolo
👉 Fir **simple example**
👉 Fir **async/await** mention karo

---