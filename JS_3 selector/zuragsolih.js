document.getElementsByClassName("test")[0].style =
  "width: 100px; height: 100px"

let test = document.getElementsByClassName("test")[0].src="happy.jpeg"
let swap = document.getElementsByClassName("test")[0].src="angry.png"

function myFunction() {
  console.log(swap);
  if (swap === "angry.png") {
    swap = document.getElementsByClassName("test")[0].src="happy.jpeg"
  } else {
    swap = document.getElementsByClassName("test")[0].src="angry.png"
  }
  test.style.src=swap;
}