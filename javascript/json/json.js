// json => javascript object notion

//while sending data to the server (stringify)
//
//=>converting object in to stringify

let user = {
  city: "banglore",
  state: "karnatak",
};

let newuser = JSON.stringify(user); //string
let second = JSON.parse(newuser); //jo
console.log(newuser, second);
