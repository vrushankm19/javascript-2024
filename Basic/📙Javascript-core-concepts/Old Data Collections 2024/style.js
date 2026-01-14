// ########################## Finding Pairs in an Array That Sum Up to a Given Value #######################

let a = [1,2,3,4,5,6,5,4,3,12,1,2,3];
let b = 5;

for (let i = 0; i < a.length; i++) {
  // console.log(a[i]);
  let new1 = a[i];
  for(let x = i + 1;x < a.length; x++){
    // console.log(a[x]);
    if(new1 + a[x] == b){
      console.log([new1,a[x]]);
    }
  }
}

// ------------------V2--------------

  let a1 = [1,2,3,4,5,6,5,4,3,12,1,2,3];
  let b1 = 2;

  for (let i = 0; i < a1.length; i++) {
    for(let x = i + 1;x < a1.length; x++){
      if(a1[i] + a1[x] == b1){
        console.log([a1[i],a1[x] ]);
      }
    }
  }

// Output:

// [ 1, 4 ]
// [ 1, 4 ]
// [ 2, 3 ]
// [ 2, 3 ]
// [ 2, 3 ]
// [ 3, 2 ]
// [ 4, 1 ]
// [ 4, 1 ]
// [ 3, 2 ]
// [ 2, 3 ]


// ########################## Maximum Value in an Array #######################

let a2 = [1,2,3,4,2,6,8,5,7];
let b2 = 0;

for (let i = 0; i < a2.length; i++) {
    if(b2 < a2[i]){
      b2 = a2[i]
    }
}

console.log(b2)

// Output:

// 8

// ########################## Reverse a String using a for Loop #######################

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



// ########################## Reverse a String in JavaScript #######################

let inputString = "Vrushank Modi";
let reversedString = "";

for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString = reversedString + inputString[i];
}

console.log(reversedString);



  // ########################## Reverse a String in JavaScript #######################
  
  let calculate = (x) => {
    return function(y){
        return function(z){
            return x * y * z;
        }
    }
}

console.log(calculate(5)(2)(4));



// ########################## Array All Value Sum #######################

let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

console.log(sum);

  
// >>>>>> V2 >>>>>>
let arr1 = [1, 2, 3, 4, 5];

let result = arr1.reduce((sum1, item) => {
    return sum1 + item;
});

console.log(result);

  
  // ########################## Find Secend Last Value in Array #######################
  
  let nums = [1, 2, 3, 4, 5, 6, 7];
  console.log(nums[nums.length - 2]);
  

  // ########################## Odd Even Number #######################
  
  function checkOddEven(input) {
    if (input % 2 === 0) {
        console.log(`This value is Even: ${input}`);
    } else {
        console.log(`This value is Odd: ${input}`);
    }
}

checkOddEven(2);


// ########################## Random Max & Min Values Maker #######################

const minimum = 15;
const maximum = 20;
console.log(Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);

// ########################## Palindrome #######################


let checkPalindrome = ((input) => {
  let str = String(input);
  let reversedStr = ""
  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
  }
  if(str === reversedStr){
    console.log(`Palindrome is True ${reversedStr}`)
  }else{
    console.log(`Palindrome is False ${reversedStr}`)
  }
})

let answer = checkPalindrome(121)


// NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
// EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
// WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW


// sring in sama aphabet find
// *******************1****************
var stringInput = "Vrunashank";
var charCount = {}; // Object to store character counts

// Iterate through each character in the string
for (var i = 0; i < stringInput.length; i++) {
    var character = stringInput[i].toLowerCase(); // Convert to lowercase for case-insensitivity
    if (charCount[character]) {
        charCount[character]++;
    } else {
        charCount[character] = 1;
    }
}

// Display repeated characters  
for (var char in charCount) {
    if (charCount[char] > 1) {
        console.log("Character '" + char + "' is repeated " + charCount[char] + " times.");
    }
}               

// *******************2****************

var str = "Vrunashank";
var repeatedChars = [];

for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase(); // Convert to lowercase for case-insensitivity
    if (str.indexOf(char, i + 1) !== -1 && repeatedChars.indexOf(char) === -1) {
        repeatedChars.push(char);
    }
}

console.log("Repeated characters: " + repeatedChars.join(', '));


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// How To find duplicate elements in array in javascript

let arrNuber = [1,2,3,4,5,6,7,8,9,3,5,7];
let dublicat = arrNuber.filter((ele,index,arr) => arr.indexOf(ele)!==index);
console.log(dublicat);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// How To find max/min in a given array in javascript

// *******************1****************
var numbers = [5, 2, 9, 1, 5, 6];

var max = Math.max(...numbers); // Maximum value
var min = Math.min(...numbers); // Minimum value

console.log("Maximum value:", max);
console.log("Minimum value:", min);


// *******************2****************

var numbers = [5, 2, 9, 1, 5, 6];

var max = numbers[0];
var min = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("Maximum value:", max);
console.log("Minimum value:", min);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// what is difference between Filter and Find method
// *******************1****************

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
// evenNumbers will be [2, 4]

// *******************2****************

const numbers = [1, 2, 3, 4, 5];
const firstEvenNumber = numbers.find((num) => num % 2 === 0);
// firstEvenNumber will be 2

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// How to find the sum of all elements in array in Javascript
// *******************1****************

const nums1 = [1, 2, 3, 4, 5];
let total = 0;

for (let i = 0; i < nums1.length; i++) {
    total += nums1[i];
}

console.log("Sum of all elements:", total); // Output: 15

// *******************2**************** 

const numbersArray = [1, 2, 3, 4, 5];
const totalSum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum of all elements:", totalSum); // Output: 15



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// reverse string
// *******************1**************** 

function reverseText(inputText) {
  let reversedText = "";
  for (let i = inputText.length - 1; i >= 0; i--) {
      reversedText += inputText[i];
  }
  return reversedText;
}

const originalText = "Hello, World!";
const reversedText = reverseText(originalText);
console.log(reversedText); // Output: "!dlroW ,olleH"
// *******************2**************** 

function reverseString(inputString) {
  return inputString.split("").reverse().join("");
}

const originalString = "Hello, World!";
const reversedString1 = reverseString(originalString);
console.log(reversedString1); // Output: "!dlroW ,olleH"


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// sum

let main = [1,19,9];
let ans = main.reduce((ele,index) => {
     return index;
});
console.log(ans);