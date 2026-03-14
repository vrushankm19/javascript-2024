नीचे **सिर्फ इंटरव्यू में पूछे गए सवाल (Interview Questions)** अलग-अलग सेक्शन में निकालकर दे रही हूँ 👇
(कोई एक्सप्लनेशन नहीं, सिर्फ Questions)

---

## 🧠 Coding / DSA Questions

1. एक string से हर character का count निकालो (Hash/Map का use करके)
2. अगर input में कोई specific character दिया जाए (जैसे ‘a’), तो सिर्फ उसी का count return करो
3. ऊपर वाले solution की **Time Complexity** क्या होगी और कैसे calculate करेंगे?

---

## 📌 JavaScript Questions

4. `map()` क्या होता है?
5. `find()` vs `filter()` में difference बताओ
6. `find()` और `filter()` में से कौन ज्यादा fast है और क्यों?
7. `map()` vs `forEach()` (या value-based iteration) का difference
8. `async / await` क्या है?
9. `let`, `var`, `const` में difference (example के साथ)
10. **Temporal Dead Zone (TDZ)** क्या होता है? (Full form भी)
11. Hoisting क्या होती है?
12. `try-catch` क्यों use करते हैं? API error handling में कैसे use करते हो?

---

## ⚛️ React Questions

13. React Hooks क्या होते हैं?
14. आपने कौन-कौन से hooks use किए हैं?
15. `useMemo` क्या है?
16. `useCallback` क्या है?
17. `useMemo` vs `useCallback` difference
18. `useRef` क्यों use करते हैं?
19. Hooks का syntax लिखो (`useMemo`, `useCallback`)
20. Props Drilling क्या है?
21. State Lifting क्या होती है?
22. Context API क्या है?
23. Redux क्या है?
24. Context API vs Redux difference
25. State Management कैसे करते हो?

---

## ⚙️ Performance / Optimization Questions

26. React application को optimize कैसे करते हो?
27. Optimization के steps क्या होते हैं?
28. Code Splitting क्या है?
29. Lazy Loading क्या है?
30. आपने Lazy Loading implement किया है? कैसे?
31. कैसे पता करोगे कि कोई screen optimized है या नहीं?
32. Image optimization कैसे करते हो?

---

## 📦 Webpack / Build Tools

33. Webpack क्या होता है?
34. Webpack क्यों use करते हैं?

---

## 🧪 Testing

35. Testing क्या होती है?
36. क्या आपने कभी Testing की है?
37. कौन-कौन सी testing techniques/tools जानते हो?

---

## 📂 Git / GitHub

38. Git में branch कैसे create करते हैं?
39. `git pull` क्या होता है?

---

## 📁 Project Based Questions

40. अपने project के बारे में explain करो
41. Project में कौन-सी technologies use की हैं?
42. Project में optimization कैसे की?
43. Project में error handling कैसे की?

---

``` javascript
useEffect(() => {},[name])

let [name,setaName] = useState("name")

setaName("asds")

___________________________________________

function newFun(){
  let a =  10;
  return () => console.log(a++);
}

let fun = newFun();
fun();
fun();
fun();
fun();

___________________________________________

let newPro =  new Promise(resolve,reject){
  let success = tue;
  if(success == true){
    resolve("data...")
  }else {
    reject("Error...")
  }
}

_________________________________________

var a;
let b;

_______________________________

console.log(a);
var a = 10;


console.log(b);
let b = 10;
{
  
}
______________________________________


setTimeout(function() {
  console.log("hello");
}, 1000);

function(){
  console.log(5);
  setTimeout(function() {
    console.log("hello");
  }, 0);
  console.log(10);
}
let a = 10;

let a;

5 , 10, "hello"


______________________________________
function newFun(arr,ele){
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if((arr[i] + arr[j]) == ele){
        console.log(arr[i] , arr[j])
        ans.push([i, j]);
      }
    }
  }
  return ans;
}

console.log(newFun([1,2,3,6,7,23,45],9));

```
