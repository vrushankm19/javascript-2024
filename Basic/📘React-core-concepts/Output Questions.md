# 1️⃣ Initial Render (Page load)

Jab component first time render hoga:

```jsx
const [count, setCount] = useState(0);
```

Initial value:

```
count = 0
```

Screen par output:

```
Parent Component
Count: 0
[Increment Count]
It does not manage its own state.
```

Console:

```
ChildComponent rendered
```

---

# 2️⃣ Button Click hone par kya hoga?

Button click hone par function chalega:

```js
const incrementCount = () => {
  setCount(count + 1);
  setCount(count + 1);
};
```

Important baat 👇

React **state updates ko batch karta hai**.

Aur `count` ka value us moment par **0 hi rahega**.

So internally ye ho raha hai:

```
setCount(0 + 1)
setCount(0 + 1)
```

Dono same value set kar rahe hain.

Final result:

```
count = 1
```

❌ 2 nahi hoga
✅ 1 hoga

---

# 3️⃣ Final Output

Button click ke baad UI:

```
Parent Component
Count: 1
```

---

# 4️⃣ ChildComponent re-render hoga ya nahi?

Parent component render hua hai.

Rule:

> **React me parent re-render hota hai to child bhi re-render hota hai.**

Isliye:

```
ChildComponent rendered
```

console me **dubara print hoga**.

---

# 5️⃣ Render Flow

Page load

```
Parent render
Child render
```

Button click

```
Parent render
Child render
```

Total console:

```
ChildComponent rendered
ChildComponent rendered
```

---

# 6️⃣ Agar 2 chahiye ho to kya karna padega?

Functional update use karte hain.

```jsx
const incrementCount = () => {
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
};
```

Ab React previous value use karega.

Flow:

```
0 + 1 = 1
1 + 1 = 2
```

Final output:

```
Count: 2
```

---

# 🎯 Interview Answer (Short Version)

Tum aise bol sakte ho:

> React state updates batched hote hain. Dono setCount(count + 1) same value use karenge jo 0 hai, isliye final count 1 hoga. Parent re-render hone par child component bhi re-render hoga.

---

# ⭐ Extra Interview Twist

Interviewer kabhi puchte hain:

**Child ko re-render hone se kaise rokenge?**

Answer:

```jsx
const ChildComponent = React.memo(() => {
  console.log("ChildComponent rendered");
  return <p>Child</p>;
});
```

