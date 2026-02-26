# 🚀 react-window vs react-virtualized

Dono libraries ka purpose same hai:

👉 **Large lists ko efficiently render karna (Virtualization)**
👉 Sirf visible items render karna
👉 Baaki items DOM me mount nahi hote

---

# 🧠 Problem Kya Tha?

Agar 10,000 items ka list render kar diya:

* DOM heavy ho jayega
* Scroll lag karega
* Memory consumption badh jayega

Solution → **Windowing / Virtualization**

Matlab:
👉 Screen pe jo visible hai sirf wahi render karo
👉 Baaki items scroll hone pe load karo

---

# 🔥 1️⃣ react-virtualized

📦 Older library
📅 2016 ke around popular hui
Feature-rich hai

### Features:

* List
* Grid
* Table
* AutoSizer
* CellMeasurer
* InfiniteLoader
* Dynamic height support

### Pros:

✔ Powerful
✔ Bahut advanced use cases handle karta hai

### Cons:

❌ Bundle size bada
❌ Thoda complex
❌ Performance heavy ho sakta hai

---

# 🔥 2️⃣ react-window

📦 Same author ne banaya (Brian Vaughn)
🎯 Lightweight version of react-virtualized

### Features:

* FixedSizeList
* VariableSizeList
* FixedSizeGrid
* VariableSizeGrid

### Pros:

✔ Small bundle size
✔ Fast
✔ Simple API
✔ Better performance

### Cons:

❌ react-virtualized jitne advanced features nahi

---

# 📊 Comparison Table

| Feature           | react-window | react-virtualized |
| ----------------- | ------------ | ----------------- |
| Bundle Size       | Small        | Large             |
| Performance       | Faster       | Slightly Heavy    |
| API               | Simple       | Complex           |
| Advanced Features | Limited      | Many              |
| Recommended Today | ✅ Yes        | ⚠ Only if needed  |

---

# 🔥 Example (react-window)

```jsx
import { FixedSizeList as List } from "react-window";

const Row = ({ index, style }) => (
  <div style={style}>
    Row {index}
  </div>
);

<List
  height={400}
  itemCount={10000}
  itemSize={35}
  width={300}
>
  {Row}
</List>
```

👉 Sirf visible rows render hongi.

---

# 🎯 Interview Answer (5+ Years Level)

Agar interviewer pooche:

> Why react-window over react-virtualized?

Tum bol sakte ho:

"react-window lightweight aur performant hai.
react-virtualized powerful hai but heavy.
Agar simple list/grid virtualization chahiye to main react-window prefer karta hoon."

---

# 🧠 Kab Kaunsa Use Kare?

✅ Use react-window
→ Large flat list
→ Performance priority
→ Modern app

✅ Use react-virtualized
→ Complex table
→ Dynamic row height
→ Infinite scrolling with advanced features

---

# 🔥 Real Production Insight

Most modern projects:

✔ react-window
✔ TanStack Virtual
✔ MUI DataGrid (internally virtualized)

react-virtualized ab rarely use hota hai.