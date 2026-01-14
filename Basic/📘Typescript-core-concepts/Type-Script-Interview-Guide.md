# TypeScript Interview Guide (Hinglish)

## 1. TypeScript Kya Hai?

TypeScript ek **superset of JavaScript** hai, jo Microsoft ne banaya hai. Iska matlab ye hai ki:

* Jo bhi valid JavaScript code hai, wo TypeScript me bhi valid hota hai
* TypeScript extra features deta hai jaise **static typing**, **interfaces**, **enums**, **generics**

Simple words me: **TypeScript = JavaScript + Types**


---

## 2. TypeScript Kyun Use Karte Hain?

Interview me ye points bol sakte ho:

* **Errors pehle pakad leta hai (compile time pe)**
* **Code zyada readable aur maintainable hota hai**
* **Large projects ke liye best**
* **Better IDE support (auto-suggestion, intellisense)**
* **JavaScript bugs kam ho jaate hain**

---

## 3. TypeScript Kaise Work Karta Hai?

TypeScript directly browser me nahi chalta.

### Flow samjho:

```
.ts file  →  TypeScript Compiler (tsc)  →  .js file  →  Browser / Node.js
```

* Hum **.ts** file likhte hain
* `tsc` usko **.js** me convert karta hai
* Browser sirf **JavaScript** samajhta hai

---

## 4. TypeScript Install Kaise Kare?

### Step 1: Node.js install hona chahiye

Check:

```bash
node -v
npm -v
```

### Step 2: TypeScript install karo (globally)

```bash
npm install -g typescript
```

Check version:

```bash
tsc -v
```

---

## 5. TypeScript Project Me Kaunse Files Create Hote Hain?

### (1) `index.ts`

* Ye main TypeScript file hoti hai
* Isme hum TypeScript code likhte hain

Example:

```ts
let username: string = "Rahul";
let age: number = 25;

console.log(username, age);
```

---

### (2) `tsconfig.json`

* Ye **TypeScript configuration file** hoti hai
* Ye batati hai compiler kaise kaam kare

Create karne ke liye command:

```bash
tsc --init
```

Important options:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "outDir": "dist",
    "rootDir": "src"
  }
}
```

Interview point:

> `tsconfig.json` project ke rules define karta hai

---

### (3) `dist/` Folder

* Isme **compiled JavaScript files** hoti hain
* Ye folder automatically create hota hai

---

### (4) `src/` Folder (optional but recommended)

* Isme saari `.ts` files hoti hain
* Clean project structure ke liye

---

## 6. TypeScript Compile Kaise Karte Hain?

Single file compile:

```bash
tsc index.ts
```

Pure project compile:

```bash
tsc
```

Watch mode (auto compile):

```bash
tsc --watch
```

---

## 7. Basic Types in TypeScript (Very Important)

```ts
let isLoggedIn: boolean = true;
let userName: string = "Amit";
let age: number = 30;
let skills: string[] = ["JS", "TS"];
let data: any = "anything";
```

Interview Tip:

> `any` type avoid karna chahiye kyunki ye TypeScript ka fayda khatam kar deta hai

---

## 8. Functions in TypeScript

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

Arrow function:

```ts
const multiply = (a: number, b: number): number => a * b;
```

---

## 9. Interface (Interview Favorite)

Interface ka use object ka structure define karne ke liye hota hai.

```ts
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

const user1: User = {
  name: "Rahul",
  age: 25,
  isAdmin: false
};
```

Interview line:

> Interface ensures ki object ka structure same rahe

---

## 10. Type vs Interface (Short Difference)

| Type          | Interface                     |
| ------------- | ----------------------------- |
| Union support | Object structure ke liye best |
| Complex types | Extendable                    |

Example:

```ts
type ID = number | string;
```

---

## 11. Enum

```ts
enum Role {
  Admin,
  User,
  Guest
}

let myRole: Role = Role.Admin;
```

---

## 12. Class in TypeScript

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}
```

---

## 13. Access Modifiers

* `public` (default)
* `private`
* `protected`

```ts
class Employee {
  private salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }
}
```

---

## 14. TypeScript vs JavaScript (Interview Question)

| TypeScript         | JavaScript     |
| ------------------ | -------------- |
| Static typing      | Dynamic typing |
| Compile time error | Runtime error  |
| Large projects     | Small scripts  |

---

## 15. Interview Me Bolne Layak One-Liner

* "TypeScript JavaScript ka superset hai"
* "TypeScript compile hoke JavaScript banta hai"
* "TypeScript me errors compile time pe mil jaate hain"
* "Browser TypeScript nahi samajhta, sirf JavaScript"

---

## 16. Conclusion

TypeScript ka main goal hai:

* **Code ko safe banana**
* **Bugs kam karna**
* **Scalable applications banana**

Agar aap JavaScript jaante ho, to TypeScript seekhna easy hai 👍

---

**Best of luck for your interview 🚀**
