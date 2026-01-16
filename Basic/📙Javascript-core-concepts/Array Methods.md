## 📌 JavaScript Array Methods – Interview Cheat Sheet

### 🔹 1. Basic Array Methods

| Method      | Kaam                  | Array Change karta? | Example          |
| ----------- | --------------------- | ------------------- | ---------------- |
| `push()`    | End me element add    | ✅ Yes               | `arr.push(5)`    |
| `pop()`     | End se element remove | ✅ Yes               | `arr.pop()`      |
| `unshift()` | Start me add          | ✅ Yes               | `arr.unshift(1)` |
| `shift()`   | Start se remove       | ✅ Yes               | `arr.shift()`    |
| `length`    | Array size            | ❌ No                | `arr.length`     |

---

### 🔹 2. Searching / Checking Methods

| Method        | Kaam                 | Return       | Example                 |
| ------------- | -------------------- | ------------ | ----------------------- |
| `indexOf()`   | Index find karta     | index / -1   | `arr.indexOf(3)`        |
| `includes()`  | Element hai ya nahi  | true / false | `arr.includes(10)`      |
| `find()`      | First matching value | value        | `arr.find(x=>x>5)`      |
| `findIndex()` | First matching index | index        | `arr.findIndex(x=>x>5)` |

---

### 🔹 3. Loop / Iteration Methods (Most Important ⭐)

| Method      | Use             | Return    | Interview Point   |
| ----------- | --------------- | --------- | ----------------- |
| `forEach()` | Loop            | nothing   | Chain nahi hota   |
| `map()`     | Transform data  | new array | Most used         |
| `filter()`  | Condition based | new array | True wale         |
| `reduce()`  | Single value    | any       | Hard but powerful |
| `some()`    | Any true?       | boolean   | OR logic          |
| `every()`   | All true?       | boolean   | AND logic         |

---

### 🔹 4. Array Modify / Slice Methods

| Method     | Kaam              | Original Array? | Example           |
| ---------- | ----------------- | --------------- | ----------------- |
| `slice()`  | Copy part         | ❌ No            | `arr.slice(1,3)`  |
| `splice()` | Add/Remove        | ✅ Yes           | `arr.splice(1,2)` |
| `concat()` | Join arrays       | ❌ No            | `a.concat(b)`     |
| `flat()`   | Nested array flat | ❌ No            | `arr.flat(2)`     |

---

### 🔹 5. Sorting / String Conversion

| Method       | Kaam           | Change Array? | Example          |
| ------------ | -------------- | ------------- | ---------------- |
| `sort()`     | Sort           | ✅ Yes         | `arr.sort()`     |
| `reverse()`  | Reverse        | ✅ Yes         | `arr.reverse()`  |
| `join()`     | String banana  | ❌ No          | `arr.join(",")`  |
| `toString()` | String convert | ❌ No          | `arr.toString()` |

---

### 🔹 6. Interview Special (🔥 Must Remember)

| Question             | Answer                     |
| -------------------- | -------------------------- |
| `map` vs `forEach`   | map new array return karta |
| `slice` vs `splice`  | splice array change karta  |
| `filter` vs `find`   | filter many, find one      |
| `some` vs `every`    | OR vs AND                  |
| Non-mutating methods | map, filter, slice         |

---

## 🧠 One-Line Interview Tip

> **"map, filter, reduce → functional programming ke pillars hain"**

---

Agar aap chaho to main:

* ✅ **Java + Python array methods** ka bhi table
* ✅ **Only 10 most asked interview Q&A**
* ✅ **PDF / Notion style notes**

bhi bana deta hoon. Batao 👍

---

**Array All Methods Cheat Sheet**
//add width

![Array Methods](https://miro.medium.com/v2/resize:fit:800/format:webp/1*Lu-DacGYN0_aedDK358thA.png)

<img 
    src="https://igorgo.nl/assets/articles/js-arrays-cheatsheet/js-arrays-aggregated.webp"
    width="800"
    alt="Array Methods Aggregated"
  />