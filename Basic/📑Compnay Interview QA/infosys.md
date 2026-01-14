Bilkul Krupa 👍
Infosys me **4–5 years experience (JavaScript, React, TypeScript)** ke liye **1st technical round** me mostly **fundamentals + practical coding + real project scenarios** puchte hain.

Neeche maine **exact interview pattern ke hisaab se categorized list + practical questions** diye hain taaki aap easily clear kar sako.

---

# 🔹 Round 1 Pattern (Infosys – Frontend)

✅ MCQ kam hote hain
✅ Zyada focus hota hai:

* Core JavaScript
* React concepts
* TypeScript understanding
* Debugging & real-world use cases
* 1–2 coding / logic questions

---

# 🟡 JavaScript Questions (4–5 yrs Level)

### 🔸 Concepts

1. `var`, `let`, `const` difference
2. Hoisting kya hota hai? Example ke sath
3. Closure kya hai? Real use-case
4. Event Loop kaise kaam karta hai?

   * Call Stack
   * Microtask Queue
   * Callback Queue
5. `this` keyword – normal function vs arrow function
6. `call()`, `apply()`, `bind()` difference
7. Shallow copy vs Deep copy (React me issue kyu aata hai?)
8. Promise kya hai? `then`, `catch`, `finally`
9. `async/await` ka flow explain karo
10. `map`, `filter`, `reduce` difference

---

### 🔸 Practical JavaScript Coding

#### ✅ 1. Duplicate Remove

```js
const arr = [1,2,3,2,4,1];
const unique = [...new Set(arr)];
console.log(unique);
```

#### ✅ 2. Debounce Function

```js
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

#### ✅ 3. Output Based Question

```js
console.log(1);
setTimeout(()=>console.log(2),0);
Promise.resolve().then(()=>console.log(3));
console.log(4);
```

👉 Output: **1 4 3 2**

---

# 🔵 React Questions (Very Important)

### 🔸 Core Concepts

1. **Functional vs Class Component**
2. **useState ka kaam**
3. **useEffect lifecycle** (componentDidMount, update, unmount)
4. **Dependency array ka use**
5. **Props vs State**
6. **Controlled vs Uncontrolled components**
7. **Lifting State Up**
8. **React Re-render kab hota hai?**
9. **Virtual DOM kya hai?**
10. **Key prop kyu use hota hai list me?**

---

### 🔸 Advanced React (4–5 yrs Level)

1. **useMemo vs useCallback**
2. **React.memo**
3. **Custom Hooks**
4. **Context API vs Redux**
5. **Redux flow**
   👉 Action → Reducer → Store → Component
6. **Middleware kya hota hai? (Redux Thunk / Saga)**
7. **Error Boundary**
8. **Lazy loading & code splitting**
9. **Performance optimization in React**
10. **Why useRef instead of useState sometimes?**

---

### 🔸 Practical React Questions

#### ✅ 1. Counter Component

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

#### ✅ 2. API Call with useEffect

```jsx
useEffect(() => {
  fetch("https://api.example.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);
```

#### ✅ 3. Prevent Re-render

```jsx
const Child = React.memo(({ data }) => {
  console.log("Rendered");
  return <div>{data}</div>;
});
```

---

# 🟣 TypeScript Questions

### 🔸 Core

1. TypeScript kyu use karte hain?
2. **Type vs Interface difference**
3. **Union (`|`) & Intersection (`&`)**
4. **Any vs Unknown**
5. **Never vs Void**
6. **Optional properties (`?`)**
7. **Readonly**
8. **Type Inference**

---

### 🔸 Practical TypeScript

#### ✅ 1. Type Annotation

```ts
let count: number = 10;
let name: string = "Krupa";
```

#### ✅ 2. Interface Example

```ts
interface User {
  id: number;
  name: string;
  isActive?: boolean;
}
```

#### ✅ 3. Generic Function

```ts
function identity<T>(value: T): T {
  return value;
}
```

#### ✅ 4. Difference: any vs unknown

```ts
let a: any = 10;
let b: unknown = 20;

// Allowed
a.toUpperCase();

// Not allowed
// b.toUpperCase(); ❌
```

---

# 🧠 Scenario-Based Questions (Infosys Favorite)

### 🔹 1. API Slow hai – React app ka performance kaise improve karoge?

✔ `useMemo`, `useCallback`
✔ Lazy loading
✔ Pagination
✔ Caching

---

### 🔹 2. State change hone par component bar-bar render ho raha hai – solution?

✔ React.memo
✔ useCallback
✔ Proper dependency array

---

### 🔹 3. Form ka data parent me chahiye – kaise karoge?

✔ Lift State Up
✔ Pass handler through props

---

# 🔴 One Logical / Coding Question

#### Example:

**String reverse without built-in function**

```js
function reverse(str){
  let rev = "";
  for(let i=str.length-1; i>=0; i--){
    rev += str[i];
  }
  return rev;
}
```

---

# 🎯 How to Clear Infosys 1st Round Easily

✔ JS fundamentals strong rakho
✔ React hooks clearly explain kar pao
✔ TypeScript ka real use bata sako
✔ At least **2–3 coding questions practice**
✔ Apne **project ka architecture explain karne ke liye ready raho**

---

# 📌 Next Step (Personalized Preparation)

Agar aap mujhe ye bata do:

👉 **Your role:** Frontend / React Developer / Full Stack
👉 **Experience:** 4–5 yrs
👉 **Projects:** (Normal CRUD / API / Dashboard / Enterprise app?)

Toh main:
✅ **Mock interview questions**
✅ **Exact coding practice set**
✅ **HR round ke questions**

bana dunga taaki aap Infosys ka interview confidently clear kar sako 💪
Bas likho:
**“Jarvis, I am React developer with 4–5 yrs, prepare me for Infosys interview.”**