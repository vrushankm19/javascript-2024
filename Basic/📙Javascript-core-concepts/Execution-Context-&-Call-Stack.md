# 📌 JavaScript Execution Context & Call Stack – Hinglish Notes (Interview Ready)

---

## 🔹 Execution Context kya hota hai?

JavaScript jab bhi koi code run karta hai,  
toh wo code **Execution Context** ke andar execute hota hai.

👉 Execution Context ek **environment** hota hai jahan:
- Variables store hote hain
- Functions store hote hain
- `this` keyword decide hota hai

---

## 🔹 JavaScript me Execution Context ke Types

### 1️⃣ Global Execution Context (GEC)
- JavaScript start hote hi create hota hai
- **Sirf ek hi hota hai**
- Browser me → `this = window`
- Node.js me → `this = {}`

### 2️⃣ Function Execution Context (FEC)
- Har function call par naya context banta hai
- Multiple function contexts ho sakte hain

### 3️⃣ Eval Execution Context
- Rarely use hota hai (`eval()`)

---

## 🔹 Execution Context ke 2 Phases

### 🧠 Phase 1: Memory Creation Phase
Is phase me code execute nahi hota,  
sirf memory allocate hoti hai.

- Variables → `undefined`
- Functions → poora function memory me store
- `this` keyword set hota hai

---

### ⚙️ Phase 2: Execution Phase
Is phase me code **line-by-line execute** hota hai.

- Variables → actual value assign hoti hai
- Functions → call hote hain

---

## 🔹 Example Code

```js
var a = 10;

function add(x, y) {
  var sum = x + y;
  return sum;
}

var result = add(5, 3);
````

---

## 🔹 Execution Context Flow (Step by Step)

### ✅ Step 1: Global Execution Context Create hota hai

#### Memory Phase

```js
a → undefined
add → function
result → undefined
this → window
```

#### Execution Phase

```js
a = 10
result = add(5, 3)
```

---

### ✅ Step 2: Function Execution Context (add)

#### Memory Phase

```js
x → 5
y → 3
sum → undefined
this → window
```

#### Execution Phase

```js
sum = 8
return 8
```

👉 Function complete hone ke baad
uska execution context destroy ho jata hai.

---

## 🔹 Call Stack kya hota hai?

> **Call Stack ek data structure hai jo track karta hai
> kaunsa function abhi execute ho raha hai**

👉 Call Stack **LIFO rule** follow karta hai
(**Last In, First Out**)

---

## 🔹 Call Stack Example

```js
function first() {
  second();
}

function second() {
  third();
}

function third() {
  console.log("Hello");
}

first();
```

---

## 🔹 Call Stack ka Flow

```
| third() |
| second()|
| first() |
| Global  |
```

### Execution order:

1. Global context stack me push hota hai
2. `first()` push hota hai
3. `second()` push hota hai
4. `third()` push hota hai
5. `third()` complete → pop
6. `second()` complete → pop
7. `first()` complete → pop

---

## 🔹 Call Stack Overflow

```js
function infinite() {
  infinite();
}

infinite();
```

❌ Error:

```
RangeError: Maximum call stack size exceeded
```

👉 Reason: function continuously call ho raha hai
aur stack kabhi empty nahi ho raha

---

## 🔥 Execution Context vs Call Stack

| Execution Context              | Call Stack                  |
| ------------------------------ | --------------------------- |
| Code execution ka environment  | Execution order track karta |
| Variables + `this` store karta | LIFO follow karta           |
| Har function ka apna hota hai  | Stack ke form me hota hai   |

---

## ⚠️ Important Interview Points

* JavaScript **single-threaded** hai
* Ek time pe **sirf ek execution context**
* Call Stack synchronous code handle karta hai
* Async code → Web APIs + Event Loop handle karte hain

---

## 🧠 One-Line Summary

> Execution Context wo jagah hai jahan code execute hota hai,
> aur Call Stack ye track karta hai ki kaunsa function currently run ho raha hai.

---

## ✅ Interview Answer (Short & Perfect)

> Execution Context JavaScript ka environment hota hai jisme code run hota hai.
> Call Stack ek stack hai jo execution contexts ka order maintain karta hai
> aur LIFO principle follow karta hai.

