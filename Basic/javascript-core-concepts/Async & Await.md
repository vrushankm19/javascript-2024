# JavaScript `async / await` – Interview & Revision Notes

## 1. `async / await` kya hota hai?

`async / await` JavaScript me **Promises ko handle karne ka modern aur readable tarika** hai.

* `async` function **hamesha Promise return karta hai**
* `await` Promise ke resolve hone ka wait karta hai
* Code **synchronous jaisa dikhta hai**, par hota asynchronous hai

---

## 2. Basic Syntax

```js
async function myFunc() {
  let result = await somePromise
  console.log(result)
}
```

### Yaad rakhne wali baat:

* `await` **sirf async function ke andar** use hota hai
* `await` program ko block nahi karta, sirf us function ko pause karta hai

---

## 3. Aapka Example Code (With Explanation)

### Weather Promise Creation

```js
let delhiWeather = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("27 Deg")
  }, 2000)
})
```

✔️ 2 seconds baad Promise resolve ho jayega

```js
let bangaloreWeather = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("21 Deg")
  }, 5000)
})
```

✔️ 5 seconds baad Promise resolve ho jayega

---

## 4. `harry()` async function

```js
async function harry() {
  console.log("Fetching Delhi Weather Please wait ...")
  let delhiW = await delhiWeather
  console.log("Fetched Delhi Weather: " + delhiW)

  console.log("Fetching Bangalore Weather Please wait ...")
  let bangaloreW = await bangaloreWeather
  console.log("Fetched Bangalore Weather: " + bangaloreW)

  return [delhiW, bangaloreW]
}
```

### Explanation:

* `await delhiWeather` → jab tak Promise resolve nahi hota, function pause
* Pehle Delhi ka result milega (2 sec)
* Phir Bangalore ka result milega (5 sec)
* Last me function **array return karta hai**

👉 `async function` return karta hai:

```js
Promise<[delhiW, bangaloreW]>
```

---

## 5. `cherry()` async arrow function

```js
const cherry = async () => {
  console.log("Hey I am cherry and I am not waiting")
}
```

### Important Point:

* Ye bhi Promise return karega
* Lekin isme `await` nahi hai
* Isliye ye turant execute ho jata hai

---

## 6. `main1()` – Program Flow Control

```js
const main1 = async () => {
  console.log("Welcome to weather control room")
  let a = await harry()
  let b = await cherry()
}
```

### Execution Flow:

1. `Welcome to weather control room`
2. `harry()` call → wait karega (total ~7 sec)
3. `cherry()` call → turant execute

---

## 7. ❌ Common Mistake (Important)

```js
a.then((value) => {
  console.log(value)
})
```

### ❌ Galat kyu?

* `a` already **resolved value** hai (array)
* `.then()` sirf Promise pe lagta hai

### ✅ Correct Ways

#### Option 1: Direct use

```js
console.log(a)
```

#### Option 2: Promise handle karna ho to

```js
harry().then(value => console.log(value))
```

---

## 8. Interview Important Questions ⭐

### Q1. `async` function kya return karta hai?

**Answer:** Hamesha ek Promise return karta hai.

---

### Q2. `await` kya karta hai?

**Answer:** Promise resolve hone tak async function ko pause karta hai.

---

### Q3. Kya `await` main file ko block karta hai?

**Answer:** Nahi, sirf us async function ko block karta hai.

---

### Q4. `async/await` vs `.then()`

**Answer:** `async/await` zyada readable aur clean syntax deta hai.

---

## 9. One‑Line Interview Explanation

> "Async/await JavaScript me Promises ko handle karne ka modern tarika hai jisme async function Promise return karta hai aur await uske resolve hone ka wait karta hai bina main thread block kiye."

---

## 10. Quick Revision Sheet 📝

* `async` → Promise return
* `await` → Promise ka result
* `await` sirf async ke andar
* Multiple awaits → sequence me execute
* `.then()` aur `await` mix mat karo

---


## 1️⃣ Complete Working Code (As It Is)

```js
async function harry() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 Deg")
    }, 2000)
  })

  let bangaloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 Deg")
    }, 5000)
  })

  console.log("Fetching Delhi Weather Please wait ...")
  let delhiW = await delhiWeather
  console.log("Fetched Delhi Weather: " + delhiW)

  console.log("Fetching Bangalore Weather Please wait ...")
  let bangaloreW = await bangaloreWeather
  console.log("Fetched Bangalore Weather: " + bangaloreW)

  return [delhiW, bangaloreW]
}

const cherry = async () => {
  console.log("Hey I am cherry and I am not waiting")
}

const main1 = async () => {
  console.log("Welcome to weather control room")

  let a = await harry()
  let b = await cherry()

  console.log(a)
}

main1()
```

---