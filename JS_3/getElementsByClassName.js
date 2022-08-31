let number = prompt("Too oruulna uu");
let test = document.getElementsByClassName(".test");

let backup = Number(number);
let check = 0;
while (number != 0) {
  let digit = number % 10;
  number = parseInt(number / 10);
  check = check * 10 + digit;
}
for (let i = 0; i < test.length; i++) {    
    test[i].style.color = "red";
}