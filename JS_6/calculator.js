let niittoo = document.getElementById("calculator");
const tooBichih = (number) => {
  niittoo.innerHTML += number;
  if (niittoo.innerHTML.length > 16) {
    niittoo.style.fontSize = "24px";
  } else if (niittoo.innerHTML.length > 12) {
    niittoo.style.fontSize = "32px";
  } else if (niittoo.innerHTML.length > 10) {
    niittoo.style.fontSize = "40px";
  }
};
const AC = () => {
  niittoo.innerHTML = "";
  niittoo.style.fontSize = "48px";
};
const tseg = () => {
  if (niittoo.innerHTML[niittoo.innerHTML.length - 1] !== ".") {
    niittoo.innerHTML += ".";
  }
  if (niittoo.innerHTML.length > 16) {
    niittoo.style.fontSize = "24px";
  } else if (niittoo.innerHTML.length > 12) {
    niittoo.style.fontSize = "32px";
  } else if (niittoo.innerHTML.length > 10) {
    niittoo.style.fontSize = "40px";
  }
};
let hadaglah;
let hi;
const vildel = (operator) => {
  hi = operator;
  hadaglah = niittoo.innerHTML;
  AC();
  if (niittoo.innerHTML.length > 16) {
    niittoo.style.fontSize = "24px";
  } else if (niittoo.innerHTML.length > 12) {
    niittoo.style.fontSize = "32px";
  } else if (niittoo.innerHTML.length > 10) {
    niittoo.style.fontSize = "40px";
  }
};
const nemehHasah = () => {
  niittoo.innerHTML = number(niittoo.innerHTML) * "-1";
  if (niittoo.innerHTML.length > 16) {
    niittoo.style.fontSize = "24px";
  } else if (niittoo.innerHTML.length > 12) {
    niittoo.style.fontSize = "32px";
  } else if (niittoo.innerHTML.length > 10) {
    niittoo.style.fontSize = "40px";
  }
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
  if (niittoo.innerHTML.length > 16) {
    niittoo.style.fontSize = "24px";
  } else if (niittoo.innerHTML.length > 12) {
    niittoo.style.fontSize = "32px";
  } else if (niittoo.innerHTML.length > 10) {
    niittoo.style.fontSize = "40px";
  }
};
document.addEventListener("keydown", (event) => {
  if (event.key === "c") AC();
});
document.addEventListener("keydown", (event) => {
  if (
    (event.key.charCodeAt() > 47 && event.key.charCodeAt() < 58) ||
    event.key.charCodeAt() === 46
  ) {
    if (event.key.charCodeAt() === 46) {
      tseg();
    } else {
      niittoo.innerHTML += event.key;
    }
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "-" ) vildel();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "+") vildel();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "*" ) vildel();
});
document.addEventListener("keydown", (event) => {
  if (event.key ===  "/" ) vildel();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "%") vildel();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "v") niittoo.innerHTML = number(niittoo.innerHTML) * "-1";
});
document.addEventListener("keydown", (event) => {
  if (event.key === "="){
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
    if (niittoo.innerHTML.length > 16) {
      niittoo.style.fontSize = "24px";
    } else if (niittoo.innerHTML.length > 12) {
      niittoo.style.fontSize = "32px";
    } else if (niittoo.innerHTML.length > 10) {
      niittoo.style.fontSize = "40px";
    }
  };
});