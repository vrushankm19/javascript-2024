# 🧠 JavaScript String Methods – Interview Table (5+ Years)

> **Goal:**
> Interview se pehle ek hi file me **string ke saare important methods clearly table format me revise** ho jayein.

---

## 🔹 String kya hoti hai? (ONE LINE)

> **String characters ka immutable sequence hota hai.**

⚠️ JS me string **immutable** hoti hai (important interview point)

---

## 🔹 String Create karne ke tareeke

```js
const a = "Hello";
const b = 'World';
const c = `Hello ${b}`; // template literal
```

---

## 🔹 Character Access

| Method     | Kya karta hai               | Mutates? | Example           |
| ---------- | --------------------------- | -------- | ----------------- |
| `charAt()` | Index pe character deta hai | ❌ No     | `"abc".charAt(1)` |
| `at()`     | Positive / negative index   | ❌ No     | `"abc".at(-1)`    |
| `[]`       | Index access                | ❌ No     | `"abc"[0]`        |

---

## 🔹 Search / Check Methods

| Method          | Kya karta hai   | Return  | Example                   |
| --------------- | --------------- | ------- | ------------------------- |
| `includes()`    | Substring check | Boolean | `"abc".includes("a")`     |
| `indexOf()`     | First index     | Number  | `"abc".indexOf("b")`      |
| `lastIndexOf()` | Last index      | Number  | `"abca".lastIndexOf("a")` |
| `startsWith()`  | Start check     | Boolean | `"abc".startsWith("a")`   |
| `endsWith()`    | End check       | Boolean | `"abc".endsWith("c")`     |

---

## 🔹 Extract / Slice Methods (🔥 Interview Favorite)

| Method        | Kya karta hai             | Supports −ve index | Example                |
| ------------- | ------------------------- | ------------------ | ---------------------- |
| `slice()`     | Part extract              | ✅ Yes              | `"abc".slice(1,3)`     |
| `substring()` | Part extract              | ❌ No               | `"abc".substring(1,3)` |
| `substr()`    | Length based (deprecated) | ❌ No               | `"abc".substr(1,2)`    |

---

## 🔹 Case Conversion

| Method                | Kya karta hai | Example                       |
| --------------------- | ------------- | ----------------------------- |
| `toUpperCase()`       | Uppercase     | `"abc".toUpperCase()`         |
| `toLowerCase()`       | Lowercase     | `"ABC".toLowerCase()`         |
| `toLocaleUpperCase()` | Locale based  | `"i".toLocaleUpperCase("tr")` |

---

## 🔹 Replace / Modify

| Method         | Kya karta hai             | Mutates? | Example                     |
| -------------- | ------------------------- | -------- | --------------------------- |
| `replace()`    | First match replace       | ❌ No     | `"a b".replace(" ","-")`    |
| `replaceAll()` | All match replace         | ❌ No     | `"a a".replaceAll("a","b")` |
| `trim()`       | Space remove (both sides) | ❌ No     | `" a ".trim()`              |
| `trimStart()`  | Start trim                | ❌ No     | `" a ".trimStart()`         |
| `trimEnd()`    | End trim                  | ❌ No     | `" a ".trimEnd()`           |

---

## 🔹 Split & Join

| Method    | Kya karta hai  | Return | Example               |
| --------- | -------------- | ------ | --------------------- |
| `split()` | String → Array | Array  | `"a,b".split(",")`    |
| `join()`  | Array → String | String | `["a","b"].join("-")` |

---

## 🔹 Padding (5+ Years Useful)

| Method       | Kya karta hai | Example               |
| ------------ | ------------- | --------------------- |
| `padStart()` | Start padding | `"5".padStart(2,"0")` |
| `padEnd()`   | End padding   | `"5".padEnd(2,"0")`   |

---

## 🔹 Comparison

| Method            | Kya karta hai        | Example                  |
| ----------------- | -------------------- | ------------------------ |
| `localeCompare()` | Locale-based compare | `"a".localeCompare("b")` |

---

## 🔹 String Length

```js
"Hello".length // 5
```

---

## 🔹 String Immutability (⚠️ Interview Trap)

```js
let str = "Hello";
str[0] = "Y";
console.log(str); // "Hello"
```

👉 String change nahi hoti, nayi string banti hai

---

## 🔹 String vs String Object (TRICK)

```js
"abc" === new String("abc") // false
```

👉 Primitive vs Object

---

## 🔹 Template Literals (5+ Years)

| Feature     | Example                    |
| ----------- | -------------------------- |
| Multi-line  | `` `Hello\nWorld` ``       |
| Expression  | `` `Sum ${a+b}` ``         |
| HTML string | `` `<div>${name}</div>` `` |

---

## 🔹 Common Interview Traps

| Code      | Output | Reason             |
| --------- | ------ | ------------------ |
| `"5" + 1` | `"51"` | Type coercion      |
| `"5" - 1` | `4`    | Numeric conversion |
| `" "`     | truthy | Non-empty string   |

---

## 🧠 One-Line Revision

> JavaScript strings immutable hoti hain
> aur saare string methods nayi string return karte hain.

---

## 🎯 5+ Years Interview Closing Line

> “Main string methods ko hamesha non-mutating behavior ke saath use karta hoon jisse data safe rahe.”
