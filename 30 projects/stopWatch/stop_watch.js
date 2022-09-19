const Minuts = document.getElementById("minuts");
const Seconds = document.getElementById("seconds");
const Tens = document.getElementById("tens");
let touch = 1;
const start = () => {
  console.log(touch);
  if (touch === 1) {
    Interval = setInterval(() => {
      Tens.innerHTML = Number(Tens.innerHTML) + 1;
      if (Tens.innerHTML == 100) {
        Seconds.innerHTML = Number(Seconds.innerHTML) + 1;
        if (Seconds.innerHTML == 60) {
          Seconds.innerHTML = 0;
          Minuts.innerHTML = Minuts.innerHTML + 1;
        }
        Tens.innerHTML = 00;
      }
    }, 10);
  }else {
    
  }
  touch++;
};
const pause = () => {
  clearInterval(Interval);
  document.getElementById("haha").style = "background-color:green";
};
const reset = () => {
  clearInterval(Interval);
  Minuts.innerHTML = "00";
  Seconds.innerHTML = "00";
  Tens.innerHTML = "00";
};
