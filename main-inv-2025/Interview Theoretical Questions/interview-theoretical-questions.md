## Data Types in JavaScript

### 1. Primitive Data Types (Pass By Value) [ Stack ]:
- **String**: Represents sequences of characters, e.g., `"Hello, World!"`.
- **Number**: Represents numeric values, both integers and floating-point numbers.
- **Boolean**: Represents either `true` or `false`.
- **Undefined**: Represents a variable that has been declared but not assigned a value.
- **Null**: Represents the intentional absence of any object value.
- **Symbol**: Introduced in ECMAScript 6 (ES6), represents a unique identifier.

_Primitive data types are immutable, meaning that their values cannot be changed. When you perform operations on primitive values, you are working with copies of the actual values._

### 2. Non-Primitive (Pass By Reference) [ Heap ]:
- **Object**: Represents a collection of key-value pairs and is a fundamental data structure in JavaScript.
- **Array**: A specialized type of object used to store and manipulate ordered collections of data.
- **Function**: A type of object that can be invoked, or called, to perform a set of actions.

_Non-primitive data types are mutable, meaning their values can be modified directly. When you work with non-primitive values, you are dealing with references to the underlying data, not the data itself._

## Scope
JavaScript has two main types of scope: global scope and local scope.

### 1. Global Scope:
- Variables declared outside of any function or block have global scope.
- Global variables can be accessed and modified from any part of the code, both inside and outside functions.
```javascript
var globalVariable = "I'm a global variable";

function exampleFunction() {
   console.log(globalVariable);  // Accessing global variable inside a function
}

exampleFunction();
console.log(globalVariable);  // Accessing global variable outside the function
```

### 2. Local Scope:
- Variables declared within a function or a block have local scope.
- Local variables are only accessible within the function or block in which they are declared.
```javascript
function exampleFunction() {
   var localVariable = "I'm a local variable";
   console.log(localVariable);  // Accessing local variable inside the function
}

exampleFunction();
// console.log(localVariable);  // This would result in an error because localVariable is not defined globally
```

### 3. Block Scope (let and const):
- The `let` and `const` keywords, introduced in ECMAScript 6 (ES6), have block scope.
- Variables declared with `let` and `const` are only accessible within the block (a pair of curly braces) in which they are defined.
```javascript
if (true) {
   let blockScopedVariable = "I'm block-scoped";
   console.log(blockScopedVariable);
}

// console.log(blockScopedVariable);  // This would result in an error because blockScopedVariable is not defined outside the block
```

## Loops in JavaScript
A loop in programming is a construct that allows a set of instructions to be repeated multiple times. It helps in efficiently executing repetitive tasks. JavaScript provides several types of loops:

### 1. for Loop:
- Used when the number of iterations is known beforehand.
```javascript
for (let i = 0; i < 5; i++) {
   console.log(i);
}
```

### 2. while Loop:
- Repeats a block of code while a specified condition is true.
- Suitable when the number of iterations is not known in advance.
```javascript
let i = 0;
while (i < 5) {
   console.log(i);
   i++;
}
```

### 3. do...while Loop:
- Ensures that the block of code is executed at least once, as the condition is checked after the loop.
```javascript
let i = 0;
do {
   console.log(i);
   i++;
} while (i < 5);
```

### 4. for...in Loop:
- Iterates over the enumerable properties of an object.
- Often used for iterating over the keys of an object.
```javascript
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
   console.log(key, obj[key]);
}
```

### 5. for...of Loop:
- Introduced in ES6, it iterates over iterable objects like arrays, strings, maps, sets, etc.
- Provides a more concise syntax for iterating over values.
```javascript
const array = [1, 2, 3];
for (let value of array) {
   console.log(value);
}
```

## Variable Declarations: Let, Var, and Const

### let:
- Used to declare variables.
- Variables declared with `let` have block scope, meaning they are only accessible within the block where they are defined.
- It allows you to reassign values to the variable.
```javascript
let x = 5;
if (true) {
   let x = 10; // Different variable with the same name, inside a different block
   console.log(x); // Outputs 10
}
console.log(x); // Outputs 5, as it refers to the outer block's variable
```

### const:
- Used to declare variables but for constants, i.e., values that should not be reassigned.
- Variables declared with `const` also have block scope.
- It must be assigned a value when declared and cannot be reassigned later.
```javascript
const pi = 3.14;
// pi = 4; // Error: Assignment to constant variable
```

### var:
- An older way to declare variables in JavaScript.
- Variables declared with `var` have function scope, meaning they are only accessible within the function where they are defined.
- It allows redeclaration and can be accessed before it's declared (hoisting).
```javascript
function example() {
   var y = 7;
   if (true) {
       var y = 14; // Same variable, as it's function-scoped
       console.log(y); // Outputs 14
   }
   console.log(y); // Outputs 14, as it's the same variable
}
```

