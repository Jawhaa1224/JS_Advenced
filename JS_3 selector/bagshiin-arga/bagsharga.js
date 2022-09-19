document.getElementsByClassName("gs")[0].style = "background-color:red;width:500px;height:500px;";
document.getElementsByTagName("button")[0].style = "background-color:blue;color:white;";

let test = document.getElementsByClassName("gs")[0];
let bgcolor = document.getElementsByClassName("gs")[0].style.backgroundColor;

console.log(bgcolor);
const myFunction = () => {
  if (bgcolor != "green") {
    bgcolor = "green";
  } else {
    bgcolor = "red";
  }
  test.style.backgroundColor = bgcolor;
};
 