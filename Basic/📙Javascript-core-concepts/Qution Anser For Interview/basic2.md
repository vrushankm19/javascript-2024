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

  // for (let key in ans) {            // option 2
  //   ans[key] = (ans[key] || 0) + 1;
  // }
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
## 6️⃣ Array in remove false values ##

let newFun = (data) => {
  let ans = [];
  for(let i = 0;i < data.length;i++){
    let anstf = false;
    for(let j = 0;j < ans.length;j++){
      if(data[i] == ans[j]){
        anstf = true;
        break
      }
    }
    if(!anstf){
      ans.push(data[i]);
    }
  }
  return ans;
}

let a = [1,2,3,1,2,4,5,4];
console.log(newFun(a))

// Output: [1,2,3,4,5]
```

```javascript

### 8️⃣ **Flatten array**

👉 `[1, [2, [3, 4]]] → [1,2,3,4]`

let newFun = (data) => {
  let ans = [];
  for(let i = 0;i < data.length;i++){
    // console.log(data[i]);
    if(Array.isArray(data[i])){
      ans.push(...newFun(data[i]));
    } else{
     ans.push(data[i]); 
    }
  }
  return ans;
}

let a = [1,2,3,[4,[5,6,[7]]]];
console.log(newFun(a));

// Output: [1,2,3,4,5,6,7]
```

```javascript

// ### 9️⃣ String में **most repeated character**
let newFun = (data) => {
  let newObj = {}
  for (let prop of data) {
    newObj[prop] = (newObj[prop] || 0) + 1;
  }
  
  let countAlph = 0;
  let alphMain = "";
  
  for (let prop in newObj) {
    if(countAlph < newObj[prop]){
      countAlph = newObj[prop];
      alphMain = prop
    }
  }
  return `count is : ${countAlph} Alphbet is ${alphMain}`;
}

let str = "programminggg";
console.log(newFun(str))

// Output: count is : 4 Alphbet is g
```

```javascript

// ### 🔟 String से **special characters हटाना**

let str = "He@llo! Wo#rld$ 123";
let cleanStr = str.replace(/[^a-zA-Z0-9 ]/g, "");

console.log(cleanStr);

// Output: Hello World 123
```

```javascript
// ### 1️⃣1️⃣ String के हर word का **first letter capital**

function newFun(data) {
  let ans = data.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  // let ans = data.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
  return ans
}

let a = "vrushank modi";
console.log(newFun(a));

// Output: Vrushank Modi
```

```javascript
// ### 1️⃣2️⃣ String में **character frequency**

function newFun(data) {
  let ans = {};
  for(let i of data.toLowerCase()){
    ans[i] = (ans[i] || 0) + 1;
  }
  return ans;
}

let a = "AaaaBaCcc";
console.log(newFun(a))
// Output: { a: 5, b: 1, c: 3 }
```
```javascript
// ### 1️⃣3️⃣ **Longest word** in sentence [अगर input में कोई specific character दिया जाए (जैसे ‘a’), तो सिर्फ उसी का count return करो]

function newFun(data, alphFind) {
  let ans = {};
  for(let inValue of data.toLowerCase()){
    if(inValue == " ") continue;
    ans[inValue] = (ans[inValue] || 0) + 1;
  }
  return ans;
}

let a = "Vrushank vru rrrrrrr";
console.log(newFun(a, " "))

// Output: { v: 2, r: 9, u: 2, s: 1, h: 1, a: 2, n: 1, k: 1 }
```

```javascript
// ### 1️⃣5️⃣ String को **toggle case**
// 👉 `HeLLo → hEllO`

function newFun(data) {
  return data.split("").map(ele => ele === ele.toUpperCase() ? ele.toLowerCase() : 0 || ele === ele.toLowerCase() ? ele.toUpperCase(): 0).join("")
}

console.log(newFun("kuPi"));

// Output: KUpI
```

``` javascript

// function newFun(...ele){
//   if(!ele.some(ele => ele < 35)){
//     let studTotal = ele.reduce((a,b) => a + b);
//     let mainTotal = 100 * ele.length;
//     let  = ""
//     if(350 < studTotal){
//       result = "A";
//     } else if(250 < studTotal){
//       result = "B";
//     } else if(140 < studTotal){
//       result = "C";
//     } 
//   } else {
//     result = "Fail";
//   }
//   return result;
// }
function newFun(...ele){
  let markTest = ele.some(ele => ele < 35);
  let result = "";
  
  if(!markTest){
    let studTotal = ele.reduce((a,b) => a + b);
    let mainTotal = 100 * ele.length;
    
    switch(!markTest){
      case 350 < studTotal:
      result = "A";
      break;
      
      case 250 < studTotal:
      result = "B";
      break;
      
      default:
      result = "C";
    } 
  } else {
    result = "Fail";
  }
  return result;
}
console.log(newFun(100,90,55,35));