_Summary:_
- Use `let` when you want a variable with block scope and the ability to reassign values.
- Use `const` when you want a constant variable with block scope and a fixed value.
- Avoid using `var` in modern JavaScript as it has function scope, can be hoisted, and may lead to unexpected behavior. Prefer `let` and `const` for clearer and safer variable declarations.

## Shallow Copy and Deep Copy

### Shallow Copy:
- Creates a new object or array and copies the top-level structure of the original object or array.
- If the original object contains nested objects or arrays, only references to those nested objects or arrays are copied, not the nested objects or arrays themselves.
- Therefore, changes made to nested objects or arrays in the shallow copy will affect the original object, and vice versa.
```javascript
const originalArray = [1, 2, [3, 4]];
const shallowCopy = [...originalArray];

shallowCopy[2][0] = 100;
console.log(originalArray); // Output: [1, 2, [100, 4]]
```

### Deep Copy:
- Creates a completely new object or array and recursively copies all levels of nested objects or arrays.
- Ensures that changes made to the copied object or array do not affect the original object, and vice versa.
- Achieving deep copy in JavaScript can be more complex, especially when dealing with nested objects or arrays containing functions or non-enumerable properties.
```javascript
function deepCopy(obj) {
   if (typeof obj !== 'object' || obj === null) {
       return obj;
   }

   const newObj = Array.isArray(obj) ? [] : {};
   for (let key in obj) {
       newObj[key] = deepCopy(obj[key]);
   }
   return newObj;
}

const originalObject = { a: 1, b: { c: 2 } };
const deepCopyObject = deepCopy(originalObject);

deepCopyObject.b.c = 100;
console.log(originalObject); // Output: { a: 1, b: { c: 2 } }
```

_Summary:_
- Shallow copy creates a new object with references to nested objects or arrays.
- Deep copy creates a completely new object with copies of all nested objects or arrays.
- When working with complex data structures, it's important to choose the appropriate copying method based on whether you want changes to affect the original data or not.

## JSON.parse() and JSON.stringify()
_Performing shallow copying of objects or arrays:_
```javascript
// Original object with nested structure
const originalObject = { a: 1, b: { c: 2 } };

// Perform shallow copy using JSON.stringify and JSON.parse
const shallowCopyObject = JSON.parse(JSON.stringify(originalObject));

// Modify the shallow copy
shallowCopyObject.b.c = 100;

// Output both original and shallow copy
console.log(originalObject); // Output: { a: 1, b: { c: 2 } }
console.log(shallowCopyObject); // Output: { a: 1, b: { c: 100 } }
```

_In the above example:_
- `JSON.stringify()` converts the original object into a string, effectively creating a deep copy of the object.
- `JSON.parse()` then parses the string back into an object, creating a new object with a shallow copy of the original structure.
- Modifications made to the nested object in the shallow copy do not affect the original object.

_Note:_
- While `JSON.stringify()` and `JSON.parse()` provide a convenient way to perform

 shallow copying, they have limitations when dealing with non-enumerable properties, functions, or complex data structures. For more complex scenarios, custom deep copy functions may be needed.

 Sure, here is the detailed information formatted in Markdown:


### Higher-Order Functions

#### Definition
Higher-order functions are functions that can take other functions as arguments or return functions as results. They provide a way to abstract over actions, behaviors, or computations. `map`, `filter`, and `reduce` are examples of higher-order functions.

#### 1. map
- **Usage**: Transforms each element of an array according to a provided function. It returns a new array containing the results of applying the provided function to each element of the original array.
```javascript
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

#### 2. filter
- **Usage**: Creates a new array with elements that pass a certain test implemented by the provided function. It returns an array containing only the elements for which the provided function returns true.
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

#### 3. reduce
- **Usage**: Reduces the elements of an array to a single value. It applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
```

#### Example of a Higher-Order Function using map
```javascript
function applyOperation(numbers, operation) {
   return numbers.map(operation);
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = applyOperation(numbers, num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```
In this example, `applyOperation` is a higher-order function because it takes another function (`operation`) as an argument and applies it to each element of the array using `map`.

### Prototype

#### Definition
In JavaScript, every object has a special property called `__proto__`, which points to its prototype. Prototypes are essentially templates from which objects inherit methods and properties. The `__proto__` property allows objects to access properties and methods defined on their prototype.

#### Breakdown
- **Prototype**:
  - Prototypes are essentially objects themselves.
  - When you create an object in JavaScript using either object literals or constructor functions, it inherits properties and methods from its prototype.
  - Prototypes are a way to implement inheritance in JavaScript, allowing objects to share behavior and properties.
