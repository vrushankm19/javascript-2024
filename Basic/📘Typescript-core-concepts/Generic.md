# 🚀 TypeScript Generic Kya Hota Hai?

Generic ka matlab:

> “Type ko dynamic bana dena, lekin type safety maintain rakhna.”

Yani:
Function ya class ka type hardcode nahi karte,
usko flexible bana dete hain.

---

# ❌ Without Generic Problem

```ts
function identity(value: any) {
  return value;
}
```

Problem:

* Type safety nahi
* Autocomplete nahi
* Compile time checking nahi

---

# ✅ With Generic

```ts
function identity<T>(value: T): T {
  return value;
}
```

Yaha:

* `T` ek placeholder type hai
* Jo input type hoga wahi return hoga

Example:

```ts
identity<string>("Hello")
identity<number>(10)
```

Type automatically infer bhi ho jata hai:

```ts
identity("Hello")   // T = string
identity(100)       // T = number
```

---

# 🧠 Real Meaning

`<T>` ka matlab:

> “Mujhe abhi nahi pata type kya hoga,
> lekin jo bhi hoga consistent rahega.”

---

# 🔥 Generic with Array

```ts
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
```

Use:

```ts
getFirst([1,2,3])        // number
getFirst(["a","b"])      // string
```

---

# 🔥 Multiple Generics

```ts
function merge<T, U>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}
```

Use:

```ts
merge({name:"Aman"}, {age:25})
```

Return type:

```ts
{ name: string; age: number }
```

---

# 🔥 Generic with Interface

```ts
interface ApiResponse<T> {
  data: T;
  success: boolean;
}
```

Use:

```ts
const response: ApiResponse<string[]> = {
  data: ["A","B"],
  success: true
}
```

Real-life API response handling me use hota hai 🔥

---

# 🔥 Generic with Constraints (Very Important 🔥🔥)

Kabhi kabhi hum chahte hain ki generic koi specific type follow kare.

Example:

```ts
function getLength<T extends { length: number }>(item: T) {
  return item.length;
}
```

Ab sirf woh types allowed hain jinke paas `length` property ho.

Allowed:

* string
* array

Not allowed:

* number

---

# 🔥 Generic in React (Common Use Case)

Example: Reusable Table Component

```ts
interface TableProps<T> {
  data: T[];
  renderRow: (item: T) => React.ReactNode;
}
```

Ab ye table kisi bhi data type ke saath work karega.

---

# 🔥 Built-in Generics (Daily Use)

| Type        | Example                |
| ----------- | ---------------------- |
| Array<T>    | Array<string>          |
| Promise<T>  | Promise<User>          |
| Record<K,T> | Record<string, number> |
| Partial<T>  | Partial<User>          |
| Pick<T,K>   | Pick<User, "name">     |

---

# 🧠 Real Life Scenario (Interview Answer Ready)

Tum bol sakte ho:

> “Humne ek reusable API utility banayi thi jisme ApiResponse<T> generic use kiya tha taaki har endpoint ke liye type-safe response mil sake.”

Ya:

> “Reusable table component me generics use kiye taaki component strongly typed rahe.”

---

# 🎯 Interview Level Questions

### ❓ Generic vs Any?

| Generic               | Any             |
| --------------------- | --------------- |
| Type safe             | Type unsafe     |
| Compile-time checking | No checking     |
| Better autocomplete   | No intellisense |

---

### ❓ Generic Kab Use Karna Chahiye?

✔ Reusable components
✔ Utility functions
✔ API response types
✔ Data structures

---

# 🔥 Advanced: Generic Default Type

```ts
interface Box<T = string> {
  value: T;
}
```

Agar type pass nahi kiya to default `string` use hoga.

---

# 🧠 One-Line Summary

Generic = Flexible + Type-safe abstraction
