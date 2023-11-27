function print() {
  console.log("krutika ");
}

let interval = setInterval(() => {
  print();
}, 1000);

let timeout = setTimeout(() => {
  clearInterval(interval);
}, 10000);

clearTimeout(timeout);
