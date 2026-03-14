मैंने आपके सभी questions को **remove किए बिना**, **duplicate हटाए बिना**, सिर्फ **proper interview format और categories** में arrange किया है ताकि आप **easily revise और explain** कर सकें।

---

# React / JavaScript Interview Questions (Organized Format)

## 1. Introduction

* Introduction (Self introduction for interview)

---

# 2. HTML / CSS Basics

1. What are inline and block elements?
2. How many ways can you declare CSS in a file?
3. Why is Tailwind CSS required?
4. For website responsiveness, what things will you use and explain why?

---

# 3. JavaScript Core Concepts

1. What is a pure function?
2. What is the difference between **var, let, and const**?
3. What is **hoisting**?
4. What is **closure**?
5. What is **event loop**?
6. What is **temporal dead zone**?
7. What is the difference between **slice and splice**?
8. What is the **purpose of metadata**?

---

# 4. JavaScript Coding Questions

### Swap without third variable

If **a = 10** and **b = 5**, then without using a third variable how do you swap them?

---

### Closure / Hoisting Code Example

```javascript
var x = some no here don't remember exactly;

(function () {
  var x = some no here don't remember exactly;

  (function random() {
    x++;
    console.log(x);
    var x = some no here don't remember exactly;
  })();

})();
```

---

### Array Coding Problem

Input:

```javascript
[[2, 4, 5, 3],[2, 3, 5],[4, 2, 5]]
```

Find **common numbers from given array**

Output:

```
[2, 5]
```

---

# 5. React Basics

1. What are **components in React**?
2. Difference between **functional and class components**
3. What is **JSX**?
4. What are **props in React**?
5. What is **state**?
6. Difference between **props and state**
7. What is **Virtual DOM**?
8. How does **React rendering work**?
9. What is **React Fragment**?
10. Explain **mounting, updating, unmounting phases**
11. How to **pass data from parent to child**
12. What are **reusable components** and how can you create one?

---

# 6. React Hooks

1. What are **hooks**?
2. What is **useState in React**?
3. What is **useEffect**?
4. What are **useMemo and useCallback**?
5. What is **React.memo**?
6. Difference between **useMemo and useCallback**

---

# 7. React Performance Optimization

1. How do you **optimize React performance**?
2. What is **memoization**?
3. What is **lazy loading in React**?
4. What is **code splitting**?
5. How you can **optimize React code**

---

# 8. State Management

1. What is **Redux**?
2. How does **Redux work**?
3. Explain the **Redux lifecycle**
4. Create a **Redux store**
5. What is **state management in React**?
6. How many **state management libraries** have you worked with?

---

# 9. React Advanced Concepts

1. What is **props drilling**?
2. What is **Context API in React**?
3. What is **HOC (Higher Order Component)**?

---

# 10. Performance Techniques

1. What is **debouncing**?
2. What is **throttling**?
3. How do you **increase website performance**?

---

# 11. React + API

1. How to **call API in React**?

---

# 12. React Ecosystem

1. What is **webpack**?
2. What is **server-side rendering**?
3. Why is **Next.js required**?
4. What is the **difference between React and Next.js**?

---

# 13. Project / Experience Questions

1. Explain your **project**
2. Tell about your **last project**
3. Which **domain did you work in** at your previous company?

---

# 14. React Coding Question

Write a **React code to display list and filter with any property from list object**

---

अगर आप चाहें तो मैं:

* इन **questions के short interview answers** भी बना सकता हूँ
* **Top 50 React interview answers (1–2 lines)** भी दे सकता हूँ
* और **React interview cheat sheet PDF** भी बना सकता हूँ।

बताइए — आपको **answers भी चाहिए या सिर्फ questions revise करने हैं?** 🙂

``` javascript
let arr = [1,2,3,4]

console.log(arr.slice(1,3), arr); // Output: [2, 3] [1, 2, 3, 4]
console.log(arr.splice(1,3), arr); // Output: [2, 3, 4] [1]
``` 

``` javascript
let a = 10;
let b = 15;

console.log(a = a + b); // Output: 25
console.log(b = a - b); // Output: 10 (because a is now 25, so 25 - 15 = 10)
console.log(a = a - b); // Output: 15 (because a is now 25, so 25 - 10 = 15)

[a,b] = [b,a]; // a = 10, b = 15

console.log(a,b); // Output: 15 10
```

``` javascript
function newFun(ele){
  // return ele.flat(Infinity); // This is the built-in method to flatten an array, but let's implement it manually
  let ans = [];
  for (var prop of ele) {
    console.log(prop);
    if(Array.isArray(prop)){
      ans.push(...newFun(prop));
    } else {
      ans.push(prop);
    }
  }
  return ans;
}

console.log(newFun([1,2,[3,4,[5,6,[7]]]])); // Output: [1, 2, 3, 4, 5, 6, 7]
```

``` javascript

function newFun(ele){
  return ele.filter(ele => ele.name.toLowerCase().includes("p".toLowerCase()));
}

const data = [
  { id: 1, name: "Rahul", age: 25 },
  { id: 2, name: "Amit", age: 30 },
  { id: 3, name: "Priya", age: 22 },
  { id: 4, name: "Rohit", age: 28 }
];
console.log(newFun(data))
// Output: [{ id: 3, name: "Priya", age: 22 }]
```

``` javascript
function newFun(ele){
  let ans = [];
  for (let i = 0; i < ele[0].length; i++) {
    // console.log(ele[0][i]);
    let tf = true;
    for (let j = 1; j < ele.length; j++) {
      // console.log(ele[j]);
      if(!ele[j].includes(ele[0][i])){
        tf = false;
        break;
      }
    }
    if(tf){
      ans.push(ele[0][i])
    }
  }
  return ans;
}

console.log(newFun([[2,4,5,3],[2,3,5],[4,2,5],[2]])); // Output: [2, 5]
```

``` javascript
function newFun(data){
  let ans = data[0].filter(ele => data.every(sub => sub.includes(ele)))
  return ans;
}

console.log(newFun([[2,4,5,3],[2,3,5],[4,2,5],[2]]));
// Output: [2, 5]
```


console.log(NaN === NaN);
 
 
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

import { useRef } from "react"; 

	export default function Checking() { 

	let ref = useRef(0); 

	function handleClick() { 

		ref.current = ref.current + 1; 

    } 

	return ( 
<> <div>How many times clicked? + {ref.current} + times</div> 
<button onClick={handleClick}>Click Here</button> 
</> 

}
 
const [count,setCount] = useState(0);
const handleClick = () {
	setCount(count + 1);
	setCount(pres => pres + 1);
}
 
<button onClick={handleClick}>{count}</button>
 
 
setCount(prev=>prev+1)


 