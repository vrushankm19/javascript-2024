# 📌 Prototype ( `__proto__` ) in JavaScript

## 🔹 Prototype kya hota hai?

> JavaScript me har object ke paas ek hidden property hoti hai jise bolte hain **prototype**.

Simple words me:

👉 Object dusre object se properties inherit kar sakta hai
👉 Is system ko bolte hain **Prototypal Inheritance**

---

# 🔥 Sabse Important Line

> JavaScript prototype-based language hai, class-based nahi.

---

# 🔹 Example 1 (Basic Object)

```js
let obj = {
  name: "Rahul"
};

console.log(obj.toString());
```

Tumne `toString()` define nahi kiya
Fir bhi kaam kar raha hai ❓

👉 Kyunki:

```
obj → Object.prototype → null
```

`toString()` Object.prototype se aa raha hai

---

# 🔹 **proto** kya hota hai?

`__proto__` ek reference hota hai jo batata hai:

👉 Ye object kis object se inherit kar raha hai

```js
console.log(obj.__proto__);
```

Ye show karega:

```
Object.prototype
```

---

# 🔥 Constructor Function Example

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello " + this.name);
};

let p1 = new Person("Rahul");
p1.sayHello();
```

### Memory me kya hota hai?

```
p1
 ↓
Person.prototype
 ↓
Object.prototype
 ↓
null
```

Isko bolte hain:

# 🔥 Prototype Chain

---

# 📌 Prototype Chain kya hoti hai?

Jab JS kisi property ko find karta hai:

1. Pehle object me dekhta hai
2. Nahi mila → prototype me dekhta hai
3. Fir uske prototype me
4. Jab tak null na mil jaye

---

# 🔹 Modern Way (Object.create)

```js
let animal = {
  eats: true
};

let dog = Object.create(animal);

console.log(dog.eats); // true
```

👉 `dog` ka prototype = `animal`

---

# 🔥 Important Difference

| Term            | Meaning                   |
| --------------- | ------------------------- |
| prototype       | Function ka property      |
| **proto**       | Object ka reference       |
| Prototype Chain | Inheritance lookup system |

---

# 🔹 Class me bhi prototype use hota hai

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hi " + this.name);
  }
}
```

Behind the scenes:

👉 `greet()` actually `Person.prototype` me add hota hai

---

# 🧠 Real Life Example

Socho:

* Ek parent ke paas ghar hai
* Child ke paas khud ka ghar nahi
* Wo parent ka use karta hai

👉 Ye hi prototype inheritance hai 😄

---

# 🎯 Interview One-Line Answer

> JavaScript me prototype ek mechanism hai jisse objects dusre objects se properties aur methods inherit karte hain, aur ye prototype chain ke through work karta hai.

---

# 🔥 Very Important Interview Points

✔ JS is prototype-based language
✔ Har function ke paas prototype property hoti hai
✔ Har object ke paas **proto** hota hai
✔ Lookup prototype chain me hota hai
✔ Classes bhi internally prototype use karti hain

