let units = 250;
let bill = 0;

if (units <= 100) {
  bill += 10 * 100;
} else if (units > 100 && units <= 200) {
  bill += 1000 + (units - 100) * 15;
} else if (units > 200 && units <= 300) {
  bill += 1000 + 1500 + (units - 200) * 20;
}

console.log(bill);
