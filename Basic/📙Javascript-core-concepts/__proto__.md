# 1️⃣ Prototype kya hota hai?

JavaScript ek **prototype-based language** hai.

👉 Har **JavaScript object** ke paas ek hidden property hoti hai:

```
[[Prototype]]
```

Isko access karne ke liye hum commonly use karte hain:

```
__proto__
```

Prototype ka matlab:

> Ek object dusre object se properties aur methods inherit kar sakta hai.

---

## Example

```javascript
const person = {
  greet() {
    console.log("Hello");
  }
};

const user = {
  name: "Rahul"
};

user.__proto__ = person;

user.greet();
```

Output:

```
Hello
```

Explanation:

* `user` object me `greet()` nahi hai
* JS prototype chain me check karega
* `person` me mil gaya → run ho gaya

---

# 2️⃣ Prototype Chain

JavaScript property search karte waqt ek chain follow karta hai.

Example:

```javascript
const obj = {
  name: "Amit"
};

console.log(obj.toString());
```

Question: `toString()` kaha se aaya?

Flow:

```
obj
 ↓
Object.prototype
 ↓
null
```

`toString()` **Object.prototype** me hota hai.

Is process ko **prototype chain** bolte hain.

---

# 3️⃣ Prototypal Inheritance kya hai?

Jab ek object dusre object ki properties aur methods inherit karta hai **via prototype**, use kehte hain:

> **Prototypal Inheritance**

---

## Example

```javascript
const animal = {
  eat() {
    console.log("Eating...");
  }
};

const dog = Object.create(animal);

dog.bark = function () {
  console.log("Barking...");
};

dog.eat();
dog.bark();
```

Output:

```
Eating...
Barking...
```

Explanation:

```
dog
 ↓
animal
 ↓
Object.prototype
 ↓
null
```

Dog ne animal se method inherit kiya.

---

# 4️⃣ Constructor Function + Prototype

Ye real interview example hota hai.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello " + this.name);
};

const user1 = new Person("Rahul");

user1.sayHello();
```

Output:

```
Hello Rahul
```

Flow:

```
user1
 ↓
Person.prototype
 ↓
Object.prototype
 ↓
null
```

---

# 5️⃣ Prototype ka fayda

Agar method prototype me ho to:

❌ Har object me duplicate nahi banta
✅ Memory efficient hota hai

Wrong way:

```javascript
function User(name) {
  this.name = name;

  this.sayHi = function () {
    console.log("Hi");
  };
}
```

Right way:

```javascript
User.prototype.sayHi = function () {
  console.log("Hi");
};
```

---

# 6️⃣ Modern JavaScript (class syntax)

JS class bhi internally prototype use karta hai.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const p1 = new Person("Rahul");
p1.greet();
```

Actually behind the scenes:

```
greet → Person.prototype
```

---

# 7️⃣ Prototype vs Prototypal Inheritance

| Concept                | Meaning                                                     |
| ---------------------- | ----------------------------------------------------------- |
| Prototype              | Object ka reference jisse properties inherit hoti hain      |
| Prototypal Inheritance | Mechanism jisse objects dusre objects se inherit karte hain |

---

# 🎯 Interview Ready Answer

Agar interviewer pooche:

**What is prototypal inheritance in JavaScript?**

Tum bol sakte ho:

> JavaScript uses prototypal inheritance where objects can inherit properties and methods from other objects through the prototype chain. When a property is accessed, JavaScript first checks the object itself, then its prototype, and continues up the chain until it finds the property or reaches null.
