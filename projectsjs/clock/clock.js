setInterval(() => {
  let d = new Date();
  let ht = d.getHours();
  let mt = d.getMinutes();
  let st = d.getSeconds();
  let hr = 30 * ht + mt / 2;
  let mr = 6 * mt;
  let sr = 6 * st;
  hour.style.transform = `rotate(${hr}deg)`;
  minute.style.transform = `rotate(${mr}deg)`;
  second.style.transform = `rotate(${sr}deg)`;
}, 1000);
