# 📊 Complete React Hooks Detailed Chart (With Timing)

---

## 🟢 1. State Management Hooks

| Hook                   | Use                 | Kab Run Hota Hai | Special Notes               |
| ---------------------- | ------------------- | ---------------- | --------------------------- |
| `useState`             | Local state manage  | Render ke time   | Re-render trigger karta hai |
| `useReducer`           | Complex state logic | Render ke time   | Redux jaisa pattern         |
| `useSyncExternalStore` | External store sync | Render phase     | Concurrent safe             |

---

## 🔵 2. Ref Hooks

| Hook                  | Use                           | DOM se Relation  | Special Notes                   |
| --------------------- | ----------------------------- | ---------------- | ------------------------------- |
| `useRef`              | DOM reference / mutable value | After DOM render | Re-render nahi karta            |
| `useImperativeHandle` | Custom ref expose karna       | After render     | forwardRef ke sath use hota hai |

---

## 🟣 3. Effect Hooks (Very Important)

| Hook                 | Kab Run Hota Hai     | DOM Load Relation                          | Use Case                 |
| -------------------- | -------------------- | ------------------------------------------ | ------------------------ |
| `useEffect`          | After paint          | DOM load hone ke baad                      | API call, event listener |
| `useLayoutEffect`    | Before paint         | DOM update ke turant baad (paint se pehle) | Layout measure           |
| `useInsertionEffect` | Before layout effect | CSS inject karne ke liye                   | Rare use                 |

---

### 🔥 Timing Order (Important Interview Question)

Render →
DOM Update →
`useInsertionEffect` →
`useLayoutEffect` →
Paint (screen update) →
`useEffect`

---

## 🟡 4. Context Hook

| Hook         | Use                | Kab Run        |
| ------------ | ------------------ | -------------- |
| `useContext` | Global data access | Render ke time |

---

## 🔴 5. Transition Hooks (React 18)

| Hook               | Use                 | Kab Use Kare              |
| ------------------ | ------------------- | ------------------------- |
| `useTransition`    | Low priority update | Heavy UI update           |
| `useDeferredValue` | Value delay karna   | Search input optimization |

---

## 🟤 6. Performance Hooks

| Hook          | Use              | Re-render Control     |
| ------------- | ---------------- | --------------------- |
| `useMemo`     | Value memoize    | Expensive calculation |
| `useCallback` | Function memoize | Child re-render avoid |

---

## 🟠 7. Debug / Utility Hooks

| Hook            | Use                   |
| --------------- | --------------------- |
| `useDebugValue` | Custom hook debugging |
| `useId`         | Unique ID generate    |

---

## 🟢 8. React 19 Hooks

| Hook            | Use                              |
| --------------- | -------------------------------- |
| `useFormStatus` | Form pending state               |
| `useFormState`  | Form state tracking              |
| `useOptimistic` | Optimistic UI update             |
| `use`           | Promise resolve inside component |

---

# 📌 DOM Timing Summary (Most Important)

| Hook               | DOM se Pehle        | DOM ke Baad | Paint ke Baad |
| ------------------ | ------------------- | ----------- | ------------- |
| useEffect          | ❌                   | ❌           | ✅             |
| useLayoutEffect    | ❌                   | ✅           | ❌             |
| useInsertionEffect | ✅ (layout se pehle) | ❌           | ❌             |

---

# 🧠 Easy Rule Yaad Karne Ke Liye

* 🟢 `useEffect` → Normal side effects (API, events)
* 🔵 `useLayoutEffect` → Layout measure
* 🟣 `useInsertionEffect` → CSS injection
* 🔴 `useMemo / useCallback` → Performance
* 🟡 `useRef` → DOM access
* 🟠 `useTransition` → Smooth UI
