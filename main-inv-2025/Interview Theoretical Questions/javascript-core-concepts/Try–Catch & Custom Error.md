# JavaScript Try–Catch & Custom Error (Interview Notes)

## 1. Try–Catch–Finally kya hota hai?

JavaScript me **try–catch** ka use runtime errors ko handle karne ke liye hota hai, taaki program crash na ho.

### Structure:

```js
try {
   // risky code (jisme error aa sakta hai)
} catch (error) {
   // error handle karne ka code
} finally {
   // hamesha chalega (error aaye ya na aaye)
}
```

---

## 2. Aapka Example Code (Samjha hua)

```js
// Tips let a = +prompt("Enter first number"); apko pars

let a = prompt("Enter first number")
let b = prompt("Enter second number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)
```

### Explanation:

* `prompt()` user se input leta hai (string format me)
* `isNaN()` check karta hai value number hai ya nahi
* Agar number nahi hai → **custom error throw kiya**
* `parseInt()` string ko number me convert karta hai

---

## 3. Custom Error kya hota hai?

Jab hum **khud ka error manually throw karte hain**, use custom error kehte hain.

### Syntax:

```js
throw new Error("Error message")
```

### Aapke Code me:

```js
throw SyntaxError("Sorry this is not allowed")
```

✔️ Matlab: Agar input number nahi hai, to program forcefully error throw karega.

---

## 4. try–catch with Function

```js
function main(){
    let x = 1;
    try {
        console.log("The sum is ", sum * x)
        return true
    } catch (error) {
        console.log("Error aa gaya bhai")
        return false
    } finally { // ye code return ke baad bhi chalega
        console.log("files are being closed and db connection is being closed")
    }
}
```

### Line-by-line samjho:

#### `try` block

* Yaha risky code likhte hain
* Agar error nahi aaya → normally execute hoga

#### `catch (error)`

* Agar try block me error aaya
* Program crash nahi hota
* Error handle hota hai

#### `finally`

* **Hamesha execute hota hai**
* Return ke baad bhi ⭐
* Mostly use hota hai:

  * file close karne
  * DB connection close karne

---

## 5. Important Interview Points ⭐

### Q1. try–catch ka use kyu karte hain?

**Answer:** Program ko crash hone se bachane aur errors ko handle karne ke liye.

---

### Q2. finally block kab execute hota hai?

**Answer:** Hamesha execute hota hai, chahe error aaye ya return statement ho.

---

### Q3. Custom error kya hota hai?

**Answer:** Jab developer khud condition ke basis par error throw karta hai.

---

### Q4. throw keyword ka kaam kya hai?

**Answer:** Manually error generate karna.

---

## 6. Short Revision (One Look)

* `try` → risky code
* `catch` → error handle
* `finally` → cleanup work
* `throw` → custom error
* `isNaN()` → number check

---

## 7. One-Line Interview Explanation

> "Main JavaScript me try–catch ka use runtime errors handle karne ke liye karta hu, aur throw keyword se custom errors generate karta hu. finally block cleanup operations ke liye use hota hai."

---
## 8. Quick Summary (Save this)
> **Try–Catch** JavaScript me error handling ke liye hota hai. **Throw** se custom errors create karte hain. **Finally** block hamesha execute hota hai, chahe error aaye ya na aaye.

---

