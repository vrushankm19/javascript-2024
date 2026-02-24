# 📌 Error Boundaries in React

## 🔹 Error Boundary kya hota hai?

> Error Boundary ek React component hota hai jo apne child components me aane wali JavaScript errors ko catch karta hai aur fallback UI show karta hai.

Simple words me:

👉 Agar child component crash ho jaye
👉 To pura app crash na ho
👉 Sirf ek safe UI show ho

---

# 🔥 Problem kya thi?

React 16 se pehle:

* Agar ek component me error aa gaya
* To pura React app crash ho jata tha

React 16 ke baad:

👉 Error Boundaries introduce hue

---

# 🔹 Error Boundary kaise banate hain?

⚠️ Important:

> Error Boundary sirf **Class Component** me ban sakta hai

---

## ✅ Example

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error:", error);
    console.log("Error Info:", info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong 😢</h2>;
    }

    return this.props.children;
  }
}
```

---

## 🔹 Kaise Use Kare?

```jsx
<ErrorBoundary>
   <MyComponent />
</ErrorBoundary>
```

Agar `MyComponent` me error aaye
👉 Fallback UI show hoga

---

# 🔥 Important Lifecycle Methods

| Method                   | Purpose                        |
| ------------------------ | ------------------------------ |
| getDerivedStateFromError | Fallback UI show karne ke liye |
| componentDidCatch        | Error logging ke liye          |

---

# ❌ Error Boundary kya catch nahi karta?

Error Boundary ye errors catch nahi karega:

* ❌ Event handlers ke errors
* ❌ Async code (setTimeout, fetch)
* ❌ Server side rendering
* ❌ Apne khud ke errors

---

# 🧠 Real Life Example

Socho ghar me ek room me short circuit ho jaye
👉 Agar fuse na ho to pura ghar band ho jata

👉 Error Boundary = fuse system
Sirf ek part band hota hai, pura ghar nahi

---

# 🔥 Interview Important Points

✔ React 16 me introduce hua
✔ Sirf class component me possible
✔ Fallback UI show karta hai
✔ componentDidCatch logging ke liye
✔ Whole app crash hone se bachata hai

---

# 🎯 Interview One-Line Answer

> Error Boundary ek React class component hota hai jo child components me aane wali rendering errors ko catch karta hai aur fallback UI display karta hai.

---

# 🚀 Advanced Interview Tip

Aaj kal production apps me:

* Logging tools use hote hain (Sentry etc.)
* Multiple small error boundaries use karte hain
* Lazy loaded components ke sath combine karte hain

