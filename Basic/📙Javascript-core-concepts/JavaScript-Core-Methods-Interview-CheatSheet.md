* ✅ Array
* ✅ String
* ✅ Object

👉 Interview ke time **sirf ek file kholni pade** aur **99% JS method doubts clear** ho jayenge.
Level: **5+ Years Experience**

---

# 🧠 JavaScript Core Methods – Interview Cheat Sheet (5+ Years)

> **Goal:**
> Ek hi file me JavaScript ke **most-used & interview-important methods**
> clear table format me — no confusion, no hunting.

---

# 🔥 ARRAY METHODS

## 🔹 Add / Remove

| Method      | Kya karta hai   | Mutates? | Example          |
| ----------- | --------------- | -------- | ---------------- |
| `push()`    | End me add      | ✅ Yes    | `arr.push(5)`    |
| `pop()`     | End se remove   | ✅ Yes    | `arr.pop()`      |
| `unshift()` | Start me add    | ✅ Yes    | `arr.unshift(1)` |
| `shift()`   | Start se remove | ✅ Yes    | `arr.shift()`    |

---

## 🔹 Slice / Splice

| Method     | Purpose      | Mutates? | Example           |
| ---------- | ------------ | -------- | ----------------- |
| `slice()`  | Copy part    | ❌ No     | `arr.slice(1,3)`  |
| `splice()` | Add / Remove | ✅ Yes    | `arr.splice(1,1)` |

---

## 🔹 Iteration / Transform

| Method      | Kya karta hai | Mutates? | Example            |
| ----------- | ------------- | -------- | ------------------ |
| `forEach()` | Loop          | ❌ No     | `arr.forEach(fn)`  |
| `map()`     | Transform     | ❌ No     | `arr.map(x=>x*2)`  |
| `filter()`  | Filter        | ❌ No     | `arr.filter(x>2)`  |
| `reduce()`  | Single value  | ❌ No     | `arr.reduce(fn,0)` |

---

## 🔹 Search / Sort

| Method       | Kya karta hai | Mutates? | Example                |
| ------------ | ------------- | -------- | ---------------------- |
| `includes()` | Exists?       | ❌ No     | `arr.includes(2)`      |
| `find()`     | First match   | ❌ No     | `arr.find(fn)`         |
| `sort()`     | Sort          | ✅ Yes    | `arr.sort((a,b)=>a-b)` |
| `reverse()`  | Reverse       | ✅ Yes    | `arr.reverse()`        |

---

# 🔥 STRING METHODS

## 🔹 Search / Check

| Method         | Kya karta hai   | Return  | Example                 |
| -------------- | --------------- | ------- | ----------------------- |
| `includes()`   | Substring check | Boolean | `"abc".includes("a")`   |
| `indexOf()`    | Index           | Number  | `"abc".indexOf("b")`    |
| `startsWith()` | Start check     | Boolean | `"abc".startsWith("a")` |
| `endsWith()`   | End check       | Boolean | `"abc".endsWith("c")`   |

---

## 🔹 Extract / Modify

| Method         | Kya karta hai | Mutates? | Example                     |
| -------------- | ------------- | -------- | --------------------------- |
| `slice()`      | Extract       | ❌ No     | `"abc".slice(1,3)`          |
| `replace()`    | Replace       | ❌ No     | `"a b".replace(" ","-")`    |
| `replaceAll()` | Replace all   | ❌ No     | `"a a".replaceAll("a","b")` |
| `trim()`       | Space remove  | ❌ No     | `" a ".trim()`              |

---

## 🔹 Case / Split

| Method          | Kya karta hai  | Example             |
| --------------- | -------------- | ------------------- |
| `toUpperCase()` | Uppercase      | `"a".toUpperCase()` |
| `toLowerCase()` | Lowercase      | `"A".toLowerCase()` |
| `split()`       | String → Array | `"a,b".split(",")`  |

---

# 🔥 OBJECT METHODS

## 🔹 Create / Copy

| Method              | Kya karta hai | Shallow / Deep | Example                  |
| ------------------- | ------------- | -------------- | ------------------------ |
| `Object.assign()`   | Copy          | Shallow        | `Object.assign({}, obj)` |
| Spread `...`        | Copy          | Shallow        | `{...obj}`               |
| `structuredClone()` | Copy          | Deep           | `structuredClone(obj)`   |

---

## 🔹 Keys / Values

| Method                 | Kya karta hai | Return | Example                   |
| ---------------------- | ------------- | ------ | ------------------------- |
| `Object.keys()`        | Keys          | Array  | `Object.keys(obj)`        |
| `Object.values()`      | Values        | Array  | `Object.values(obj)`      |
| `Object.entries()`     | Key–Value     | Array  | `Object.entries(obj)`     |
| `Object.fromEntries()` | Object        | Object | `Object.fromEntries(arr)` |

---

## 🔹 Control / Security

| Method            | Kya karta hai  | Example                  |
| ----------------- | -------------- | ------------------------ |
| `Object.freeze()` | Immutable      | `Object.freeze(obj)`     |
| `Object.seal()`   | Lock structure | `Object.seal(obj)`       |
| `Object.hasOwn()` | Own prop check | `Object.hasOwn(obj,"a")` |

---

# 🧠 QUICK INTERVIEW TRAPS

| Code           | Output  | Reason    |
| -------------- | ------- | --------- |
| `[] === []`    | false   | Reference |
| `"5" + 1`      | "51"    | Coercion  |
| `{}` === `{}`  | false   | Reference |
| `arr.length=0` | Cleared | Mutation  |

---

# 🎯 ONE-LINE FINAL REVISION

> Array = ordered mutable list
> String = immutable text
> Object = key–value reference-based structure

---

# 🔥 5+ YEARS INTERVIEW CLOSING LINE

> “Main hamesha non-mutating methods use karta hoon aur state ko predictable rakhta hoon.”