// Output: A
```

``` JavaScript

function newFun(data) {
  let current = "";
  let longest = "";

  for (let i = 0; i < data.length; i++) {
    if (current.includes(data[i])) {
      // console.log(current.indexOf(data[i]), 1)
      current = current.slice(current.indexOf(data[i]) + 1); // हम current स्ट्रिंग को उस करैक्टर के पहले वाले हिस्से से काट रहे हैं, ताकि हम दोहराए गए करैक्टर के बाद वाली नई स्ट्रिंग से जारी रखें।
      // console.log(current)
    }
    current += data[i];
    console.log(current, longest);
    if (current.length > longest.length) {
      longest = current;
    }
    
  }
  return longest;
}

let a = "aabsbscdeas";
console.log(newFun(a)); // Output: "bscdea"

```

``` JavaScript
function newFun(data,fd,cz) {
  return data.map(ele => ele === fd ? ele = cz : ele);
}
function addFun(data,fd,cz) {
  let index = data.indexOf(fd);
  data.splice(index + 1,0,cz);
  return data;
}

let a = [1,2,3,4,5,6,7];
// console.log(newFun(a,2,10)) // find
console.log(addFun(a,5,10))
// Output: [1, 2, 3, 4, 5, 10, 6, 7]
```

``` JavaScript
// Find index of element and remove next element

function addFun(data,fd,cz) {
  let index = data.indexOf(fd);
  data.splice(index + 1,1);
  return data;
}

let a = [1,2,3,4,5,6,7];

console.log(addFun(a,7,10)) // find
// Output: [1, 2, 3, 4, 5, 6]
```

``` JavaScript

// Object in add, remove, update

function updFun(data,pName,pAge) {
  for(let i in data){
    if (data[i].name === pName) {
      data[i].age = pAge;
    }
    // console.log(data[i].name )
  }
  return data;
}

function addFun(data,pObj) {
  data.push(pObj)
  return data;
}

function detFun(data,pName) {
  return data.filter(ele => ele.name != pName);
}

let a = [
  {
    name: "Vrushank",
    age: 20,
    Add: "Pune"
  },
  {
    name: "Kp",
    age: 20,
    Add: "Pune"
  },
  {
    name: "Yash",
    age: 22,
    Add: "Ahmedabad"
  }
]
// console.log(updFun(a,"Kp",28))
// console.log(addFun(a,{
//     name: "Modi",
//     age: 50,
//     Add: "Ahmedabad"
// }))
console.log(detFun(a,"Kp"))

// Output:

```

``` javascript

// ### 1️⃣6️⃣ **Armstrong number**
// 153 => 1*1*1 + 5*5*5 + 3*3*3 = 153 (True) : False

function newFun(data){
  let vLength = String(data).length;
  let sData = String(data).split("");
  let ans = [];
  let lastData = 0;
  for (let i = 0; i < sData.length; i++) {
    // console.log(sData[i]);
    let inData = sData[i];
    for (let j = 0; j < vLength - 1; j++) {
      inData = inData * sData[i];
      // console.log(inData);
    }
    ans.push(inData);
    // break
  }
  for(let lData of ans){
    lastData = lastData + lData
    // console.log(lastData);
  }
  // console.log(data, lastData);
  return data == lastData ? `Your Value is Armstron Num: ${lastData}`: `Your Value is Not Armstron Num: ${lastData}`;
}

let a = 153;
console.log(newFun(a))

// Output: Your Value is Armstron Num: 153
```

``` javascript

// ### 1️⃣6️⃣ **Armstrong number**
// 153 => 1*1*1 + 5*5*5 + 3*3*3 = 153 (True) : False

function newFun(data){
  let vLength = String(data).length;
  let sData = String(data).split("");
  let ans = sData
  .map(ele => Math.pow(Number(ele), vLength))
  .reduce((a,b) => a + b);
  
  return data == ans ? 
  `Your Value is Armstron Num: ${ans}`: 
  `Your Value is Not Armstron Num: ${ans}`;
}

let a = 153;
console.log(newFun(a))

// Output: Your Value is Armstron Num: 153
```

``` javascript
function fibonacci(n) {
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    let next = a + b;
    a = b;
    b = next;
  }
}

fibonacci(10);
// Output: 55
```

``` javascript
// ### 1️⃣7️⃣ **Fibonacci series**
function newFun(data) {
  let arr = [];
  
  if(data >= 1) arr.push(0);
  if(data >= 2) arr.push(1);
  
  for (let i = 2; i < data; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
  }
  return arr
}

