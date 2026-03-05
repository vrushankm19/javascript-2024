# 🚀 type vs interface in TypeScript

Dono ka use hota hai:

> Object ka structure define karne ke liye

Lekin dono same nahi hote.

---

# 🔹 Basic Example

### ✅ interface

```ts
interface User {
  name: string;
  age: number;
}
```

---

### ✅ type

```ts
type User = {
  name: string;
  age: number;
};
```

Yaha tak dono same lagte hain 😄
Ab asli difference dekhte hain.

---

# 🔥 Difference Table (Interview Focused)

| Feature                     | interface       | type               |
| --------------------------- | --------------- | ------------------ |
| Object define karna         | ✅ Yes           | ✅ Yes              |
| Extend karna                | `extends`       | `&` (intersection) |
| Multiple declarations merge | ✅ Yes           | ❌ No               |
| Union types                 | ❌ No            | ✅ Yes              |
| Primitive alias             | ❌ No            | ✅ Yes              |
| Tuple define                | ❌ No            | ✅ Yes              |
| Performance                 | Slightly better | Slightly heavy     |
| React projects me preferred | ✅ Mostly        | Also used          |

---

# 🔥 1️⃣ Declaration Merging (Major Difference)

Interface merge ho sakta hai:

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
```

Final:

```ts
{
  name: string;
  age: number;
}
```

Type me error aayega ❌

---

# 🔥 2️⃣ Union Types (Only type)

```ts
type Status = "success" | "error" | "loading";
```

Interface se nahi kar sakte.

---

# 🔥 3️⃣ Extend / Inheritance

### Interface

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}
```

---

### Type

```ts
type Person = {
  name: string;
};

type Employee = Person & {
  salary: number;
};
```

---

# 🔥 4️⃣ Primitive Alias (Only type)

```ts
type ID = string | number;
```

Interface se nahi bana sakte.

---

# 🔥 5️⃣ Tuple (Only type)

```ts
type Point = [number, number];
```

---

# 🧠 Real Life Usage (React Projects)

### Usually:

✔ Data model → interface
✔ API response → interface
✔ Union / utility types → type
✔ Props → dono use ho sakte

---

# 🏢 Real Interview Scenario Answer

Agar interviewer pooche:

> Which one do you prefer?

Professional answer:

> “Agar object structure define karna ho to main interface prefer karta hoon kyunki declaration merging support karta hai aur readability better hoti hai.
> Lekin union, tuple ya complex type composition ke liye type use karta hoon.”

Ye balanced answer hota hai 👌

---

# 🎯 When to Use What?

## Use interface when:

✅ Object shape define karna ho
✅ OOP style architecture ho
✅ Large scale app me extensibility chahiye

## Use type when:

✅ Union types
✅ Primitive alias
✅ Tuple
✅ Conditional types

---

# 🧠 Advanced Difference (5+ Years Level)

Internally:

* interface = object specific
* type = more powerful, can represent anything

---

# 🔥 Short Summary (Memory Trick)

Interface → Object-focused
Type → Everything-focused

<div style="text-align: center; margin-top: 20px;">
  <p style="font-size: 18px; margin-top: 10px;">TypeScript ke core concepts me type vs interface ka yeh difference yaad rakhna!</p>
</div>

Bahut sahi follow-up 👏
Yahi clarity interviewer ko dikhati hai ki tum TypeScript “use” nahi, “samajh” ke use karte ho.

Main tumhe **clear rule + real examples** ke saath bata raha hoon — taaki interview me confidently explain kar sako.

---

# 🎯 Golden Rule (Simple)

👉 **Object structure define karna ho → `interface`**
👉 **Union / complex type logic ho → `type`**

Ab detail me dekhte hain.

---

# ✅ 1️⃣ Data Model / API Response → Use `interface`

## 🔹 Real Scenario: User API Response

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
```

### Kyun interface?

* Object structure hai
* Future me extend ho sakta hai
* Clean & readable

Example:

```ts
interface Admin extends User {
  role: string;
}
```

🧠 Interview line bol sakte ho:

> “Main API models ke liye interface prefer karta hoon because they are extendable and scalable.”

---

# ✅ 2️⃣ React Props → Usually `interface`

```ts
interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

Why?

✔ Clear object structure
✔ Large apps me extensibility

---

# ✅ 3️⃣ Union Types → Only `type`

## 🔹 Example: Status Handling

```ts
type Status = "loading" | "success" | "error";
```

Interface se possible nahi.

Real use case:

```ts
function handleStatus(status: Status) {
  if (status === "loading") {
    console.log("Loading...");
  }
}
```

---

# ✅ 4️⃣ Primitive Alias → Only `type`

```ts
type ID = string | number;
```

Use case:

```ts
interface User {
  id: ID;
}
```

---

# ✅ 5️⃣ Tuple → Only `type`

```ts
type Coordinates = [number, number];
```

Use case:

```ts
const location: Coordinates = [28.61, 77.20];
```

---

# ✅ 6️⃣ Complex Combination → Use `type`

```ts
type User = {
  name: string;
};

type Admin = User & {
  permissions: string[];
};
```

Yaha intersection use kar rahe ho.

---

# ✅ 7️⃣ Declaration Merging Needed → Use `interface`

Example:

```ts
interface Config {
  apiUrl: string;
}

interface Config {
  timeout: number;
}
```

Automatically merge ho jayega.

Large enterprise apps me useful hota hai.

---

# 📊 Real Comparison Table (Practical View)

| Situation                 | Use       | Reason              |
| ------------------------- | --------- | ------------------- |
| API Response Model        | interface | Extendable & clean  |
| React Props               | interface | Readability         |
| Union Type                | type      | Required            |
| Primitive Alias           | type      | Required            |
| Tuple                     | type      | Required            |
| Complex Conditional Types | type      | Advanced features   |
| Library Augmentation      | interface | Declaration merging |

---

# 🏢 Real Project Example (Interview Ready Answer)

Tum bol sakte ho:

> “Hamare project me data models aur component props ke liye interface use karte hain kyunki unhe extend karna hota hai.
> Lekin union types aur utility types ke liye type use karte hain kyunki wo more flexible hai.”

Ye answer balanced & professional lagta hai 👌

---

# 🧠 Advanced Level Insight (5+ Years)

Most companies follow pattern:

* Default → interface
* Complex types → type

Some teams prefer:

* Everything as type (kyunki more powerful)

Dono acceptable hai — consistency important hai.

---

# 🎯 Final Simple Rule (Memory Trick)

Interface → “Object shape”
Type → “Anything else”

