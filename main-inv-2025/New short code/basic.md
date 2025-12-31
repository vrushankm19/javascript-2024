समझ गया 👍
तुम **JavaScript के basic programs** चाहते हो, जिससे तुम **methods सीख सको और practice कर सको**। नीचे मैं **simple से start होकर थोड़े अच्छे level** तक के programs की list दे रहा हूँ।

---

## 🔹 Basic JavaScript Practice Programs (Simple → Useful)

### 1️⃣ Array में **Maximum value** निकालना

👉 methods: `Math.max()`, `spread operator`

### 2️⃣ Array में **Minimum value** निकालना

👉 methods: `Math.min()`

### 3️⃣ Array का **sum निकालना**

👉 methods: `reduce()`

### 4️⃣ Array का **average निकालना**

👉 methods: `reduce()`, `length`

### 5️⃣ **Even और Odd numbers** अलग करना

👉 methods: `filter()`

### 6️⃣ Array में से **duplicate values हटाना**

👉 methods: `Set`, `from()`

### 7️⃣ Array को **ascending / descending** order में sort करना

👉 methods: `sort()`

### 8️⃣ किसी number का **factorial** निकालना

👉 logic + loop

### 9️⃣ Number **prime है या नहीं**

👉 loop + condition

### 🔟 String को **reverse** करना

👉 methods: `split()`, `reverse()`, `join()`

------------------------------------------------------------------------------------

## 🔹 String Based Programs

### 11️⃣ String में **vowels की गिनती**

👉 methods: `includes()`, `length`

### 12️⃣ String **palindrome है या नहीं**

👉 methods: `split()`, `reverse()`

### 13️⃣ किसी sentence में **word count**

👉 methods: `split()`

---------------------------------------------------------------------------------------

## 🔹 JavaScript Methods Practice

### 14️⃣ `map()` का use करके array को double करना

### 15️⃣ `filter()` से positive numbers निकालना

### 16️⃣ `find()` से first matching value ढूंढना

### 17️⃣ `includes()` से value exist करती है या नहीं check करना

---

## 🔹 Small Logic Programs

### 18️⃣ **Swap two numbers**

### 19️⃣ **Missing number in array**

### 20️⃣ **Second largest number** निकालना

---

अगर तुम चाहो तो:

* मैं **एक-एक program का पूरा code समझा सकता हूँ**
* या **daily practice plan** बना सकता हूँ
* या **only array / string / number** के programs दे सकता हूँ

👉 बताओ, **कौन-सा program पहले code करें?** 😊




let newFun = (ele) => {
  let dataMax = dataMin = ele[0];
  for (let i = 0; i <= ele.length; i++) {
    if(ele[i] > dataMax){
      dataMax = ele[i];
    } else if(ele[i] < dataMax) {
      dataMin = ele[i];
    }
  }
  return [dataMax, dataMin];
}

let a = [3,2,3,4,5,9];
console.log(newFun(a));


1️⃣ Array में Maximum value निकालना

👉 methods: Math.max(), spread operator

let newFun = (ele) => {
  let ans = Math.max(...ele);
  return ans
}

let a = [1,2,3,4,5];
console.log(newFun(a));

2️⃣ Array में Minimum value निकालना

let newFun = (ele) => {
  let ans = Math.max(...ele);
  return ans
}

let a = [1,2,3,4,5];
console.log(newFun(a));

__


// 3️⃣ Array का sum निकालना

const newFun = (ele) => {
  // let ans = ele[0];
  // for (let i = 1; i < ele.length; i++) {
  //   ans = ans + ele[i];
  //   // console.log(ans, ele[i], ans);
  // }
  // return ans;
  
  
  let ans2 = ele.reduce((a,b) => a + b, 0);
  return ans2;
}

let a = [10,10,5];
console.log(newFun(a))

--

// Array का average निकालना

const newFun = (ele) => {
  // let lenthNum = ele.length;
  // let ans = ele[0];
  // for (let i = 1; i < ele.length; i++) {
  //   ans = ans + ele[i];
  // }
  // return ans / lenthNum;
  
  
  return ele.reduce((a,b) => a + b, 0) / ele.length;
}


const a = [4,8,6,10,12];
console.log(newFun(a));

--

// 5️⃣ Even और Odd numbers अलग करना

const newFun = (ele) => {
  return ele % 2 === 0;
}

let data = 1;
console.log(newFun(data))

--

// 5️⃣ Even और Odd numbers अलग करना

const newFun = (ele) => {
  return ele.filter((e) => e % 2 === 0, 0);
}

let data = [1,2,3,4,5,6,7];
console.log(newFun(data))

--

// ### 6️⃣ Array में से **duplicate values हटाना**

let newFun = (data) => {
  return data.filter((ele,inx,arr) => ar.indexOf(el) == ix);
}

