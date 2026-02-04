# 🧠 JavaScript Array Methods – Interview Table (5+ Years)

> **Goal:**
> Interview se pehle ek hi file me **array ke saare methods clearly table format me revise** ho jayein.

---

## 🔹 Basic Add / Remove Methods

| Method      | Kya karta hai                     | Mutates Original? | Syntax Example   |
| ----------- | --------------------------------- | ----------------- | ---------------- |
| `push()`    | End me element add karta hai      | ✅ Yes             | `arr.push(5)`    |
| `pop()`     | End se element remove karta hai   | ✅ Yes             | `arr.pop()`      |
| `unshift()` | Start me element add karta hai    | ✅ Yes             | `arr.unshift(1)` |
| `shift()`   | Start se element remove karta hai | ✅ Yes             | `arr.shift()`    |

---

## 🔹 Slice vs Splice (🔥 Interview Favorite)

| Method     | Purpose                | Mutates? | Example           |
| ---------- | ---------------------- | -------- | ----------------- |
| `slice()`  | Portion copy karta hai | ❌ No     | `arr.slice(1,3)`  |
| `splice()` | Add / Remove / Replace | ✅ Yes    | `arr.splice(1,1)` |

---

## 🔹 Iteration / Transformation Methods

| Method      | Kya karta hai                | Mutates? | Example                |
| ----------- | ---------------------------- | -------- | ---------------------- |
| `forEach()` | Har element pe loop          | ❌ No     | `arr.forEach(fn)`      |
| `map()`     | Naya transformed array       | ❌ No     | `arr.map(x => x*2)`    |
| `filter()`  | Condition ke basis pe filter | ❌ No     | `arr.filter(x => x>2)` |
| `reduce()`  | Single value me convert      | ❌ No     | `arr.reduce(fn,0)`     |

---

## 🔹 Search / Check Methods

| Method        | Kya karta hai                 | Return  | Example             |
| ------------- | ----------------------------- | ------- | ------------------- |
| `includes()`  | Value exist karti hai ya nahi | Boolean | `arr.includes(2)`   |
| `indexOf()`   | First index deta hai          | Number  | `arr.indexOf(2)`    |
| `find()`      | First matched value           | Element | `arr.find(x=>x>2)`  |
| `findIndex()` | Index of matched              | Number  | `arr.findIndex(fn)` |

---

## 🔹 Sorting / Reordering Methods

| Method         | Kya karta hai        | Mutates? | Example                |
| -------------- | -------------------- | -------- | ---------------------- |
| `sort()`       | Array sort karta hai | ✅ Yes    | `arr.sort((a,b)=>a-b)` |
| `reverse()`    | Order reverse        | ✅ Yes    | `arr.reverse()`        |
| `toSorted()`   | Safe sort (ES2023)   | ❌ No     | `arr.toSorted()`       |
| `toReversed()` | Safe reverse         | ❌ No     | `arr.toReversed()`     |

---

## 🔹 Merge / Flatten Methods

| Method      | Kya karta hai          | Mutates? | Example            |
| ----------- | ---------------------- | -------- | ------------------ |
| `concat()`  | Arrays merge karta hai | ❌ No     | `arr.concat(arr2)` |
| `flat()`    | Nested array flatten   | ❌ No     | `arr.flat(2)`      |
| `flatMap()` | map + flat             | ❌ No     | `arr.flatMap(fn)`  |

---

## 🔹 Utility Methods

| Method         | Kya karta hai           | Return | Example               |
| -------------- | ----------------------- | ------ | --------------------- |
| `join()`       | String banata hai       | String | `arr.join(",")`       |
| `split()`      | String → array          | Array  | `"a,b".split(",")`    |
| `fill()`       | Value se fill karta hai | ✅ Yes  | `arr.fill(0)`         |
| `copyWithin()` | Copy inside array       | ✅ Yes  | `arr.copyWithin(1,0)` |

---

## 🔹 Creation & Check

| Method            | Kya karta hai     | Return  | Example              |
| ----------------- | ----------------- | ------- | -------------------- |
| `Array.isArray()` | Array check       | Boolean | `Array.isArray(arr)` |
| `Array.from()`    | Array banata hai  | Array   | `Array.from("ABC")`  |
| `Array.of()`      | Safe array create | Array   | `Array.of(1,2,3)`    |

---

## 🔹 Copying Arrays (Shallow)

| Method         | Copy Type | Mutates? | Example           |
| -------------- | --------- | -------- | ----------------- |
| Spread `...`   | Shallow   | ❌ No     | `[...arr]`        |
| `slice()`      | Shallow   | ❌ No     | `arr.slice()`     |
| `Array.from()` | Shallow   | ❌ No     | `Array.from(arr)` |

---

## 🔹 Common Interview Traps

| Code             | Output      | Reason            |
| ---------------- | ----------- | ----------------- |
| `[] === []`      | `false`     | Reference compare |
| `new Array(5)`   | Empty array | Length set        |
| `arr.length = 0` | Clear array | Direct mutation   |

---

## 🧠 One-Line Revision

> Mutating methods original array ko change karte hain
> jabki non-mutating methods safe hote hain (React friendly).

---

## 🎯 5+ Years Interview Closing Line

> “Main hamesha non-mutating array methods prefer karta hoon jisse state predictable rahe.”