- **__proto__**:
  - The `__proto__` property is a reference to the object's prototype.
  - It is used for inheritance.
  - When you access a property or method on an object, JavaScript first looks for it directly on the object. If it doesn't find it, it looks up the prototype chain via the `__proto__` property.
  - You can access an object's prototype using `Object.getPrototypeOf(obj)`.

#### Example
```javascript
// Define a prototype
const animal = {
   makeSound() {
       console.log("Some generic sound");
   }
};

// Create an object using the prototype
const dog = {
   breed: "Labrador"
};
dog.__proto__ = animal;

// Access method from the prototype
dog.makeSound(); // Output: Some generic sound

// Alternatively, you can use Object.getPrototypeOf()
console.log(Object.getPrototypeOf(dog) === animal); // Output: true
```
It's important to note that while `__proto__` is widely supported, it is considered deprecated in favor of the `Object.getPrototypeOf()` and `Object.setPrototypeOf()` methods for accessing and setting prototypes, respectively.

### Arrow Functions vs Normal Functions

#### Syntax
- **Arrow functions**: Shorter and more concise syntax compared to normal functions.
```javascript
// Normal function
function add(a, b) {
   return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

#### Lexical this Binding
- **Arrow functions**: Do not have their own `this` context. Instead, they inherit the `this` value from the enclosing lexical context.
- **Normal functions**: Have their own `this` context, which can lead to confusion, especially in nested functions or when dealing with event handlers.
```javascript
// Normal function
function Counter() {
   this.count = 0;
   setInterval(function() {
       this.count++; // Refers to the global object or undefined in strict mode
       console.log(this.count);
   }, 1000);
}

// Arrow function
function Counter() {
   this.count = 0;
   setInterval(() => {
       this.count++; // Refers to the Counter object
       console.log(this.count);
   }, 1000);
}
```

#### Implicit Return
- **Arrow functions**: Provide implicit return for single expressions.
```javascript
// Normal function
function double(x) {
   return x * 2;
}

// Arrow function with implicit return
const double = x => x * 2;
```

#### No arguments Object
- **Arrow functions**: Do not have their own `arguments` object.
- **Normal functions**: Have their own `arguments` object.
```javascript
function showArgs() {
   console.log(arguments); // Available in normal function
}

const showArgs = () => {
   console.log(arguments); // Error: arguments is not defined
};
```

#### Example with Context
```javascript
const person = {
   firstName: 'John',
   lastName: 'Doe',
   fullName: function() {
       return this.firstName + ' ' + this.lastName;
   },
   sayHello: () => {
       return 'Hello, ' + this.firstName + ' ' + this.lastName; // Using arrow function here
   }
};

console.log(person.fullName()); // Output: John Doe
console.log(person.sayHello()); // Output: Hello, undefined undefined
```

### Bind, Call, and Apply

#### bind
- **Usage**: Creates a new function with the bound context.
```javascript
const person = {
   name: 'John',
   greet: function() {
       return 'Hello, ' + this.name;
   }
};

const sayHello = person.greet.bind(person);
console.log(sayHello()); // Output: Hello, John
```

#### call
- **Usage**: Immediately calls the function with the specified context.
```javascript
const person = {
   name: 'John',
   greet: function() {
       return 'Hello, ' + this.name;
   }
};

const greeting = person.greet.call(person);
console.log(greeting); // Output: Hello, John
```

#### apply
- **Usage**: Immediately calls the function with the specified context and arguments as an array.
```javascript
const person = {
   name: 'John',
   greet: function(greeting) {
       return greeting + ', ' + this.name;
   }
};

const greeting = person.greet.apply(person, ['Hi']);
console.log(greeting); // Output: Hi, John
```

### Spread Operator and Rest Parameter

#### Spread Operator (...)
- **Usage**: Used to expand an iterable (like an array) into individual elements.
```javascript
// Example 1: Combining Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2]; // Spread operator used to combine arrays
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Example 2: Copying Arrays
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // Spread operator used to copy array
console.log(copiedArray); // Output: [1, 2, 3]

// Example 3: Passing elements as arguments to a function
function sum(x, y, z) {
   return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Spread operator used to pass array elements as function arguments
// Output: 6 (1 + 2 + 3)
```

#### Rest Parameter (...)
- **Usage**: Used in function declarations to represent an indefinite number of arguments as an array.
```javascript
// Example: Calculating sum of numbers
function sum(...numbers) { // Rest parameter used to collect remaining arguments into an array
   return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2)); // Output: 3 (1 + 2)
