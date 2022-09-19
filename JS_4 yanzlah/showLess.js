const contain = document.getElementById("container");
const button = document.getElementById("btn");
const showLess = () => {
  if (contain.style.display == "block") {
    contain.style.display = "none";
    button.innerHTML = "show more";
  } else {
    contain.style.display = "block";
  }
};
