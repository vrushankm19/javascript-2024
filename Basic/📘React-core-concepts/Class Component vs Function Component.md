# 📌 Class Component vs Function Component in React – Hinglish

---

## 🔹 Class Component kya hota hai?

Class Component React ka **old way** hai component banane ka  
jo **ES6 class** use karta hai aur `React.Component` se extend hota hai.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}
````

---

## 🔹 Function Component kya hota hai?

Function Component ek **simple JavaScript function** hota hai
jo JSX return karta hai.

```jsx
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}
```

---

## 🔹 State Handling

### 🔸 Class Component

```jsx
this.state = { count: 0 };

this.setState({ count: this.state.count + 1 });
```

### 🔸 Function Component (Hooks)

```jsx
const [count, setCount] = useState(0);
setCount(count + 1);
```

👉 Hooks ne function components ko powerful bana diya

---

## 🔹 Lifecycle Methods vs Hooks

| Class Component      | Function Component |
| -------------------- | ------------------ |
| componentDidMount    | useEffect          |
| componentDidUpdate   | useEffect          |
| componentWillUnmount | useEffect cleanup  |

---

## 🔹 `this` keyword difference

### ❌ Class Component

* `this` use karna padta hai
* Binding issues hote hain

### ✅ Function Component

* `this` nahi hota
* Clean & simple

---

## 🔹 Performance

👉 Function Components + Hooks:

* Faster
* Less memory usage
* Easier optimization

---

## 🔹 Code Readability

| Feature        | Class  | Function |
| -------------- | ------ | -------- |
| Boilerplate    | Zyada  | Kam      |
| Readability    | Medium | High     |
| Learning curve | High   | Low      |

---

## 🔹 Error Handling

* Class component → `componentDidCatch`
* Function component → Error Boundary **sirf class me possible** (abhi)

---

## 🔹 Current React Recommendation

👉 React team **Function Components + Hooks** recommend karti hai

Class components **deprecated nahi hain**,
but **rare cases** me use hote hain.

---

## 🔹 Interview Comparison Table (Important)

| Feature      | Class Component | Function Component |
| ------------ | --------------- | ------------------ |
| Syntax       | ES6 Class       | JS Function        |
| State        | this.state      | useState           |
| Lifecycle    | Yes             | Hooks              |
| this keyword | Yes             | No                 |
| Hooks        | ❌               | ✅                  |
| Preferred    | ❌               | ✅                  |

---

## 🧠 One-Line Summary

> Class components React ka old approach hai, jabki function components hooks ke saath modern, clean aur preferred approach hai.

---

## ✅ Interview Answer (Short & Perfect)

> Class components ES6 classes par based hote hain aur lifecycle methods use karte hain, jabki function components hooks ke saath same functionality simple aur efficient way me provide karte hain. Aaj-kal React function components ko prefer karta hai.

---

## 🔥 Interview Tip

👉 Hooks mention karo
👉 `this` problem bolo
👉 React recommendation add karo
