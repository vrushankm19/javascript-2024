Below is a **clean, properly ordered, clearly separated, easy-to-read `README.md`** with sections and each code snippet grouped neatly.

You can copy/paste it directly as your new file. ✅

---

````markdown
# JavaScript Code Snippets  
A collection of JavaScript logic examples categorized for easy reading.

---

# 📌 1. Array Operations

## 1.1 Find Pairs That Sum to a Target
```javascript
let a = [1, 2, 3, 4, 5, 6, 5, 4, 3, 12, 1, 2, 3];
let b = 5;

for (let i = 0; i < a.length; i++) {
  let new1 = a[i];
  for (let x = i + 1; x < a.length; x++) {
    if (new1 + a[x] == b) {
      console.log([new1, a[x]]);
    }
  }
}
````

---

## 1.2 Maximum Value in an Array

```javascript
let a2 = [1, 2, 3, 4, 2, 6, 8, 5, 7];
let b2 = 0;

for (let i = 0; i < a2.length; i++) {
  if (b2 < a2[i]) {
    b2 = a2[i];
  }
}

console.log(b2);
```

---

## 1.3 Remove Duplicates from an Array

```javascript
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 6, 5];
let y = [];

for (let i = 0; i < x.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < y.length; j++) {
    if (x[i] === y[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    y.push(x[i]);
  }
}

console.log(y);
```

---

## 1.4 Find Duplicate Elements

```javascript
let arrNuber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 5, 7];
let dublicat = arrNuber.filter((ele, index, arr) => arr.indexOf(ele) !== index);
console.log(dublicat);
```

---

## 1.5 Find Max & Min in Array

### Using Math Methods

```javascript
var numbers = [5, 2, 9, 1, 5, 6];
var max = Math.max(...numbers);
var min = Math.min(...numbers);

console.log("Maximum:", max);
console.log("Minimum:", min);
```

### Using Loop

```javascript
var max = numbers[0];
var min = numbers[0];

for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) max = numbers[i];
  if (numbers[i] < min) min = numbers[i];
}

console.log("Maximum:", max);
console.log("Minimum:", min);
```

---

## 1.6 Sum of All Elements

### Using Loop

```javascript
let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);
```

### Using Reduce

```javascript
let arr1 = [1, 2, 3, 4, 5];
let result = arr1.reduce((sum, item) => sum + item);

console.log(result);
```

---

## 1.7 Find Second Last Value

```javascript
let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums[nums.length - 2]);
```

---

## 1.8 Filter vs Find

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0); 
// [2, 4]

const firstEvenNumber = numbers.find(num => num % 2 === 0); 
// 2
```

---

# 📌 2. Object Operations

## 2.1 Character Frequency Counter

```javascript
var stringInput = "Vrunashank";
var charCount = {};

for (var i = 0; i < stringInput.length; i++) {
  var character = stringInput[i].toLowerCase();
  charCount[character] = (charCount[character] || 0) + 1;
}

for (var char in charCount) {
  if (charCount[char] > 1) {
    console.log(`Character '${char}' appears ${charCount[char]} times.`);
  }
}
```

---

# 📌 3. Function Operations

## 3.1 Nested Multiplication Function

```javascript
let calculate = (x) => {
  return (y) => {
    return (z) => {
      return x * y * z;
    };
  };
};

console.log(calculate(5)(2)(4)); // 40
```

---

## 3.2 Odd Even Checker

```javascript
function checkOddEven(input) {
  if (input % 2 === 0) {
    console.log(`Even: ${input}`);
  } else {
    console.log(`Odd: ${input}`);
  }
}

checkOddEven(2);
```

---

## 3.3 Random Number (Min to Max)

```javascript
const minimum = 15;
const maximum = 20;

console.log(Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);
```

---

## 3.4 Palindrome Checker

```javascript
let checkPalindrome = (input) => {
  let str = String(input);
  let reversedStr = "";

  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  if (str === reversedStr) {
    console.log(`Palindrome: ${reversedStr}`);
  } else {
    console.log(`Not Palindrome: ${reversedStr}`);
  }
}

checkPalindrome(121);
```

---

## 3.5 Factorial (Recursive)

```javascript
function factorial(number) {
  console.log(number);
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(5)); // 120
```

---

# 📌 4. String Operations

## 4.1 Reverse String (Loop)

```javascript
let inputString = "Vrushank Modi";
let reversedString = "";

for (let i = inputString.length - 1; i >= 0; i--) {
  reversedString += inputString[i];
}

console.log(reversedString);
```

---

## 4.2 Reverse String (Function)

```javascript
function reverseText(inputText) {
  let reversedText = "";
  for (let i = inputText.length - 1; i >= 0; i--) {
    reversedText += inputText[i];
  }
  return reversedText;
}

console.log(reverseText("Hello, World!"));
```

### Using split + reverse + join

```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello, World!"));
```

---

## 4.3 Reduce Example (Last Element Returned)

```javascript
let main = [1, 19, 9];
let ans = main.reduce((acc, val) => val);
console.log(ans); // 9
```


---
## 2025 A New Q/A Add

---

## 5 Find Missing Number in arry

```javascript
const newFun = (ele) => {
  for (let i = 1; i <= ele.length; i++) {
    if (!ele.includes(i)) return i;
  }
  return -1;
};

const newFun2 = (ele) => {
  let freshArr = new Set(ele);
  for (let i = 1; i <= ele.length; i++) {
    if (!freshArr.has(i)) return i;
  }
  return -1;
};

let a = [1, 2, 3, 4, 6];
console.log(newFun(a));
console.log(newFun2(a));

```



