# 📌 JWT (JSON Web Token) – Hinglish Interview Notes

---

## 🔹 JWT kya hota hai?

**JWT (JSON Web Token)** ek **secure token** hota hai  
jo **authentication aur authorization** ke liye use hota hai.

👉 Simple words:
> JWT ek string hoti hai jo user ki identity prove karti hai  
> bina baar-baar login kiye.

---

## 🔹 JWT ka use kyun hota hai?

- Login ke baad user ko identify karne ke liye
- Stateless authentication
- Backend ko session store nahi karna padta
- APIs secure karne ke liye

---

## 🔹 JWT ka structure (Very Important)

JWT **3 parts** se milkar banta hai:

```

HEADER.PAYLOAD.SIGNATURE

```

Example:
```

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.
eyJpZCI6MSwibmFtZSI6IlJhaHVsIn0
.
abc123signature

````

---

## 🔹 JWT ke 3 parts explained

### 1️⃣ Header
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
````

👉 Kaunsa algorithm use hua

---

### 2️⃣ Payload

```json
{
  "id": 1,
  "name": "Rahul",
  "role": "admin"
}
```

👉 User ka data (⚠️ sensitive info nahi)

---

### 3️⃣ Signature

```text
Header + Payload + Secret Key
```

👉 Token ko tamper hone se bachata hai

---

## 🔹 JWT Authentication Flow (Real World)

1️⃣ User login karta hai
2️⃣ Backend credentials verify karta hai
3️⃣ JWT generate karta hai
4️⃣ Token frontend ko bhejta hai
5️⃣ Frontend token store karta hai
6️⃣ Har API request me token bhejta hai
7️⃣ Backend token verify karta hai

---

## 🔹 JWT kaise store karte hain?

### ✅ Local Storage

```js
localStorage.setItem("token", jwtToken);
```

⚠️ XSS risk

---

### ✅ HTTP Only Cookie (Best)

```http
Set-Cookie: token=jwt; HttpOnly
```

✔️ Secure
✔️ JavaScript access nahi kar sakta

---

## 🔹 JWT API call me kaise bhejte hain?

```js
fetch("/api/data", {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
```

---

## 🔹 JWT verify kaise hota hai? (Backend)

```js
jwt.verify(token, SECRET_KEY);
```

👉 Agar token valid → request allow
👉 Invalid → 401 Unauthorized

---

## 🔹 JWT vs Session

| Feature       | JWT         | Session     |
| ------------- | ----------- | ----------- |
| Storage       | Client side | Server side |
| Stateless     | ✅ Yes       | ❌ No        |
| Scalability   | High        | Limited     |
| Server memory | Low         | High        |

---

## ⚠️ JWT Limitations (Interview Important)

* Token revoke karna difficult
* Token expire hone tak valid rehta hai
* Large payload → large token

---

## 🔥 Best Practices

* Short expiry time use karo
* Refresh token use karo
* Sensitive data payload me mat rakho
* HTTPS mandatory

---

## 🧠 One-Line Summary

> JWT ek secure token hai jo stateless authentication ke liye use hota hai aur client-server ke beech user identity carry karta hai.

---

## ✅ Interview Answer (Short & Perfect)

> JWT ek JSON Web Token hai jo authentication ke liye use hota hai. Ye stateless hota hai aur server ko session maintain karne ki zarurat nahi hoti. Token me header, payload aur signature hota hai jise backend verify karta hai.

---

## 🔥 Interview Tip

👉 JWT structure explain karna
👉 LocalStorage vs HttpOnly cookie mention karna
👉 Security points bolna
