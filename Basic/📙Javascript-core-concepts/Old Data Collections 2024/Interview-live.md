# JavaScript Code Snippets

### HTML and JavaScript Example

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    *, html, body {
      box-sizing: border-box;
    }
    .main {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .div1 {
      background-color: red;
      width: 400px;
      height: 100px;
    }
    .div1-1 { order: 0; }
    .div1-2 { order: -1; }
    .div1-3 { order: 1; }
    .div1-4 { order: 0; }
    .div1-5 { order: -3; }
    .div1-6 { order: 2; }
  </style>
</head>
<body>
  <!-- 1,6,4,2,5,3 -->
  <!-- 3,6,5,2,1,4 -->
  <div class="main">
    <div class="div1 div1-1"><span>X</span>1</div>
    <div class="div1 div1-2"><span>X</span>2</div>
    <div class="div1 div1-3"><span>X</span>3</div>
    <div class="div1 div1-4"><span>X</span>4</div>
    <div class="div1 div1-5"><span>X</span>5</div>
    <div class="div1 div1-6"><span>X</span>6</div>
  </div>
  <script>
    let data = document.querySelectorAll(".div1 span");
    console.log(data);
    data.forEach((ele) => {
      ele.addEventListener("click", function(e){
        console.log(ele.parentNode);
        ele.parentNode.remove();
      });
    });

    let a = [1, 2, 3, 4, 5, 6, 7, 25, 35, 3, 5, undefined];
    let b = [];
    // let ans = a.sort((a, b) => a - b);
    // let ans = a.filter((ele, index, arr) => {
    //   return arr.indexOf(ele) == index;
    // });
    // let ans = new Set(a);
    let ans = a.filter((ele) => {
      return ele !== undefined;
    });
    console.log(ans);
  </script>
</body>
</html>
```

### Object Destructuring and Swapping Variables

```javascript
let obj = {
  name: "Vrushank",
  age: 26,
  add: {
    city: "Ahmedabad",
    new: {
      bname: "modi"
    }
  }
};

let { add: { new: { bname } } } = obj;
console.log(bname); // Output: "modi"

// ___________________________________________

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(b); // Output: 10

a = 10;
b = 20;

// Swapping values without a third variable
a = a + b; // a becomes 30 (10 + 20)
b = a - b; // b becomes 10 (30 - 20)
a = a - b; // a becomes 20 (30 - 10)

console.log(a); // Output: 20
console.log(b); // Output: 10
```
```

You can save this content to a new Markdown file. If you need the file created, please let me know!