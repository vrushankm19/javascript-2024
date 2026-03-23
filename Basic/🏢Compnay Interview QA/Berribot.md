Samajh gaya 👍 tu **direct practical/coding questions list** chahta hai (jo Berribot me aa sakte hai).
Main sirf **questions** de raha hu — no explanation 👇

---

## 💻 JavaScript Practical Questions

* Reverse a string without using built-in functions
* Find duplicate elements in an array
* Remove duplicates from an array
* Find the largest and smallest number in an array
* Check if a string is palindrome
* Flatten a nested array
* Implement debounce function
* Implement throttle function
* Write custom map function
* Write custom filter function
* Sort an array without using sort()
* Find frequency of elements in array
* Find missing number in array
* Merge two arrays and remove duplicates
* Convert array of objects into single object

---

## ⚛️ React Practical Tasks

* Create a counter using useState
* Fetch API data and display in list
* Create form with validation
* Implement search filter in list
* Create reusable component
* Implement pagination
* Implement lazy loading
* Optimize component using useMemo
* Optimize function using useCallback
* Create custom hook
* Handle API error and loading state
* Create dynamic table from API
* Pass data between components (parent-child)
* Create modal component
* Implement conditional rendering

---

## 🔄 Redux Practical

* Setup Redux store
* Create actions and reducers
* Connect Redux with React
* Update state using dispatch
* Use Redux Thunk for API call

---

## 🌐 API / Async Practical

* Fetch data using fetch()
* Fetch data using axios
* Handle API errors
* Implement loading spinner
* Call multiple APIs and combine result

---

## 🧪 Testing (Practical)

* Write test case using Jest
* Mock API call
* Test React component
* Check function output using test

---

## ⚡ Scenario-Based Practical

* Optimize slow React app
* Handle large data in UI
* Prevent unnecessary re-renders
* Improve page load performance
* Manage global state efficiently

---

## 🔥 Most Asked (Focus Here First)

* Debounce
* API fetch + display
* useState / useEffect
* Array problems (duplicate, reverse)
* Custom hook
* Redux basic flow

---

Agar tu bole to mai:
👉 **Top 5 questions solve karwa du (step-by-step)**
👉 Ya fir **live coding mock le lu (real interview jaisa)**

Bata 👍

``` javascript
function newFun(data){
  // return data.filter((ele,ind,arr) => arr.indexOf(ele) !== ind);
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    if(!arr.includes(data[i])){
      arr.push(data[i])
    } else if(!arr2.includes(data[i])) {
      arr2.push(data[i])
    }
  }
  return arr2
}

console.log(newFun([1, 2, 3, 2, 4, 2])); // Output: [2]
```

``` javascript
function newFun(data){
  // let ans = [...new Set(data)]
  // return ans.filter((ele,ind,arr) => arr.indexOf(ele) == ind);
  
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    if(!arr.includes(data[i])){
      arr.push(data[i])
    }
  }
  return arr
}

console.log(newFun([1, 2, 3, 2, 4, 2])); // Output: [1, 2, 3, 4]
```

``` javascript
function newFun(data){
  // return [Math.max(...data), Math.min(...data)];
  let ans = data[0]
  for(let i = 0;i < data.length;i++){
    if(ans > data[i]){
      ans = data[i]
    }
  }
  return ans
}

console.log(newFun([1, 2, 3, 2, 4, 2])); // Output: [4, 1]
```

``` javascript
function newFun(data){
  // return data.toLowerCase() === data.toLowerCase().split("").reverse().join("");
  let ans = ""
  for(let i = data.length - 1;i >= 0;i--){
    ans += data[i]
  }
  return ans.toLowerCase() === data.toLowerCase();
}

console.log(newFun("Mom")); // Output: true
```

``` javascript
function newFun(data){
  // return data.flat(Infinity);
  let ans = []
  for(let i of data){
    console.log(i);
    if(Array.isArray(i)){
      ans.push(...newFun(i))
    } else {
      ans.push(i)
    }
  }
  return ans
}

console.log(newFun([1,2,[3,4,[5,6,[7]]]])); // Output: [1, 2, 3, 4, 5, 6, 7]
```

``` javascript
function debouncedGetData(fn, delay){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    },delay)
  }
}

const debounced = debouncedGetData(() => {console.log("Hello...")}, 2000);

debounced();
debounced();
debounced();
debounced();
debounced();
// "Hello..." will be logged only once after 2 seconds of the last call to debounced()
```

``` javascript
function throtalingGetData(fn, delay){
  let lastTime = 0;
  return function(...args) {
    let now = new Date().getTime();
    if(now - lastTime >= delay){
      lastTime = now;
      fn.apply(this, args);
    }
  }
}

const throtaling = throtalingGetData(() => {console.log("Hello...");}, 1000);
setInterval(throtaling, 200);
// "Hello..." will be logged every 1 second, even though throtaling is called every 200ms
```

