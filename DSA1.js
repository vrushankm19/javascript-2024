// Reverse an Array/String
// _____________________________1_____________________________

// let a = [1, 2, 3, 4, 5, 6];
// let b = [];

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

// for (let i = a.length - 1; i >= 0; i--) {
//     b.push(a[i]);
// }
// console.log(b);

// _____________________________2_____________________________

// let a = 'Vrushank Modi';
// let a2 = a.split(' ');
// let ans = [];
// // let ansfinal = ans.split();
// // console.log(a2)
// for (let i = 0; i < a2.length; i++) {
//   let ansin = '';
//   for (let y = a2[i].length - 1; y >= 0; y--) {
//     // console.log(a2[i][y]);
//     ansin = ansin + a2[i][y];
//   }
//   ans.push(ansin); // break
// }
// console.log(ans.join(' '));

// _____________________________3_____________________________

// let a = 'Vrushank Modi';

// function reverseFun(ele){
//   let a2 = ele.split(' ');
//   let ans = [];
//   for (let i = 0; i < a2.length; i++) {
//     let ansin = '';
//     for (let y = a2[i].length - 1; y >= 0; y--) {
//       ansin = ansin + a2[i][y];
//     }
//     ans.push(ansin);
//   }
//   return ans.join(' ');
// }

// console.log(reverseFun(a));
// console.log(reverseFun("Krupa Patel"));

// _____________________________4_____________________________

// let a = 'Vrushank Modi';

// function reverseFun(ele) {
//   return ele
//   .split(" ")
//   .map((el) => el.split('').reverse().join(""))
//   .join(" ");
// }

// console.log(reverseFun(a));

// _____________________________5_____________________________

// let a = 'Vrushank Modi';

// function reverseFun(ele) {
//   return ele
//   .split(" ")
//   .map((ele) => ele.split("").reverse().join("")).join(" ");
// }

// console.log(reverseFun(a));


