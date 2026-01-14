Bilkul 👍 **short & interview-ready Hinglish me** samjho:

---

## TypeScript kaun-kaun si files create karta hai & kyun

### `.js` file → **kyun mandatory hoti hai**

* Browser aur Node.js **TypeScript nahi samajhte**
* TypeScript compile hoke **JavaScript (.js)** banta hai
  👉 Isliye `.js` file **hamesha banti hai**

**One line:**

> TypeScript ka final output hamesha JavaScript hota hai

---

### `.d.ts` file → **kab banti hai, kya kaam hai**

* Ye **Type Declaration file** hoti hai
* Isme sirf **types hote hain**, code nahi
* Tab banti hai jab:

  * aap **library bana rahe ho**
  * `tsconfig.json` me `declaration: true` ho

**Kaam:**

* TypeScript ko batana ki JS code ke **types kya hain**
* IntelliSense & type checking ke liye

---

### `.map` file → **debugging me kaise help karti hai**

* Ye **Source Map file** hoti hai
* `.js` ko original `.ts` se connect karti hai
* Browser me error **TypeScript line number** par dikhata hai

**Matlab:**

> Debug karte time JS nahi, TS code dikhta hai

---

### `tsconfig.json` me kaunse options se ye files banti hain

```json
{
  "compilerOptions": {
    "declaration": true,   // .d.ts file banata hai
    "sourceMap": true      // .map file banata hai
  }
}
```

---

## Interview ke liye short yaad rakhne wali lines 👇

* **`.js`** → final output, browser ke liye
* **`.d.ts`** → sirf types, library & IntelliSense ke liye
* **`.map`** → debugging, TS ko JS se link karta hai

---