``` javascript
Array.prototype.myMap = function(callback){
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if(i in this){
      result[i] = callback(this[i], i, this)
    } 
  }
  return result;
}

const arr = [1, 2, 3];
const output = arr.myMap((num) => num * 2);
console.log(output);
// Output: [2, 4, 6]
```

``` javascript
// Write custom filter function
Array.prototype.myFilter = function(callback){
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if(i in this){
      if(callback(this[i], i, this)){
        result.push(this[i])
      }
    } 
  }
  return result;
}

const arr = [1, 2, 3];
const output = arr.myFilter((num) => num % 2 === 0);
console.log(output); // Output: [2]
```

``` javascript
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j + 1]){
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 2, 9, 1, 100])); // Output: [1, 2, 5, 9, 100]
```

``` javascript

function findMissing(arr){
  let n = arr.length;
  let ans = n * (n + 1) / 2;
  let sum = 0;
  for(let i  of arr) sum += i
  return ans - sum
}

console.log(findMissing([0, 1, 2, 4],)); // 2
```

``` javascript
function mergeUnique(arr1, arr2) {
  let combined = [...arr1, ...arr2];

  return combined.filter((item, index) => combined.indexOf(item) === index);
}

console.log(mergeUnique([1, 2, 3], [3, 4, 5]));
// [1, 2, 3, 4, 5]

function mergeUniqueSorted(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}

console.log(mergeUniqueSorted([3, 1], [2, 3]));
// [1, 2, 3]
```

``` javascript
const arr = [
  { a: 1 },
  { b: 2 },
  { c: 3 }
];

const merged = Object.assign({}, ...arr);

console.log(merged); 
// { a: 1, b: 2, c: 3 }
const arr = [
  { a: 1 },
  { b: 2 },
  { c: 3 }
];

const merged = arr.reduce((acc, curr) => {
  return { ...acc, ...curr };
}, {});

console.log(merged); 
// { a: 1, b: 2, c: 3 }
const arr = [
  { key: 'a', value: 10 },
  { key: 'b', value: 20 },
  { key: 'c', value: 30 }
];

const merged = arr.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});

console.log(merged);
// { a: 10, b: 20, c: 30 }
``` 

``` JavaScript
import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
________________________________________
import React, { useState, useEffect } from "react";
import useDebounce from "./hook/useDebounce";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);

  const debouncedSearch = useDebounce(search, 1000);

  const fetchData = async (query) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${query}`,
      );
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (debouncedSearch) {
      fetchData(debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <div className="container mx-auto">
      <h1>Vrushank Modi</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="border p-2"
      />

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;

```

``` JavaScript
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  // ✅ Validation (same pattern as your code)
  const validate = () => {
    let err = {};

    if (!name) {
      err.name = "Enter Name";
    }

    if (!mobile) {
      err.mobile = "Enter Mobile";
    } else if (mobile.length !== 10) {
      err.mobile = "Mobile must be 10 digits";
    }

    if (!password) {
      err.password = "Enter Password";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // ✅ Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const payload = {
        name,
        mobile,
        password,
      };

      console.log("Payload:", payload);
      setName("");
      setMobile("");
      setPassword("");
      
      alert("User Added ✅");
    }
  };

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <h3>Add User</h3>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>{errors.name}</p>

        {/* Mobile */}
        <input
          type="text"
          placeholder="Enter Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          maxLength={10}
        />
        <p>{errors.mobile}</p>

        {/* Password */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{errors.password}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
```

``` javaScript
import React from "react";

function App() {
  const dataValue = [
    { product: "Product 1", price: "$45" },
    { product: "Product 2", price: "$41" },
    { product: "Product 3", price: "$49" },
    { product: "Product 4", price: "$40" },
  ];

  const [search, setSearch] = React.useState("");

  const filteredData = dataValue.filter((item) =>
    item.product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border"
      />

      {filteredData.map((item) => (
        <div key={item.product}>
          {item.product} {item.price}
        </div>
      ))}
    </div>
  );
}

export default App;
```


| Method | Use                  |
| ------ | -------------------- |
| GET    | Data lena            |
| POST   | Data bhejna (create) |
| PUT    | Data update          |
| PATCH  | Partial update       |
| DELETE | Data delete          |


``` javaScript
import React, { Component } from "react";

class InputResetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleReset = () => {
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />

        <p>{this.state.text}</p>

        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default InputResetter;
```

``` javaScript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 data-testid="count">{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;

__________________________________________________________________


import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders initial count", () => {
  render(<Counter />);
  expect(screen.getByTestId("count").textContent).toBe("0");
});

test("increments count", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByTestId("count").textContent).toBe("1");
});

test("decrements count", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("Decrement"));
  expect(screen.getByTestId("count").textContent).toBe("-1");
});

test("resets count", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("Increment"));
  fireEvent.click(screen.getByText("Reset"));
  expect(screen.getByTestId("count").textContent).toBe("0");
});

```