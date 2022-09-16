const Start = document.getElementById("start");
const Pause = document.getElementById("pause");
const Reset = document.getElementById("reset");
const Minuts = document.getElementById("minuts");
const Seconds = document.getElementById("seconds");
const Tens = document.getElementById("tens");
const start = () => {
  const zogsoh = setInterval(() => {
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
};
const pause = () => {
  clearInterval(zogsoh);
};
const reset = () => {};
