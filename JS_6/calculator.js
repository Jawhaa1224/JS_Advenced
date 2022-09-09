let niittoo = document.getElementById("calculator");
const tooBichih = (number) => {
  niittoo.innerHTML += number;
};
const AC = () => {
  niittoo.innerHTML = "";
};
const tseg = () => {
  if (niittoo.innerHTML[niittoo.innerHTML.length - 1] !== ".") {
    niittoo.innerHTML += ".";
  }
};
let hadaglah;
var hi;
const vildel = (operator) => {
  hi = operator;
  hadaglah = niittoo.innerHTML;
  AC();
};
const nemehHasah = () => {
  niittoo.innerHTML = number(niittoo.innerHTML) * "-1";
};
const tentsvv = () => {
  if (hi === "-") {
    niittoo.innerHTML = Number(niittoo.innerHTML) - Number(hadaglah);
  } else if (hi === "+") {
    niittoo.innerHTML = Number(niittoo.innerHTML) + Number(hadaglah);
  } else if (hi === "*") {
    niittoo.innerHTML = Number(niittoo.innerHTML) * Number(hadaglah);
  } else if (hi === "/") {
    niittoo.innerHTML = Number(hadaglah) / Number(niittoo.innerHTML);
  } else if (hi === "%") {
    niittoo.innerHTML = (Number(hadaglah) / 100) * Number(niittoo.innerHTML);
  }
};
