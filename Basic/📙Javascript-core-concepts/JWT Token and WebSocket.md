# 🔐 JWT Token (JSON Web Token) – Hinglish Interview Notes (Beginner → Advanced)

---

## ✅ JWT Token kya hota hai? (ONE LINE)

> **JWT ek secure token hota hai jo user ki identity ko verify karne ke liye use hota hai, mostly authentication & authorization me.**

👉 Mostly **login ke baad** server JWT token deta hai.

---

## ✅ JWT ka use kahan hota hai?

* User authentication (login system)
* Authorization (role-based access)
* Secure API communication
* Stateless authentication (session ki zarurat nahi)

---

## 🔹 JWT ka Full Form

> **JSON Web Token**

👉 Data **JSON format** me hota hai
👉 Token **digitally signed** hota hai (secure)

---

## 🧠 JWT Token ka Structure (VERY IMPORTANT)

JWT token **3 parts** se milkar banta hai:

```txt
HEADER.PAYLOAD.SIGNATURE
```

Example:

```txt
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJ1c2VySWQiOjEsInJvbGUiOiJhZG1pbiJ9.
XyZabc123Signature
```

---

## 🔹 JWT ke 3 Parts (Detail)

---

### 1️⃣ Header

> Token ka **type** aur **algorithm** batata hai

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

✔️ `alg` → signing algorithm
✔️ `typ` → token type (JWT)

---

### 2️⃣ Payload (IMPORTANT)

> User ka actual data yahin hota hai
> Payload ke data ko **claims** kehte hain

```json
{
  "userId": 1,
  "email": "test@gmail.com",
  "role": "admin",
  "exp": 1710000000
}
```

---

### 🔑 Common JWT Claims (Interview Favorite)

| Claim  | Meaning                     |
| ------ | --------------------------- |
| `iss`  | Issuer (token kisne banaya) |
| `sub`  | Subject (user id)           |
| `exp`  | Expiry time                 |
| `iat`  | Issued at                   |
| `role` | User role                   |

⚠️ **Sensitive data payload me mat daalna**
JWT payload **encrypted nahi hota**, sirf encoded hota hai.

---

### 3️⃣ Signature

> Token ko **tamper-proof** banata hai

```txt
HMACSHA256(
  base64UrlEncode(header) +
  "." +
  base64UrlEncode(payload),
  secretKey
)
```

✔️ Server secret key use karta hai
✔️ Token change hua → signature invalid

---

## 🔄 JWT Authentication Flow (Step by Step)

1️⃣ User login karta hai
2️⃣ Server credentials verify karta hai
3️⃣ Server JWT token generate karta hai
4️⃣ Token client ko bhej diya jata hai
5️⃣ Client token store karta hai
6️⃣ Har request me token bheja jata hai

---

## 📌 JWT Token kaha store karte hain?

| Option               | Safe?      |
| -------------------- | ---------- |
| LocalStorage         | ❌ XSS risk |
| SessionStorage       | ❌          |
| HTTP Only Cookie     | ✅ Best     |
| Memory (React state) | ✅          |

---

## 📤 JWT Token kaise bhejte hain?

### Authorization Header me:

```http
Authorization: Bearer <token>
```

Example:

```js
fetch("/api/user", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

---

## 🔥 JWT ke Advantages

✔️ Stateless (server memory kam)
✔️ Scalable
✔️ Fast authentication
✔️ Mobile + Web dono me use hota hai

---

## ⚠️ JWT ke Disadvantages

❌ Token revoke karna hard
❌ Token leak hua to problem
❌ Payload encrypted nahi hota

---

## 🧠 Interview One-Liner

> JWT ek stateless authentication token hai jo header, payload aur signature se milkar banta hai aur secure API access ke liye use hota hai.

---

---

# 🔌 WebSocket – Hinglish Interview Notes (Beginner → Advanced)

---

## ✅ WebSocket kya hota hai? (ONE LINE)

> **WebSocket ek protocol hai jo client aur server ke beech real-time, two-way communication allow karta hai.**

---

## 🔹 WebSocket ka use kahan hota hai?

* Chat applications
* Live notifications
* Stock price updates
* Online gaming
* Live tracking systems

---

## 🔁 HTTP vs WebSocket (VERY IMPORTANT)

| Feature     | HTTP             | WebSocket  |
| ----------- | ---------------- | ---------- |
| Connection  | Request–Response | Persistent |
| Direction   | One-way          | Two-way    |
| Real-time   | ❌                | ✅          |
| Performance | Slower           | Faster     |

---

## 🔹 WebSocket kaise kaam karta hai?

1️⃣ Client HTTP request bhejta hai (handshake)
2️⃣ Server WebSocket me upgrade karta hai
3️⃣ Connection open rehta hai
4️⃣ Client & server dono data bhej sakte hain

---

## 📌 WebSocket URL Format

```txt
ws://example.com
wss://example.com (secure)
```

✔️ `wss` = HTTPS jaisa secure

---

## 🧪 WebSocket Basic Example (Frontend)

```js
const socket = new WebSocket("wss://example.com/socket");

socket.onopen = () => {
  console.log("Connection established");
};

socket.onmessage = (event) => {
  console.log("Message:", event.data);
};

socket.onclose = () => {
  console.log("Connection closed");
};
```

---

## 📤 Message Send karna

```js
socket.send("Hello Server");
```

---

## 🔐 WebSocket me Authentication kaise hoti hai?

✔️ JWT token query ya header me bhejte hain

Example:

```txt
wss://example.com/socket?token=JWT_TOKEN
```

Ya handshake ke time headers me.

---

## 🔥 WebSocket ke Advantages

✔️ Real-time communication
✔️ Low latency
✔️ One connection, multiple messages
✔️ Best for live apps

---

## ⚠️ WebSocket ke Disadvantages

❌ Complex handling
❌ Load balancing tricky
❌ Server resources zyada use

---

## 🧠 Interview Trick Question

**Q:** WebSocket me bar-bar request bhejni padti hai?
**A:** ❌ Nahi, connection persistent hota hai

---

## 🧠 One-Line Summary

> WebSocket real-time, full-duplex communication protocol hai jo single connection pe continuous data exchange karta hai.

---

## 🔥 30-Second Interview Answer (Perfect)

> *WebSocket ek protocol hai jo client aur server ke beech persistent, two-way communication provide karta hai. Ye HTTP se zyada fast aur efficient hota hai aur real-time applications jaise chat, live notifications aur stock updates me use hota hai.*

