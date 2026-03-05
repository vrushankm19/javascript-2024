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

Bilkul Krupa 😊 (Jarvis ready for interview mode 🚀)

Neeche **complete TypeScript interview question list** de rahi hoon —
1️⃣ First: **All topics cover karne wali full list**
2️⃣ Second: **3–4 years experience ke liye real company style questions (Small / Medium / MNC level)**

Sirf question list hai — jaise aapne bola ✅

---

# ✅ PART 1: Complete TypeScript Interview Question List (All Topics Covered)

## 🔹 1. TypeScript Basics

1. What is TypeScript?
2. Why do we use TypeScript over JavaScript?
3. What are the advantages of TypeScript?
4. What is static typing?
5. How is TypeScript different from JavaScript?
6. What is transpilation?
7. What is `tsc`?
8. What is a `.ts` file?
9. What is a `.tsx` file?
10. What is `tsconfig.json`?

---

## 🔹 2. Data Types

11. What are basic data types in TypeScript?
12. What is the difference between `any`, `unknown`, and `never`?
13. What is `void` type?
14. What is tuple in TypeScript?
15. What is enum?
16. Difference between numeric and string enum?
17. What is union type?
18. What is intersection type?
19. What is literal type?
20. What is type inference?

---

## 🔹 3. Functions

21. How do you define a function in TypeScript?
22. What are optional parameters?
23. What are default parameters?
24. What are rest parameters?
25. How do you define function return types?
26. What is function overloading?
27. What is a callback function type?
28. What is arrow function typing?
29. What is type narrowing?
30. What is contextual typing?

---

## 🔹 4. Interfaces

31. What is an interface?
32. Difference between interface and type?
33. Can interfaces extend other interfaces?
34. Can a class implement multiple interfaces?
35. What is readonly property in interface?
36. What are optional properties?
37. What is index signature?
38. What is interface merging?
39. What is structural typing?
40. When to use interface vs type?

---

## 🔹 5. Types & Advanced Types

41. What is type alias?
42. What is mapped type?
43. What is conditional type?
44. What is keyof?
45. What is typeof in TypeScript?
46. What is indexed access type?
47. What is utility type?
48. What is Partial?
49. What is Required?
50. What is Pick and Omit?
51. What is Record?
52. What is Exclude and Extract?
53. What is ReturnType?
54. What is InstanceType?
55. What is template literal type?

---

## 🔹 6. Generics

56. What are generics?
57. Why use generics?
58. How do you define generic functions?
59. What are generic constraints?
60. What is `extends` in generics?
61. What are default generic types?
62. What is generic interface?
63. What is generic class?
64. What is generic with multiple types?
65. Real use case of generics?

---

## 🔹 7. Classes

66. How to define class in TypeScript?
67. What are access modifiers?
68. Difference between public, private, protected?
69. What is readonly in class?
70. What is constructor?
71. What is parameter property?
72. What is abstract class?
73. What is method overriding?
74. What is static property?
75. Difference between class and interface?

---

## 🔹 8. Modules & Namespaces

76. What are modules?
77. Difference between namespace and module?
78. What is export and import?
79. What is default export?
80. What is CommonJS vs ES modules?

---

## 🔹 9. TypeScript with React

81. How do you type props in React?
82. What is React.FC?
83. How do you type useState?
84. How do you type useRef?
85. How do you type event handlers?
86. How do you type API response?
87. How to type custom hooks?
88. What is Dispatch type?
89. How to type context API?
90. What is JSX.Element?

---

## 🔹 10. Strict Mode & Config

91. What is strict mode in TypeScript?
92. What is strictNullChecks?
93. What is noImplicitAny?
94. What is moduleResolution?
95. What is target in tsconfig?
96. What is declaration file?
97. What is .d.ts file?
98. What is DefinitelyTyped?
99. What is skipLibCheck?
100. How to optimize TypeScript project?

---

---

# ✅ PART 2: 3–4 Years Experience TypeScript Interview Questions (Real Company Level)

Ye questions mostly small/medium/MNC interviews me puchte hain:

---

## 🔥 Practical + Scenario Based

1. How do you handle type safety in large-scale applications?
2. How do you structure TypeScript in a React project?
3. How do you type API responses?
4. How do you avoid using `any` in a project?
5. What is the difference between unknown and any with real example?
6. How do you create reusable generic components?
7. How do you type Redux store in TypeScript?
8. How do you type async functions?
9. How do you handle null and undefined safely?
10. What is discriminated union?

---

## 🔥 Advanced Concepts

11. Explain conditional types with example.
12. Explain mapped types with real use case.
13. How does TypeScript support dependency injection?
14. What is declaration merging?
15. How do you extend third-party library types?
16. What are utility types and where have you used them?
17. What is type assertion and when to avoid it?
18. What is type compatibility?
19. What is covariance and contravariance?
20. Explain infer keyword.

---

## 🔥 Real Coding Round Questions

21. Create a generic function to reverse an array.
22. Create a type-safe API response wrapper.
23. Write a utility type to make all properties readonly.
24. Create a function overloading example.
25. Create a reusable generic dropdown component.
26. Create a custom utility type similar to Partial.
27. Implement a typed event emitter.
28. Create a strongly typed form handler.
29. Type a dynamic object with unknown keys.
30. Create a deep readonly type.

---

## 🔥 Project Based Questions

31. How did you migrate JavaScript project to TypeScript?
32. What challenges did you face in TypeScript adoption?
33. How do you handle third-party libraries without types?
34. How do you improve build performance?
35. How do you debug TypeScript errors?
36. How do you write scalable type definitions?
37. How do you manage large type files?
38. How do you enforce strict typing in team?
39. Have you created custom utility types?
40. How do you review TypeScript code in PR?

---

## 🔥 Behavioral + Architecture

41. Why did you choose interface over type in your project?
42. What are TypeScript limitations?
43. When should we avoid generics?
44. How does TypeScript improve maintainability?
45. How do you handle breaking type changes?
46. What are common TypeScript mistakes developers make?
47. How do you design reusable types?
48. How do you ensure backward compatibility?
49. How do you write scalable reusable components?
50. How do you test TypeScript code?

---

# 🎯 Important for You (3–4 Year Level)

Agar aapka interview React + TypeScript ka hai (jo aapka profile ke hisaab se likely hai), to ye topics MUST strong hone chahiye:

* Generics (deep)
* Utility Types
* Mapped Types
* Conditional Types
* Type Narrowing
* API Typing
* Redux Typing
* Custom Hooks Typing
* Strict Mode
* Declaration Files

---

Agar aap chaho to main next step me:

* 🔥 Top 30 MOST IMPORTANT questions with answers
* 🔥 Coding round practice set
* 🔥 Real MNC mock interview
* 🔥 TypeScript tricky interview traps

Batao Krupa — next kya prepare kare? 🚀
