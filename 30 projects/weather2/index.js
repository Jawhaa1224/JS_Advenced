const Date = document.getElementById("date");
const Input = document.getElementById("input");
const Location = document.getElementById("location");
const Image = document.getElementById("image");
const Degree = document.getElementById("degree");
const Sup = document.getElementById("sup");
const WindSpeed = document.getElementById("windSpeed");
const FeelsLike = document.getElementById("feelsLike");
const Condition = document.getElementById("condition");
let api;
Degree.innerHTML = "0°";
WindSpeed.innerHTML = "wind-speed: 0";
FeelsLike.innerHTML = "feels-like:0";
Condition.innerHTML = "nothing";
Input.addEventListener("keydown", (el) => {
  if (el.key == "Enter" && Input.value != "") {
    Degree.innerHTML = `0°`;
    Image.src = "";
    Condition.style.color = "black";
    apiHvlejAvah(Input.value);
  }
});
const apiHvlejAvah = async (cityName) => {
  api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=0a9b1d70e2d449a7fcadd8c7ceaaade5`;
  Fetch();
};
const Fetch = () => {
  fetch(api)
    .then((response) => response.json())
    .then((result) => detail(result));
};
const detail = (info) => {
  if (info.cod == "404") {
    Degree.innerHTML = "0°";
    WindSpeed.innerHTML = "wind-speed: 0";
    FeelsLike.innerHTML = "feels-like:0";
    Condition.innerHTML = "nothing";
    Image.src = "error.png";
  } else {
    console.log(info);
    const temp = info.main.temp;
    const speed = info.wind.speed;
    const like = info.main.feels_like;
    Degree.innerHTML = Math.floor(temp) + "°";
    WindSpeed.innerHTML = "wind-speed:" + speed;
    FeelsLike.innerHTML = "feels-like:" + like;
    Condition.innerHTML = info.weather[0].description;
    switch (info.weather[0].main) {
      case "Clouds":
        Condition.style.color = "#d4d4d8";
        Image.src = "./clouds.png";
        break;
      case "Clear":
        Condition.style.color = "#facc15";
        Image.src = "sun.png";
        break;
      case "Snow":
        Condition.style.color = "#cbd5e1";
        Image.src = "snow.png";
        break;
      case "Rain" && "Drizzle":
        Condition.style.color = "#cbd5e1";
        Image.src = "rain.png";
        break;
      case "Thunderstorm":
        Condition.style.color = "#eab308";
        Image.src = "thunder.png";
        break;
    }
    Image.style.display = "block";
  }
};
