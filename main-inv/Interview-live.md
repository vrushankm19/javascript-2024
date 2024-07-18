
```markdown
# JavaScript Code Snippets


### interview 1

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
    *,html,body{
      box-sizing: border-box;
    }
    .main{
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .div1{
      background-color: red;
      /* flex: 0 0 400px; */
      width: 400px;
      height: 100px;
    }
    .div1-1{ order: 0;}
    .div1-2{order: -1;}
    .div1-3{order: 1;}
    .div1-4{order: 0;}
    .div1-5{order: -3;}
    .div1-6{order: 2;}
</style>
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
</body>
<script>
    let data = document.querySelectorAll(".div1 span");
    console.log(data);
    data.forEach((ele) => {
      ele.addEventListener("click", function(e){
          console.log(ele.parentNode);
          ele.parentNode.remove();
      })
    })

    let a = [1,2,3,4,5,6,7,25,35,3,5,undefined, ];
    let b = [];
    // let ans = a.sort((a,b) => a - b);
    // let ans = a.filter((ele,index,arr) => {
    //   // console.log(ele,index,arr);
      return arr.indexOf(ele) == index;
    // })
    // let ans = new Set(a);
    let ans = a.filter((ele) => {
      // if(ele !== undefined){
        // console.log(ele);
        // b.push(ele);
      // }
      return ele !== undefined;
    })
    // console.log(ans);
    console.log(ans);

</script>
</html>
```

### interview 1

```javascript
let obj = {
    name: "Vrushank",
    age: 26,
    add: {
        city: "Ahmedabad",
        new: {
            bname: "modi",
        }
    }
}

let { add: { new: { bname } } } = obj;
console.log(bname); // Output: "modi"

// ___________________________________________

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(b); // Output: 10

```
```