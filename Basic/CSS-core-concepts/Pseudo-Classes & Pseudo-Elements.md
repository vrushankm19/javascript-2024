# 🎨 CSS Pseudo-Classes & Pseudo-Elements

### Interview Notes (5+ Years Experience)

---

## 🔹 Pseudo kya hota hai? (ONE LINE)

> **Pseudo ka matlab hota hai “virtual state ya virtual part” jise hum CSS se target kar sakte hain bina extra HTML likhe.**

---

## 🔹 Pseudo ke Types

CSS me **2 main types** hote hain:

1️⃣ **Pseudo-Classes** (`:`)
2️⃣ **Pseudo-Elements** (`::`)

---

# 1️⃣ Pseudo-Classes (`:`)

---

## ✅ Pseudo-Class kya hoti hai?

> **Pseudo-class element ke special state ko represent karti hai.**

👉 User interaction ya element condition pe apply hoti hai.

---

## 🔹 Common Pseudo-Classes (Click / Focus Based)

```css
a:hover {
  color: red;
}

button:active {
  transform: scale(0.95);
}

input:focus {
  border-color: blue;
}
```

---

## 🔹 Frequently Used Pseudo-Classes

| Pseudo-Class   | Use Case         |
| -------------- | ---------------- |
| `:hover`       | Mouse hover      |
| `:active`      | Click state      |
| `:focus`       | Input focus      |
| `:visited`     | Visited link     |
| `:disabled`    | Disabled input   |
| `:checked`     | Checkbox / radio |
| `:first-child` | First element    |
| `:last-child`  | Last element     |
| `:nth-child()` | Specific index   |

---

## 🔥 Interview Example (Clickable)

```css
button:hover {
  background-color: green;
  cursor: pointer;
}
```

👉 Mouse le jaate hi style change

---

## 🔹 Advanced Pseudo-Classes (5+ Level)

```css
li:nth-child(odd) {
  background: #f2f2f2;
}

input:required {
  border: 2px solid red;
}

div:not(.active) {
  opacity: 0.5;
}
```

---

# 2️⃣ Pseudo-Elements (`::`)

---

## ✅ Pseudo-Element kya hota hai?

> **Pseudo-element element ke specific part ko target karta hai.**

👉 Content ka **part**, state nahi.

---

## 🔹 Common Pseudo-Elements

```css
p::first-letter {
  font-size: 32px;
}

p::first-line {
  color: blue;
}
```

---

## 🔹 Most Used Pseudo-Elements

| Pseudo-Element   | Use Case         |
| ---------------- | ---------------- |
| `::before`       | Content se pehle |
| `::after`        | Content ke baad  |
| `::first-letter` | First letter     |
| `::first-line`   | First line       |
| `::selection`    | Selected text    |

---

## 🔥 `::before` & `::after` (INTERVIEW FAVORITE)

```css
button::before {
  content: "👉 ";
}

button::after {
  content: " ✔";
}
```

👉 HTML change kiye bina UI enhance

---

## ⚠️ Important Rule (Must Know)

```css
::before,
::after {
  content: "";
}
```

❌ `content` ke bina kaam nahi karega

---

# 🔥 Pseudo-Classes vs Pseudo-Elements (TABLE)

| Feature          | Pseudo-Class  | Pseudo-Element  |
| ---------------- | ------------- | --------------- |
| Symbol           | `:`           | `::`            |
| Target           | Element state | Element ka part |
| Example          | `:hover`      | `::before`      |
| Multiple allowed | ❌             | ❌               |
| DOM part         | Yes           | No              |

---

## 🧠 Interview Trick Question

**Q:** `:hover` aur `::hover` me kya difference?
**A:** ❌ `::hover` exist hi nahi karta

---

## 🔹 Real-World Use Cases

✔️ Tooltip banana (`::after`)
✔️ Required field star (`::before`)
✔️ Hover effects (`:hover`)
✔️ Zebra table rows (`:nth-child`)

---

## 🔹 Table Styling Example (Pseudo + Table)

```css
table tr:nth-child(even) {
  background-color: #f9f9f9;
}

table tr:hover {
  background-color: #ddd;
}

table th::after {
  content: " 🔽";
}
```

---

## 🔥 Interview One-Liners

* Pseudo-class element ke **state** ko target karti hai
* Pseudo-element element ke **part** ko
* `::before` & `::after` DOM ka part nahi hote
* UI enhancement ke liye best tool hai

---

## ✅ One-Line Revision

> Pseudo-classes interaction/state ke liye hoti hain
> jabki pseudo-elements content ke specific part ke liye.

---

## 🎯 5+ Years Interview Tip

> “Main pseudo-classes user interaction ke liye aur pseudo-elements UI enhancement ke liye use karta hoon bina extra HTML add kiye.”

