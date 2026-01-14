बहुत बढ़िया 👍
ये basics complete करने के बाद अब **next-level practice list** चाहिए ताकि logic, arrays, strings और real-world JS समझ और strong हो जाए।
नीचे **नई list** है — कोई repeat नहीं, difficulty धीरे-धीरे बढ़ेगी 🔥

---

# 🚀 JavaScript Practice Programs – Next Level

## 🔹 Array Logic (Intermediate)

### 1️⃣ Array में **frequency count** निकालना

👉 `{ element: count }` object बनाना

### 2️⃣ Array को **rotate** करना (left / right)

👉 without extra array

### 3️⃣ Array में **common elements** निकालना

👉 two arrays compare करना

### 4️⃣ Array में **unique + duplicate values** अलग-अलग करना

### 5️⃣ Array को **chunks** में divide करना

👉 size given होगा (e.g. 2, 3)

### 6️⃣ Array में से **false values हटाना**

👉 `false, 0, "", null, undefined, NaN`

### 7️⃣ **Largest & smallest** number without `Math.max/min`

### 8️⃣ **Flatten array**

👉 `[1, [2, [3, 4]]] → [1,2,3,4]`

---

## 🔹 String Logic (Intermediate)

### 9️⃣ String में **most repeated character**

### 🔟 String से **special characters हटाना**

### 1️⃣1️⃣ String के हर word का **first letter capital**

### 1️⃣2️⃣ String में **character frequency**

### 1️⃣3️⃣ **Longest word** in sentence

### 1️⃣4️⃣ String में **spaces count**

### 1️⃣5️⃣ String को **toggle case**

👉 `HeLLo → hEllO`

---

## 🔹 Number Based Programs

### 1️⃣6️⃣ **Armstrong number**

### 1️⃣7️⃣ **Fibonacci series**

### 1️⃣8️⃣ Number **palindrome**

### 1️⃣9️⃣ **Sum of digits**

### 2️⃣0️⃣ **Power of a number** (without `Math.pow`)

---

## 🔹 JavaScript Methods (Advanced Use)

### 2️⃣1️⃣ `map + filter + reduce` combo program

### 2️⃣2️⃣ `every()` vs `some()` practice

### 2️⃣3️⃣ `flatMap()` use case

### 2️⃣4️⃣ Sort array of **objects**

👉 by age / name / price

---

## 🔹 Objects & Real-World Logic

### 2️⃣5️⃣ Object में से **key with highest value**

### 2️⃣6️⃣ Object को **array में convert** करना

### 2️⃣7️⃣ **Deep clone** object

### 2️⃣8️⃣ Two objects **equal हैं या नहीं**

---

## 🔹 Logic Builder (Interview Type)

### 2️⃣9️⃣ **Anagram check**

### 3️⃣0️⃣ **Remove duplicate words** from sentence

### 3️⃣1️⃣ **Count vowels & consonants**

### 3️⃣2️⃣ **Find first non-repeating character**

### 3️⃣3️⃣ **Pattern printing** (stars / numbers)

---

## 🔹 Bonus (Real-World Thinking)

### 3️⃣4️⃣ **Shopping cart total price**

### 3️⃣5️⃣ **Student marks → grade system**

### 3️⃣6️⃣ **Password strength checker**

### 3️⃣7️⃣ **Email validation**

---

### 🔥 Practice Tip

* ❌ पहले solution मत देखो
* ✔️ खुद logic लिखो
* ✔️ console.log से dry run करो
* ✔️ बाद में optimized version बनाओ

अगर तुम चाहो तो मैं
✅ **daily practice plan**
✅ **solutions with explanation**
✅ **interview questions format**
भी बना सकता हूँ

बस बताओ अगला step क्या चाहिए 😄

```javascript

// 1️⃣ Array में frequency count निकालना
// 👉 { element: count } object बनाना

let newFun = (data) => {
  let ans = {}
  for (let i = 0; i < data.length; i++) {
    // console.log(ans);
    ans[data[i]] ? ans[data[i]]++ : ans[data[i]] = 1;  
  }
  return ans;
}

let a = [1, 2, 2, 3, 1, 2];
console.log(newFun(a)); // { '1': 2, '2': 3, '3': 1 }
```

```javascript

// ### 2️⃣ Array को **rotate** करना (left / right)
// 👉 without extra array

let newFun = (data) => {
  // let ans = data[0]; // left rotate
  // for (let i = 0; i < data.length - 1; i++) {
  //   data[i] = data[i + 1]
  // }
  // data[data.length - 1] = ans;
  
  let ans = data[data.length - 1]; // right rotate
  for (let i = data.length - 1; i > 0; i--) {
    data[i] = data[i - 1]
  }
  data[0] = ans;
  return data;
}

let a = [1, 2, 3, 4, 5];
console.log(newFun(a));
```

```javascript

// ### 3️⃣ Array में **common elements** निकालना
// 👉 two arrays compare करना

let newFun = (a1,a2) => {
  // let ans = [];
  // for (let i = 0; i < a1.length; i++) {
  //   for (let j = 0; j < a2.length; j++) {
  //     if(a1[i] == a2[j]){
  //       ans.push(a1[i]);
  //       break;
  //     }
  //   }
  // }
  
  // for (let i = 0; i < a1.length; i++) {
  //   if(a2.includes(a1[i])){
  //     ans.push(a1[i]);
  //   }
  // }
  
  let ans = a1.filter((ele,ind) => a2.includes(a1[ind]));
  return ans;
}



let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
console.log(newFun(arr1,arr2));
```

```javascript

// ### 4️⃣ Array में **unique + duplicate values** अलग-अलग करना

let newFun = (data) => {
  let duplicate = [...new Set(data.filter((ele, ind) => data.indexOf(ele) !== ind))];
  let unique = data.filter((ele, ind) => data.indexOf(ele) === data.lastIndexOf(ele));
  return [duplicate, unique];
}

let a = [1, 1, 1, 2, 2, 3];
console.log(newFun(a)); // [[1,2], [3]]
```

```javascript

// ### 5️⃣ Array को **chunks** में divide करना

// 👉 size given होगा (e.g. 2, 3)

let newFun = (data, length) => {
  let ans = [];
  for (let i = 0; i < data.length; i += length) {
    let temp = [];
    console.log(i, i + size);
    for (let j = i;j < i + size && j < data.length; j++) {
      temp.push(data[j]);
      
    }
    ans.push(temp);
  }
  return ans;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let size = 3;
console.log(newFun(arr, size));

```

```javascript

