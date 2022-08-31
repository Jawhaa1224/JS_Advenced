let test = document.getElementsByClassName("gs");
let click = document.getElementsByTagName("button");
test[0].style.backgroundColor = "red";
test[0].style.width = "500px";
test[0].style.height = "500px";
click[0].style.backgroundColor = "blue";
click[0].style.color = "white";
click[1].style.backgroundColor = "blue";
click[1].style.color = "white";
click[0].style.position = "absolute";

const myFunction1 = () => {
    click[0].style.display = "none";
    click[0].style.position = "absolute"  
  test[0].style.backgroundColor = "green";
  click[1].style.display = "block";
};
const myFunction2 = () => {
    click[0].style.display = "block";
    click[1].style.display = "none";
    click[0].style.position = "absolute"  
  test[0].style.backgroundColor = "red";
};
