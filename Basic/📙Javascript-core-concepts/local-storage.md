# 📌 Local Storage in JavaScript – Hinglish Interview Notes

---

## 🔹 Local Storage kya hota hai?

**Local Storage** browser ka ek **Web Storage API** hai  
jisme hum **key–value pair** ke form me data store kar sakte hain.

👉 Data **browser close hone ke baad bhi** delete nahi hota.

---

## 🔹 Local Storage ki main properties

- Data **permanent** hota hai (jab tak manually clear na karein)
- Sirf **string** data store hota hai
- Same **origin (domain)** ke liye accessible
- Size limit ≈ **5–10 MB**

---

## 🔹 Data store kaise karte hain?

### ✅ `setItem()`

```js
localStorage.setItem("name", "Rahul");
localStorage.setItem("age", "25");
````

---

## 🔹 Data get kaise karte hain?

### ✅ `getItem()`

```js
let name = localStorage.getItem("name");
console.log(name); // Rahul
```

---

## 🔹 Data remove kaise karte hain?

### ✅ Single item remove

```js
localStorage.removeItem("age");
```

### ✅ Sab clear karna

```js
localStorage.clear();
```

---

## 🔹 Object / Array ko kaise store karein? (Very Important)

Local storage sirf **string** accept karta hai,
isliye object/array ko **JSON** me convert karna padta hai.

### ✅ Store object

```js
let user = {
  name: "Rahul",
  city: "Delhi"
};

localStorage.setItem("user", JSON.stringify(user));
```

### ✅ Get object

```js
let data = JSON.parse(localStorage.getItem("user"));
console.log(data.name); // Rahul
```

---

## 🔹 Local Storage vs Session Storage

| Feature       | Local Storage | Session Storage    |
| ------------- | ------------- | ------------------ |
| Data life     | Permanent     | Tab close hone tak |
| Storage limit | ~5–10 MB      | ~5 MB              |
| Scope         | Same origin   | Same tab           |
| Use case      | Remember user | Temporary data     |

---

## 🔹 Real-World Use Cases

* Login data / token
* Theme (dark / light)
* Language preference
* Cart items
* User settings

---

## ⚠️ Limitations (Interview Important)

* Secure data store nahi hai
* Passwords ❌ store nahi karna
* String only support
* Server ke sath automatically share nahi hota

---

## 🔥 Common Interview Questions

### ❓ Local storage me token store karna safe hai?

❌ Completely safe nahi
✔️ Sensitive data avoid karo

---

### ❓ Local storage kab clear hota hai?

* Manually
* Browser cache clear karne par

---

## 🧠 One-Line Summary

> Local storage browser ka API hai jisme hum permanent key–value data store kar sakte hain jo page reload ya browser close hone par bhi delete nahi hota.

---

## ✅ Interview Answer (Short & Perfect)

> Local storage JavaScript ka Web Storage API hai jisme hum key–value pair me data store karte hain. Ye data browser close hone ke baad bhi persist karta hai aur mostly user preferences aur non-sensitive data ke liye use hota hai.

```
