let a = [10, 20, 30, 40, 50, 60, 70, 80];
let myInput = document.querySelector('#my-input');
let mySubmit = document.querySelector('#my-submit');

mySubmit.addEventListener("click" , function() {
  let data = "";
  data = myInput.value;
  myFun(a,data);
});

function myFun(ele, data) {
  for(let i = data - 1; i <= ele.length - 1; i++ ){
    ele[i] = ele[i + 1];
    // console.warn(1);
  }
  // ele = ele.length -1;
  ele.pop();
  console.log(ele);
}



