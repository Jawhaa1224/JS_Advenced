let number = prompt("Too oruulna uu");

let backup = Number(number);
let check = 0;
while (number != 0) {
  let digit = number % 10;
  number = parseInt(number / 10);
  check = check * 10 + digit;
}

console.log(backup === check ? "palindrom mun bn" : " palindrom bish bn");
console.log(document.querySelectorAll(".test"))