console.log(newFun(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

``` javascript
// Sum of digits

function newFun(num){
  return String(num).split("").reduce((a,b) => Number(a) + Number(b))
}

console.log(newFun(1234))
// Output: 10
```

``` javascript
// ### 2️⃣5️⃣ Object में से **key with highest value**
function newFun(dt){
  let ans = 0;
  let ansInd = 0;
  let ndata = Object.entries(dt)
  for (let prop in ndata) {
    if(ndata[prop][1] > ans){
      ans = ndata[prop][1]
      ansInd = ndata[prop][0]
    }
  }
  return [ans, ansInd];
}

const data = {
  a: 10,
  b: 45,
  c: 23,
  d: 67,
  e: 34
};
console.log(newFun(data));
// Output: [67, 'd']
```

``` javascript
// ### 2️⃣5️⃣ Object में से **key with highest value**
function newFun(data){
  
  const maxKey = Object.keys(data).reduce((a, b) => 
    data[a] > data[b] ? a : b
  );
  return maxKey;
}

const data = {
  a: 10,
  b: 45,
  c: 23,
  d: 67,
  e: 34
};
console.log(newFun(data));
// Output: 'd'
```

``` javascript
function newFun(data){
  let ans = {};
  for(let i of data){
    ans[i] = (ans[i] || 0) + 1;
  }
  // let arr = Object.entries(ans).sort((a,b) => )
  let minVal = 999;
  let minInd = 0;
  for(let j in ans){
      if(ans[j] < minVal){
        minVal = ans[j]
        minInd = j
        // console.log(minVal)
      }
  }
  return [minInd, minVal];
}

const str = "abcbcbcacbcbcb";
console.log(newFun(str))
// Output: ['a', 2]

// Version 2
function newFun(data){
  let ans = {};
  for(let i of data){
    ans[i] = (ans[i] || 0) + 1;
  }
  let arr = Object.entries(ans).reduce((a,b) => a < b ? a : b)
  return arr;
}

const str = "abcbcbcacbcbcb";
console.log(newFun(str))
// Output: ['a', 2]
```

``` javascript
function newFun(data){
  let value = String(data).split("");
  let ansIn = value.length;
  return data + value.slice(0, ansIn - 1).reverse().join("");
}

const str = 1234;
console.log(newFun(str));
// Output: 1234321
```

``` javascript
// ### 2️⃣0️⃣ **Power of a number**
function newFun(a,b){
  if(b === 0) return 1;
  let ans = 1;
  let power = Math.abs(b);
  
  for (let i = 0; i < power; i++) {
    ans = ans * a;
  }
  
  return b > 0 ? ans : 1/ans;
}

console.log(newFun(2 ,-2));
// Output: 0.25
```

``` javascript


function newFun(ele){
  let arr = [];
  for(let ind in ele){
    arr.push(ele[ind].first);
  }
  return arr.map(ele => ele).sort();
  // return arr.map(ele => ele.charAt(0).toLowerCase()).sort((a, b) => console.log(typeof a));
  // return arr.charAt(0);
}
 const names = [
   {
     first: "Mahesh",
     last: "kumar",
   },
   {
     first: "Ganesh",
     last: "Sharma",
   },
   {
     first: "Anil",
     last: "Sai",
   },
   {
     first: "Sekhar",
     last: "Martin",
   },
   {
     first: "Abhishek",
     last: "Gupta",
   },
 ];

console.log(newFun(names))
// Output: ['Abhishek', 'Anil', 'Ganesh', 'Mahesh', 'Sekhar']
```

``` javascript
function newFun(obj1,obj2){
  // return JSON.stringify(obj1) === JSON.stringify(obj2);
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  
  if(key1.length !== key2.length) return false;
  
  for(let i of key1){
    if (obj1[i] !== obj2[i]) return false;
  }
  
  return true
}

const obj1 = { name: "Rahul", age: 20 };
const obj2 = { name: "Rahul", age: 20 };

console.log(newFun(obj1,obj2))
// Output: true
```

``` javascript

// ### 2️⃣7️⃣ **Deep clone** object
function newFun(obj1){
  // let a = {...obj1};
  // a.address.pin = 9987;
  // return [a,obj1] // Same
  
  // let a = structuredClone(obj1); // option 1
  let a = JSON.parse(JSON.stringify(obj1))
  
  a.address.pin = 9987;
  return [a,obj1]
}

const obj1 = { 
  name: "Rahul", 
  age: 20, 
  address:{
    pin: 123,
  }
};

console.log(newFun(obj1))
// Output: [{ name: 'Rahul', age: 20, address: { pin: 9987 } }, { name: 'Rahul', age: 20, address: { pin: 123 } }]
```

``` javascript
// Flat Array using flatMap method
function newFun(ele) {
  return ele.flatMap(e => Array.isArray(e) ? newFun(e) : e);
}

console.log(newFun([1, 2, [3, [4, 5, [6, [7]]]]])); 
// Output: [1, 2, 3, 4, 5, 6, 7]
```

``` javascript
// sort arry without sort method
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j + 1]){
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 2, 9, 1, 100])); // [1, 2, 5, 9]
```