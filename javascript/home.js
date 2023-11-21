let bank = {
  name: "Kotak",
  accnumber: 12325343535,
  accholdersname: "kempagowda",
  balance: 30000,
  withdraw: function (amt) {
    this.balance = this.balance - amt;
    console.log(this.balance);
  },
  deposit: function (amt) {
    this.balance = this.balance + amt;
  },
};
bank.deposit(20000);
console.log(bank);
