// //live clock
// setInterval(() => {
//   let time = new Date();
//   console.clear();
//   console.log(
//     time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
//   );
// }, 1000);

// let b = 0;
// let a = 0;
// setInterval(() => {
//   a++;
//   b += a;
//   console.log(b);
// }, 1000);

let n = 6;
let result = 1;
for (let i = n; i > 0; i--) {
  result = result * i;
}
console.log(result);
