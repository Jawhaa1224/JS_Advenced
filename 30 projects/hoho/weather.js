const Err = document.getElementById("err");
const Input = document.getElementById("input");
const GetLocation = document.getElementById("getLocation");
const Sun = document.getElementById("sun");
const Rain = document.getElementById("rain");
const Cloud = document.getElementById("cloud");
const Thunder = document.getElementById("thunder");
const Mist = document.getElementById("mist");
const Snow = document.getElementById("snow");
const Degree = document.getElementById("degree");
const Weather = document.getElementById("weather");
const Location = document.getElementById("location");
const FeelsLike = document.getElementById("feelsLike");
const Humidity = document.getElementById("humidity");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const Back = document.getElementById("back");
let i = 1;
let api;
Input.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && Input.value !== "") {
    requestApi(Input.value);
  }
});
GetLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSucceed, onError);
  } else {
    alert("browser chin bolohgui bn");
  }
});
const onSucceed = (position) => {
  const { latitude, longitude } = position.coords;
  api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=0a9b1d70e2d449a7fcadd8c7ceaaade5`;
  fetchData();
};
const onError = (error) => {
  Err.innerHTML = error.message;
  Err.style.display = "flex";
  Err.style.backgroundColor = "#fecdd3";
  Err.style.color = "#be123c";
  Err.style.paddingLeft = "10px";
};
const requestApi = (city) => {
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0a9b1d70e2d449a7fcadd8c7ceaaade5`;
  fetchData();
};
const fetchData = () => {
  Err.innerHTML = "Get weather details";
  Err.style.display = "flex";
  fetch(api)
    .then((response) => response.json())
    .then((result) => weatherDetail(result));
};
const weatherDetail = (info) => {
  if (info.cod == "404") {
    Err.innerHTML = `${Input.value} is not city name`;
    Err.style.display = "flex";
    Err.style.backgroundColor = "#fecdd3";
    Err.style.color = "#be123c";
    Err.style.paddingLeft = "10px";
  } else {
    Err.style.backgroundColor = "#e0f2fe";
    Err.style.color = "#38bdf8";
    page1.style.display = "none";
    page2.style.display = "block";
    const City = info.name;
    const country = info.sys.country;
    const { description, id } = info.weather[0];
    const { feels_like, humidity, temp } = info.main;
    Location.innerHTML = `${City},${country}`;
    Weather.innerHTML = `${description}`;
    FeelsLike.innerHTML = Math.floor(feels_like) + FeelsLike.innerHTML;
    Humidity.innerHTML = humidity + Humidity.innerHTML;
    Degree.innerHTML = Math.floor(temp);
    if (description.includes("cloud")) Cloud.classList.remove("hidden");
    if (description.includes("sky")) Sun.classList.remove("hidden");
    if (description.includes("mist")) Mist.classList.remove("hidden");
    if (description.includes("thunder")) Thunder.classList.remove("hidden");
    if (description.includes("rain")) Rain.classList.remove("hidden");
    if (description.includes("snow")) Snow.classList.remove("hidden");
    console.log(info);
  }
};
Back.addEventListener("click", () => {
  page2.style.display = "none";
  page1.style.display = "block";
  Input.value = "";
  Err.style.display = "none";
});
