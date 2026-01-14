## 🔷 Redux Kya Hai?

Redux ek **state management library** hai jo React (ya kisi bhi JS app) me **global state** manage karne ke liye use hoti hai.

### Redux ke Main Concepts

* **Store** – poora app ka state
* **Action** – plain JS object jo batata hai *kya hua*
* **Reducer** – function jo state ko update karta hai
* **Dispatch** – action ko reducer tak bhejna

### Redux Flow

```
UI → Action → Reducer → Store → UI
```

---

## 🔷 Redux Toolkit (RTK) Kya Hai?

Redux Toolkit **official recommended way** hai Redux likhne ka.

RTK ka main goal hai:

* Boilerplate kam karna
* Code readable banana
* Common mistakes avoid karna

---

## ⚔️ Redux vs Redux Toolkit (Direct Comparison)

| Feature                   | Redux                    | Redux Toolkit               |
| ------------------------- | ------------------------ | --------------------------- |
| Boilerplate               | Bahut zyada              | Bahut kam                   |
| Reducer code              | Complex                  | Simple                      |
| Immutable update          | Manually karna padta hai | Automatically (Immer)       |
| Store setup               | Zyada config             | Easy (`configureStore`)     |
| Async logic               | redux-thunk separately   | Built-in `createAsyncThunk` |
| Recommended by Redux team | ❌                        | ✅                           |

---

## 🧩 Example: Redux (Traditional)

```js
// action
const ADD_TODO = "ADD_TODO";

const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

// reducer
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};
```

❌ Zyada code
❌ Switch-case
❌ Manual immutability

---

## 🧩 Example: Redux Toolkit

```js
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

✅ Kam code
✅ No switch-case
✅ Immutable logic auto handle

---

## 🔥 Immer – Secret Power of RTK

RTK me hum directly state mutate karte hue lagte hain:

```js
state.push(action.payload);
```

But actually **Immer library** background me immutability handle karti hai.

---

## 🚀 configureStore vs createStore

### Redux

```js
const store = createStore(reducer);
```

### Redux Toolkit

```js
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
```

RTK automatically:

* Redux DevTools enable karta hai
* Thunk middleware add karta hai

---

## ❓ Interview Questions & Answers

### Q1. Redux Toolkit kyun introduce kiya gaya?

**Answer:**
Boilerplate kam karne, code simple banane aur Redux ko beginner-friendly banane ke liye.

---

### Q2. Kya Redux Toolkit Redux ko replace karta hai?

**Answer:**
Nahi. Redux Toolkit Redux ka hi improved version hai.

---

### Q3. RTK me state mutate kar sakte hain?

**Answer:**
Dikhne me lagta hai, lekin actually Immer immutable copy banata hai.

---

### Q4. Aaj ke time me kaunsa use karna chahiye?

**Answer:**
👉 **Redux Toolkit (Recommended by Redux Team)**

---

## ✅ Final Verdict

✔ New projects → **Redux Toolkit**
✔ Old legacy apps → Redux ya migrate to RTK

---

📌 Tip (Interview):

> "Redux Toolkit is the standard and recommended way to write Redux today."

---

**Best of luck for your interview! 🚀**