console.log(sum(1, 2, 3)); // Output: 6 (1 + 2 + 3)
console.log(sum(1, 2, 3, 4)); // Output: 10 (1 + 2 + 3 + 4)
```

### Closures and Hoisting

#### Closures
- **Definition**: A closure is a fundamental concept in JavaScript that allows functions to retain access to variables from their outer scope even after the outer function has finished executing.
```javascript


function outerFunction() {
   let outerVariable = 'I am an outer variable';

   function innerFunction() {
       console.log(outerVariable); // Accessing outerVariable from the outer scope
   }

   return innerFunction;
}

const closure = outerFunction();
closure(); // Output: I am an outer variable
```

#### Hoisting
- **Definition**: Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, before code execution.
- **Example of Hoisting with Variables**:
```javascript
console.log(myVar); // Output: undefined (due to hoisting)
var myVar = 10;
console.log(myVar); // Output: 10
```
- **Example of Hoisting with Functions**:
```javascript
hoistedFunction(); // Output: I am a hoisted function

function hoistedFunction() {
   console.log('I am a hoisted function');
}
```

This Markdown document provides a comprehensive explanation of higher-order functions, prototypes, arrow functions vs normal functions, bind, call, apply, spread operator, rest parameter, closures, and hoisting.





Certainly! Below is a Markdown file with a clean and organized layout that covers IIFE, Event Bubbling, Event Capturing, and stopPropagation with examples and explanations.


# JavaScript Concepts

## Immediately Invoked Function Expression (IIFE)

### Definition
IIFE stands for Immediately Invoked Function Expression. It is a common pattern in JavaScript used to create a function and execute it immediately.

### How it Works
```javascript
(function() {
   // This code will be executed immediately
   console.log("I am an IIFE!");
})();
```

In this example:
- We define an anonymous function `(function() { ... })`.
- Immediately after the function definition, we have an additional pair of parentheses `()`, which immediately invokes the function.
- Any code inside the function will be executed immediately.

### Purpose
IIFEs are used to:
- Encapsulate code and create a new scope.
- Prevent variable declarations from polluting the global scope.
- Execute code immediately without needing to call the function later.

### Example with Parameters
```javascript
(function(name) {
   console.log("Hello, " + name);
})("John");
// Output: Hello, John
```

## Event Bubbling

### Definition
Event bubbling is a phenomenon in which an event triggered on a nested element is also triggered on its parent elements all the way up to the document root.

### How it Works
- When an event occurs on an element, it first runs the event handlers on that element.
- Then, it runs the event handlers on its parent, and so on, bubbling up through the DOM hierarchy.

### Practical Example
Suppose you have a list of items, and each item has a click event. Clicking on an item triggers the click event for that item and also bubbles up to its parent elements.
```html
<ul id="list">
   <li>Item 1</li>
   <li>Item 2</li>
   <li>Item 3</li>
</ul>

<script>
document.getElementById('list').addEventListener('click', function(event) {
   console.log('Clicked on:', event.target.textContent);
});
</script>
```

## Event Capturing

### Definition
Event capturing is the reverse of event bubbling. It involves capturing the event as it travels down the DOM hierarchy, from the document root to the target element.

### How it Works
Event capturing allows you to intercept events on parent elements before they reach their target.

### Practical Example
Using the same example as above, we can listen for events during the capture phase by specifying `true` as the third argument in `addEventListener`.
```html
<ul id="list">
   <li>Item 1</li>
   <li>Item 2</li>
   <li>Item 3</li>
</ul>

<script>
document.getElementById('list').addEventListener('click', function(event) {
   console.log('Capturing event:', event.target.textContent);
}, true);
</script>
```

## stopPropagation()

### Definition
`stopPropagation()` is a method that stops the propagation of an event further up or down the DOM hierarchy. It prevents the event from triggering any additional event handlers on parent or child elements.

### Practical Example
Suppose we have a nested element inside a clickable parent element. Clicking on the nested element triggers the click event for both the nested element and its parent. We can use `stopPropagation()` to prevent the event from reaching the parent element.
```html
<div id="parent">
   Parent
   <button id="child">Child</button>
</div>

<script>
document.getElementById('child').addEventListener('click', function(event) {
   console.log('Clicked on child');
   event.stopPropagation(); // Prevent event from bubbling up to the parent
});

document.getElementById('parent').addEventListener('click', function(event) {
   console.log('Clicked on parent');
});
</script>
```
In this example:
- Clicking on the child button will log "Clicked on child".
- It will not trigger the click event for the parent element due to `stopPropagation()` being called.
```

This Markdown file provides a well-organized and clear explanation of IIFE, Event Bubbling, Event Capturing, and stopPropagation with practical examples for each concept.