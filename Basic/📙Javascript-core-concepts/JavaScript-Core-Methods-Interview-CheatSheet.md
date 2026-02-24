# 🧠 JavaScript Core Methods – Complete Interview Cheat Sheet (5+ Years)

> Goal:
> Ek hi file me JavaScript ke **Array + String + Object** ke
> saare important interview methods table format me revise ho jayein.

---

# 🔥 ARRAY METHODS

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

# 🔥 STRING METHODS

---

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

---

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
| `new Array(5)`   | Empty array | Length set        |
| `arr.length = 0` | Clear array | Direct mutation   |
---

# 🎯 ONE-LINE FINAL REVISION

Array = ordered mutable list  
String = immutable text  
Object = key–value reference-based structure  

---

# 🔥 5+ YEARS INTERVIEW CLOSING LINE

> “Main hamesha non-mutating methods prefer karta hoon jisse state predictable aur maintainable rahe.”
