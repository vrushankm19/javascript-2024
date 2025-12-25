## ✅ Core Closure Definition (Final – Yaad rakhne wali)

> **Closure function nahi hota, balki function ke saath uska lexical environment hota hai.**

**Lexical environment =**

* local variables
* outer function ke variables
* scope chain

---

## ✅ Your Example (Perfect Closure – Annotated)

```js
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
```

### Closure yahan kya hai?

* `inner function`
* * `factor` variable
    👉 Dono milke **closure** banate hain

---

```js
const double = multiplier(2);
const triple = multiplier(3);
```

### Memory me kya hota hai?

| Function | Closed value |
| -------- | ------------ |
| `double` | `factor = 2` |
| `triple` | `factor = 3` |

---

```js
double(5);  // 10
triple(5);  // 15
```

👉 Same function body, **different closures**
👉 Yehi closure ka real power hai 💪

---

## ✅ Ultra-short Closure Example (1 min revise)

```js
function outer() {
  let x = 10;
  return () => x;
}

const fn = outer();
fn(); // 10
```

> Outer function khatam hone ke baad bhi `x` alive hai → closure

---

## ✅ Real-life Use (1 line)

> Closures are used for **data hiding, memoization, function factories, and React hooks**.

---

## ❌ What Closure is NOT (Revise list)

* ❌ Function argument me pass karna
* ❌ Callback hona
* ❌ Sirf function return karna

---

## ✅ Interview Cross-Question Ready

**Q:** Har function closure hota hai?
**A:**

> Haan, JavaScript me har function apne lexical scope ke saath closure banata hai, par tab meaningful hota hai jab outer variables access ho rahe ho.

---

## 🔥 Final Revision Block (Save this)

> **Closure = function + lexical scope**
> **Closure outer variables ko memory me preserve karta hai**
> **Multiple closures ek hi function se ban sakte hain**

---
