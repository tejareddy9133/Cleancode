// let str =
//   "The quick brown fox jumps over the lazy dog the function should return jumps";

// let length = -1;
// let bag = "";
// for (let i = 0; i <= arr.length - 1; i++) {
//   if (arr[i].length > length) {
//     length = arr[i].length;
//     bag = arr[i];
//   }
// }

//console.log(length, bag);

//problem-2

// let sent = "hello world";
// let arr = sent.split(" ");

// let bag = "";
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//   bag += arr[i] + " ";
// }
// console.log(bag);
// let h = "a";

// console.log(h.toUpperCase());

let str3 = "abracadabra";
let char = "a";

let count = 0;
for (let i = 0; i <= str3.length - 1; i++) {
  if (str3[i] == char) {
    count++;
  }
}

console.log(count);
