const tsenher = document.getElementById("Tsenher");
const ulaan = document.getElementById("Ulaan");
ulaan.addEventListener("keydown", (el) => {
  if (el.key == "a") {
    ulaan.style.width = Number(ulaan.style.width.split("px")) + 50 + "px";
    tsenher.style.width = Number(tsenher.style.width.split("px")) - 50 + "px";
  }
});
tsenher.addEventListener("keydown", (e) => {
  if (e.key == "l") {
    tsenher.style.width = Number(ulaan.style.width.split("px")) + 50 + "px";
    ulaan.style.width = Number(tsenher.style.width.split("px")) - 50 + "px";
  }
});