let myUl = document.querySelector("body");
let myLiold = document.querySelectorAll("li");
let myLi = Array.from(myLiold);

let main = myLi.map((e) => {
    e.addEventListener("click", function(){
        myUl.style.backgroundColor = e.innerHTML;
    })
})