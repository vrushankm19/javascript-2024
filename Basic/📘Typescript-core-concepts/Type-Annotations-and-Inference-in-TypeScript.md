## 1️⃣ Type Annotations kya hoti hain?

**Type Annotation** ka matlab hota hai:

> Variable / function ko **explicitly batana** ki iska type kya hoga

### Example:

```ts
let age: number = 25;
let name: string = "Rahul";
let isLogin: boolean = true;
```

👉 Yahan `: number`, `: string`, `: boolean` **type annotations** hain

### Function me:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

* `a: number` → parameter type
* `): number` → return type

**Interview line:**

> Type Annotation me hum khud TypeScript ko type batate hain

---

## 2️⃣ Type Inference kya hota hai?

**Type Inference** ka matlab:

> TypeScript **khud hi type guess kar leta hai**, hume likhne ki zarurat nahi hoti

### Example:

```ts
let city = "Delhi";
```

* TypeScript automatically samajh lega:

```ts
let city: string
```

Another example:

```ts
let count = 10;
```

TypeScript infer karega:

```ts
let count: number
```

**Interview line:**

> Type Inference me TypeScript automatically type detect karta hai

---

## 3️⃣ Annotation vs Inference (Short Difference)

| Type Annotation            | Type Inference                |
| -------------------------- | ----------------------------- |
| Manually type likhte hain  | TS khud type samajhta hai     |
| Zyada control milta hai    | Code clean rehta hai          |
| Functions & APIs me useful | Simple variables ke liye best |

---

## 4️⃣ Kab Type Annotation use karni chahiye?

✅ Jab:

* Function parameters ho
* Function return type important ho
* Variable ka value baad me assign hona ho

Example:

```ts
let score: number;
score = 90;
```

---

## 5️⃣ Kab Type Inference best hota hai?

✅ Jab:

* Variable ke saath hi value assign ho
* Type clear aur simple ho

Example:

```ts
let isActive = false; // TS samajh lega boolean
```

---

## 6️⃣ Galti jo interview me pooch sakte hain ⚠️

```ts
let data;
data = 10;
data = "hello";
```

❌ Yahan TypeScript `any` infer kar lega
👉 Isliye better hai:

```ts
let data: string | number;
```

---

## 7️⃣ One-line Interview Answers 🧠

* **Type Annotation:** Jab hum explicitly type define karte hain
* **Type Inference:** Jab TypeScript automatically type decide karta hai
* TypeScript default behavior → **Type Inference**

---

## 8️⃣ Short Conclusion

> TypeScript smart hai — simple cases me **Type Inference**, complex cases me **Type Annotation** use karni chahiye

---

