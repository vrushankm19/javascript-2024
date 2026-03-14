Capgemini me **4–5 years React Developer** interview usually **3 rounds** hota hai:

1️⃣ **Technical Round (React + JS + TS + HTML/CSS)**
2️⃣ **Coding / Practical Round**
3️⃣ **Managerial Round**

Tumne jo skills batayi hain (**React.js, JavaScript ES6+, TypeScript, HTML5, CSS3, State Management**) — unhi se **90% questions** aate hain.

Main tumhe **Capgemini type REAL interview question list** de raha hoon jisse **1st round clear karna easy ho jata hai**.

---

# 1️⃣ JavaScript (ES6+) Interview Questions

Ye sab **very common Capgemini questions** hain.

### Basic to Advanced

1. Difference between **var, let, const**
2. What is **closure** in JavaScript?
3. What is **hoisting**?
4. Difference between **== and ===**
5. What is **event loop**?
6. Explain **call, apply, bind**
7. What is **promise**?
8. Difference between **Promise vs async/await**
9. What is **debouncing and throttling**?
10. What is **currying**?
11. What is **prototype** in JavaScript?
12. Difference between **map, filter, reduce**
13. Difference between **forEach vs map**
14. What is **destructuring**?
15. What is **spread operator vs rest operator**
16. What is **optional chaining**
17. Difference between **shallow copy vs deep copy**
18. What is **this keyword**?
19. Difference between **arrow function vs normal function**
20. What is **IIFE**

---

# 2️⃣ React.js Interview Questions

### React Core Questions

1. What is **React**?
2. What is **Virtual DOM**?
3. Difference between **Virtual DOM vs Real DOM**
4. What are **React Hooks**?
5. Explain **useState**
6. Explain **useEffect**
7. Difference between **useEffect vs useLayoutEffect**
8. What is **useRef**
9. What is **useMemo**
10. What is **useCallback**
11. What is **React.memo**
12. What is **lazy loading in React**
13. What is **code splitting**
14. Difference between **controlled vs uncontrolled components**
15. What are **keys in React**
16. What is **prop drilling**
17. How to avoid **prop drilling**
18. What is **React context API**
19. Difference between **Context API vs Redux**
20. What is **higher order component (HOC)**

---

# 3️⃣ Advanced React Questions (4-5 Year Experience)

Ye **senior developer level questions** hain.

1. How does **React reconciliation work**?
2. What is **fiber architecture**
3. How does **React rendering work**
4. Difference between **CSR vs SSR**
5. What is **Next.js**
6. What is **hydration**
7. What is **React Suspense**
8. How to **optimize React performance**
9. What is **memoization**
10. What causes **unnecessary re-render**

Example answer expected:

```
React performance optimize karne ke liye:

React.memo
useMemo
useCallback
Lazy loading
Code splitting
Virtualization
```

---

# 4️⃣ State Management Questions

1. What is **state management**
2. Difference between **state vs props**
3. What is **Redux**
4. What is **Redux Toolkit**
5. What is **middleware in Redux**
6. What is **Redux thunk**
7. Difference between **Redux vs Context API**
8. What is **global state**
9. What is **local state**
10. What is **React Query / TanStack Query**

---

# 5️⃣ TypeScript Interview Questions

1. What is **TypeScript**
2. Difference between **TypeScript vs JavaScript**
3. What is **interface**
4. What is **type**
5. Difference between **type vs interface**
6. What is **generic**
7. What is **enum**
8. What is **union type**
9. What is **intersection type**
10. What is **optional property**

Example:

```
interface User {
  name: string;
  age?: number;
}
```

---

# 6️⃣ HTML5 + CSS3 Questions

1. Difference between **inline vs block element**
2. Difference between **flexbox vs grid**
3. What is **semantic HTML**
4. What is **responsive design**
5. What is **media query**
6. What is **z-index**
7. What is **position property**
8. Difference between **relative absolute fixed**
9. What is **box model**
10. What is **viewport**

---

# 7️⃣ Practical Coding Questions (Very Important)

Capgemini me **live coding bhi puchte hain**.

### Question 1

Reverse string

```javascript
function reverse(str){
return str.split('').reverse().join('')
}
```

---

### Question 2

Find largest number

```javascript
let arr=[10,50,20]

let max=Math.max(...arr)
```

---

### Question 3

Remove duplicates

```javascript
let arr=[1,2,2,3]

let unique=[...new Set(arr)]
```

---

### Question 4

Debounce function (VERY COMMON)

```javascript
function debounce(fn,delay){
let timer

return function(){
clearTimeout(timer)

timer=setTimeout(()=>{
fn()
},delay)

}
}
```

---

# 8️⃣ React Practical Question (Very Common)

### Counter App

```
Create a counter with increment and decrement
```

Example

```javascript
const [count,setCount]=useState(0)

<button onClick={()=>setCount(count+1)}>+</button>
<button onClick={()=>setCount(count-1)}>-</button>
```

---

# 9️⃣ API Fetch Practical Question

```
Fetch API data using useEffect
```

```javascript
useEffect(()=>{

fetch("https://api.example.com/users")
.then(res=>res.json())
.then(data=>setUsers(data))

},[])
```

---

# 🔟 Scenario Based Questions (Capgemini favorite)

1. React app slow ho gaya — **optimize kaise karoge**
2. Component unnecessary re-render ho raha hai — **fix kaise karoge**
3. Large list render ho rahi hai — **optimize kaise karoge**
4. API call multiple times ho rahi hai — **fix kaise karoge**
5. Prop drilling ho raha hai — **solution kya hai**

---

# ⭐ Capgemini me MOST IMPORTANT Topics

Yeh **pakka prepare karna**:

✅ React hooks
✅ useEffect lifecycle
✅ useMemo / useCallback
✅ Redux / Context
✅ Debounce / Throttle
✅ API calls
✅ ES6 concepts
✅ TypeScript basics
✅ Performance optimization