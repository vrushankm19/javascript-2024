# 📌 Callback in JavaScript

## 🔹 Callback kya hota hai?

> Callback ek function hota hai jo kisi dusre function ko argument ke roop me diya jata hai,
> aur baad me call kiya jata hai.

Simple words me:

👉 "Function ke andar function pass karna"

---

## 🔹 Basic Example (Simple)

```js
function greet(name) {
  console.log("Hello " + name);
}

function processUserInput(callback) {
  let name = "Rahul";
  callback(name);
}

processUserInput(greet);
```

### Yaha kya ho raha hai?

* `greet` ek function hai
* `processUserInput` me usko argument me pass kiya
* Fir `callback(name)` call kiya

👉 `greet` yaha callback hai

---

# 🔥 Real Use Case – Asynchronous Code

JavaScript me callbacks ka use mostly async work me hota hai:

* API call
* File read
* setTimeout
* Event handling

---

## 🔹 Example with setTimeout

```js
setTimeout(function () {
  console.log("Executed after 2 seconds");
}, 2000);
```

👉 Yaha jo function pass kiya hai
wo **callback function** hai

---

# 🔹 Synchronous vs Asynchronous Callback

## 🟢 Synchronous Callback

Immediately execute hota hai

```js
[1,2,3].forEach(function(num){
  console.log(num);
});
```

---

## 🔵 Asynchronous Callback

Delay ya background me execute hota hai

```js
setTimeout(() => {
  console.log("Async callback");
}, 1000);
```

---

# 🔥 Callback Hell (Important Interview Topic)

Jab callbacks nested ho jate hain:

```js
getData(function(a){
  getMoreData(a, function(b){
    getMoreData(b, function(c){
      console.log(c);
    });
  });
});
```

👉 Ye structure difficult ho jata hai
👉 Isko bolte hain **Callback Hell**

Solution:

* Promises
* Async/Await

---

# 📌 Callback ka Real Meaning

JavaScript ek **single-threaded language** hai
Isliye async tasks ko handle karne ke liye callbacks use karta hai.

---

# 🎯 Interview One-Line Answer

> Callback ek function hai jo kisi dusre function ko argument ke roop me diya jata hai aur baad me execute kiya jata hai, especially asynchronous operations ke liye.

---

# 🔥 Important Interview Points

✔ Function as argument
✔ Async programming
✔ setTimeout example
✔ Callback hell
✔ Promises introduced to solve it