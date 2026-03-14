I created a **Markdown (.md) file** style explanation so you can directly save it as `js-react-interview-notes.md`.

---

# JavaScript & React Interview Questions – Explained

## 1. `NaN === NaN`

```javascript
console.log(NaN === NaN);
```

### Output

```
false
```

### Explanation

`NaN` means **Not a Number**.

In JavaScript:

* `NaN` is **not equal to anything**, including itself.

```javascript
NaN === NaN // false
```

This behavior comes from **IEEE floating-point rules**.

### Correct way to check `NaN`

```javascript
Number.isNaN(value)
```

Example:

```javascript
Number.isNaN(NaN) // true
```

---

## 2. `1 < 2 < 3`

```javascript
console.log(1 < 2 < 3);
```

### Output

```
true
```

### Step-by-step evaluation

JavaScript evaluates **left to right**.

Step 1

```javascript
1 < 2
```

Result:

```
true
```

Step 2

```javascript
true < 3
```

Now JS converts `true` → `1`

```
1 < 3
```

Result:

```
true
```

Final Output:

```
true
```

---

## 3. `3 > 2 > 1`

```javascript
console.log(3 > 2 > 1);
```

### Output

```
false
```

### Step-by-step evaluation

Step 1

```javascript
3 > 2
```

Result:

```
true
```

Step 2

```javascript
true > 1
```

Convert:

```
true → 1
```

Now:

```
1 > 1
```

Result:

```
false
```

Final Output:

```
false
```

---

# React Questions

---

# 4. `useRef` Example

### Code

```javascript
import { useRef } from "react";

export default function Checking() {

  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
  }

  return (
    <>
      <div>How many times clicked? {ref.current} times</div>
      <button onClick={handleClick}>Click Here</button>
    </>
  );
}
```

### Problem

UI **will NOT update** when button is clicked.

### Why?

`useRef` does **not trigger re-render**.

It only stores a **mutable value**.

So:

```
ref.current changes
but component does NOT re-render
```

### When to use `useRef`

Common uses:

* Access DOM elements
* Store previous values
* Store timers
* Mutable values that don't need re-render

Example:

```javascript
const inputRef = useRef();

<input ref={inputRef} />
```

---

# 5. `useState` Multiple Updates

### Code

```javascript
const [count,setCount] = useState(0);

const handleClick = () => {
	setCount(count + 1);
	setCount(prev => prev + 1);
}

<button onClick={handleClick}>{count}</button>
```

### Question

What will happen when button is clicked?

### Explanation

React **batches state updates**.

Step 1

```
count = 0
```

First update

```javascript
setCount(count + 1)
```

Uses old value:

```
0 + 1 = 1
```

Second update

```javascript
setCount(prev => prev + 1)
```

Now React takes latest value (`1`):

```
1 + 1 = 2
```

### Final value

```
count = 2
```

---

# 6. Functional State Update

### Code

```javascript
setCount(prev => prev + 1)
```

### Why use this?

Because state updates are **asynchronous**.

Functional update always receives **latest state**.

### Example

Bad:

```javascript
setCount(count + 1)
setCount(count + 1)
```

Result:

```
+1 only
```

Good:

```javascript
setCount(prev => prev + 1)
setCount(prev => prev + 1)
```

Result:

```
+2
```

---

# Summary (Important for Interviews)

### JavaScript

| Expression    | Result | Reason                       |
| ------------- | ------ | ---------------------------- |
| `NaN === NaN` | false  | NaN is not equal to anything |
| `1 < 2 < 3`   | true   | true → 1                     |
| `3 > 2 > 1`   | false  | true → 1                     |

---

### React

| Hook       | Purpose                        |
| ---------- | ------------------------------ |
| `useState` | causes re-render               |
| `useRef`   | stores value without re-render |

---

### Best Practice

Use functional updates when state depends on previous state.

```javascript
setCount(prev => prev + 1)
```

---

If you want, I can also give you:

* **20+ tricky JavaScript interview questions**
* **15 React interview trap questions**
* **Senior frontend interview JS questions**

(all in one **downloadable MD file**) 🚀