let a = [1,2,3,4,5,6,2,3];
console.log(newFun(a));


__

// ### 6️⃣ Array में से **duplicate values हटाना**

let newFun = (data) => {
  // return Array.from(new Set(data));
  // return [...new Set(data)];
  return data.filter((ele,inx,arr) => arr.indexOf(ele) == inx);
}

let a = [1,2,3,4,5,6,2,3];
console.log(newFun(a));

__

// ### 7️⃣ Array को **ascending / descending** order में sort करना

let newFun = (data) => {
  return data.sort((a,b) => a - b);
  return data.sort((a,b) => b - a);
} 

let a = [1,6,3,4,2,9,8];
console.log(newFun(a));

--

// ### 8️⃣ किसी number का **factorial** निकालना

// 👉 logic + loop

let newFun = (ele) => {
  let ans = ele;
  for(let i = ele - 1;i > 0; i--){
    ans *= i;
  }
  return ans;
}

console.log(newFun(6))

--

### 9️⃣ Number **prime है या नहीं**

👉 loop + condition

let newFun = (ele) => {
  if (ele <= 1) return "Not Prime Number";

  for (let i = 2; i * i <= ele; i++) {
    if (ele % i === 0) {
      return "Not Prime Number";
    }
  }
  return "Prime Number";
};

console.log(newFun(12));
console.log(newFun(13));


--
// ### 🔟 String को **reverse** करना

// 👉 methods: `split()`, `reverse()`, `join()`

let newFun = (ele) => {
  // let ans = "";
  // for (let i = ele.length - 1; i >= 0; i--) {
  //   ans = ans + ele[i]
  // }
  // return ans
  
  return ele.split("").reverse().join(""); //kat eskpon | sun 
}

let a = "Hello World";
console.log(newFun(a));

---

// ## 🔹 String Based Programs

// ### 11️⃣ String में **vowels की गिनती**

// 👉 methods: `includes()`, `length`

let newFun = (ele) => {
  // let ans = 0;
  // let arr = [];
  // for (let i = 0; i < ele.length; i++) {
  //   if(ele[i] == "a" || ele[i] == "e" || ele[i] == "i" || ele[i] == "o" || ele[i] == "u"){
  //     ans++
  //     arr.push(ele[i]);
  //   } 
  //   // console.log(ele[i]);
  // }
  // return {number: ans, arry: arr};
  
  let ans = 0;
  let check = "aeiou";
  let arr = [];
  
  for (let i = 0; i < ele.length; i++) {
      if(check.includes(ele[i])){
        ans++
        arr.push(ele[i]);
      }
  }
  return {number: ans, arry: arr};
}

let a = "Vrushank";
console.log(newFun(a));

---

// ### 12️⃣ String **palindrome है या नहीं**

// 👉 methods: `split()`, `reverse()`

let newFun = (ele) => {
  let lowerCaseData = ele.toLowerCase();
  let data = lowerCaseData.split("").reverse().join("");
  return data == lowerCaseData;
}

let a = "new";
console.log(newFun(a));

==
let newFun = (ele) => {
  let lowerCaseData = ele.toLowerCase();
  let newData = ""
  for (let i = lowerCaseData.length - 1; i >= 0; i--) {
    newData = newData + lowerCaseData[i];
  }
  return newData == lowerCaseData;
}

let a = "mom";
console.log(newFun(a));

---

// ### 13️⃣ किसी sentence में **word count**

// 👉 methods: `split()`

let newFun = (ele) => {
  return ele.split(" ").length;
}

let a = "Vrushank Modi";
console.log(newFun(a))

---

// ### 14️⃣ `map()` का use करके array को double करना

let newFun = (ele) => {
  return ele.map((e) => e * 2);
}

let a = [1,2,3,4,5,6,7];
console.log(newFun(a));

---

// ### 15️⃣ `filter()` से positive numbers निकालना

let newFun = (ele) => {
  return ele.filter((e) => e >= 0);
}

let a = [-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7];
console.log(newFun(a))


---

// ### 16️⃣ `find()` से first matching value ढूंढना

let newFun = (ele, findData) => {
  return ele.find((e) => findData === e) ? true : false;
}

let a = [13,17,83,65,88];
console.log(newFun(a,65));

---

// ### 17️⃣ `includes()` से value exist करती है या नहीं check करना

let newFun = (ele, findData) => {
  return ele.includes(findData);
}

let a = [13,17,83,65,88];
console.log(newFun(a,66));

---

// ### 18️⃣ **Swap two numbers**


let a = 10;
let b = 20;
let c;

// c = a;
// a = b;
// b = c;

a = a + b;
b = a - b;
a = a - b;

console.log(`A is: ${a} |B is: ${b} |C is: ${c}`)