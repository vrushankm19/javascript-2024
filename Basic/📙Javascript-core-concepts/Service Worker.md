# 📌 Service Worker in JavaScript – Hinglish Interview Notes

---

## 🔹 Service Worker kya hota hai?

**Service Worker** ek **background script** hota hai  
jo browser aur network ke beech me kaam karta hai.

👉 Simple words:
> Service Worker browser se alag thread me run hota hai  
> aur bina page open hue bhi kaam kar sakta hai.

---

## 🔹 Service Worker kyun use karte hain?

- Offline support
- Faster loading (cache)
- Push notifications
- Background sync
- PWA (Progressive Web App)

---

## 🔹 Service Worker kaha run hota hai?

- Browser ke background me
- DOM access ❌ nahi hota
- `window`, `document` available ❌ nahi

👉 Ye **event-driven** hota hai

---

## 🔹 Service Worker lifecycle (Very Important)

### 1️⃣ Register  
### 2️⃣ Install  
### 3️⃣ Activate  
### 4️⃣ Fetch  

---

## 🔹 1️⃣ Service Worker Register karna

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
    .then(() => console.log("Service Worker Registered"))
    .catch(err => console.log("SW error", err));
}
````

---

## 🔹 2️⃣ Install Event (Cache files)

```js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/app.js"
      ]);
    })
  );
});
```

👉 First time assets cache hote hain

---

## 🔹 3️⃣ Activate Event (Old cache clear)

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== "v1") {
            return caches.delete(key);
          }
        })
      )
    )
  );
});
```

---

## 🔹 4️⃣ Fetch Event (Offline Support)

```js
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
```

👉 Cache available → cache se
👉 Nahi → network se

---

## 🔹 Caching Strategies

| Strategy               | Use case       |
| ---------------------- | -------------- |
| Cache First            | Static files   |
| Network First          | APIs           |
| Stale While Revalidate | News / content |

---

## 🔹 Service Worker vs Web Worker

| Feature            | Service Worker | Web Worker |
| ------------------ | -------------- | ---------- |
| Runs in background | ✅              | ❌          |
| Offline support    | ✅              | ❌          |
| Network intercept  | ✅              | ❌          |
| DOM access         | ❌              | ❌          |

---

## 🔹 Real-World Example

* Gmail offline mode
* Twitter Lite
* Spotify Web
* E-commerce apps

---

## ⚠️ Important Rules (Interview Point)

* HTTPS required (except localhost)
* No direct DOM access
* Async only
* Same origin scope

---

## 🔥 Common Interview Questions

### ❓ Service Worker offline kaise kaam karta hai?

👉 Cache API ke through

### ❓ Page close hone ke baad kaam karta hai?

👉 Haan (background)

---

## 🧠 One-Line Summary

> Service Worker browser ka background script hai jo caching, offline support aur push notifications provide karta hai.

---

## ✅ Interview Answer (Short & Perfect)

> Service Worker ek background script hota hai jo network requests ko intercept karta hai aur caching ke through offline support aur better performance provide karta hai. Ye PWA ka core part hai.

---

## 🔥 Interview Tip

👉 Lifecycle explain karna
👉 Fetch + cache example bolna
👉 HTTPS rule mention karna
