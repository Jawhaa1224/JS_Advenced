const BgImg = document.getElementById("bgImg");
const Degree = document.getElementById("degree");
const CityName = document.getElementById("cityName");
const Daate = document.getElementById("daate");
const Img = document.getElementById("img");
const Input = document.getElementById("input");
const GetInput = document.getElementById("getInput");
const Cloudy = document.getElementById("cloudy");
const Humidity = document.getElementById("humidity");
const WindSpeed = document.getElementById("windSpeed");
const WindDegree = document.getElementById("windDegree");
const Condition = document.getElementById("condition");
const DetailCondition = document.getElementById("detailCondition");
const Type = document.getElementById("type");
const Search = document.getElementById("search");
let api;
let londonDate;
let timeZone;
let localDate;
let hour;
let array = [];
let Id = 0;
let date;
let newDate = new Date();
let toString = String(newDate);
let ubDate = toString.slice(0, 15);
Daate.innerHTML = ubDate;
api = `https://api.openweathermap.org/data/2.5/weather?q=ulaanbaatar&units=metric&appid=0a9b1d70e2d449a7fcadd8c7ceaaade5`;
fetch(api)
  .then((response) => response.json())
  .then((result) => ubFunc(result));
const ubFunc = (ubInfo) => {
  Degree.innerHTML = Math.round(ubInfo.main.temp) + "°";
  CityName.innerHTML = ubInfo.name;
  Cloudy.innerHTML = ubInfo.clouds.all + "%";
  Humidity.innerHTML = ubInfo.main.humidity + "%";
  WindSpeed.innerHTML = ubInfo.wind.speed + "km/h";
  WindDegree.innerHTML = ubInfo.wind.deg + "°";
  Condition.innerHTML = "Condition:";
  DetailCondition.innerHTML = ubInfo.weather[0].description;
  ubInfo.sys.type == 1
    ? (Type.innerHTML = "Not Night")
    : (Type.innerHTML = "Night");
  switch (ubInfo.weather[0].main) {
    case "Clouds":
      BgImg.style.backgroundImage = "url('cloud.jpg')";
      Img.src = "cloud.svg";
      break;
    case "Clear":
      BgImg.style.backgroundImage = "url('sun.jpg')";
      Img.src = "sun.svg";
      break;
    case "Snow":
      BgImg.style.backgroundImage = "url('snow.jpg')";
      Img.src = "snow.png";
      break;
    case "Rain" || "Drizzle":
      BgImg.style.backgroundImage = "url('rain.jpg')";
      Img.src = "rain.svg";
      break;
    case "Thunderstorm":
      BgImg.style.backgroundImage = "url('thunder.jpg')";
      Img.src = "thunder.png";
      break;
    case "Mist":
      BgImg.style.backgroundImage = "url('mist.jpg')";
      Img.src = "mist.png";
      break;
  }
};
Input.addEventListener("keydown", (el) => {
  if (el.key == "Enter" && Input.value != "") {
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
    alert(`${Input.value} is not city name`);
  } else {
    if (array.includes(Input.value)) {
      console.log(Input.value);
      for (i = 0; i < array.length; i++) {
        if (array[i] == Input.value) {
          document.getElementById(`a${i}`).style.display = "none";
        }
      }
      const Hot = document.createElement("li");
      Hot.innerHTML = Input.value;
      Hot.className = "py-3 text-xl px-10 text-gray-400";
      Hot.id = `a${Id}`;
      GetInput.appendChild(Hot);
      array.push(`${Input.value}`);
      Id++;
    } else {
      const Hot = document.createElement("li");
      Hot.innerHTML = Input.value;
      Hot.className = "py-3 text-xl px-10 text-gray-400";
      Hot.id = `a${Id}`;
      GetInput.appendChild(Hot);
      array.push(`${Input.value}`);
      Id++;
    }
    Degree.innerHTML = Math.floor(info.main.temp) + "°";
    CityName.innerHTML = info.name;
    Cloudy.innerHTML = info.clouds.all + "%";
    Humidity.innerHTML = info.main.humidity + "%";
    WindDegree.innerHTML = info.wind.deg + "°";
    WindSpeed.innerHTML = info.wind.speed + "km/h";
    Condition.innerHTML = "Condition:";
    DetailCondition.innerHTML = info.weather[0].description;
    timeZone = info.timezone;
    zorvvTsag = Number(timeZone) / 3600;
    londonDate = `${newDate.toLocaleString("en-GB", {
      timeZone: "Europe/London",
    })}`;
    hour = londonDate.slice(12, 14);
    localDate = Number(hour) + zorvvTsag - 1;
    if (localDate > 24) {
      localDate = localDate - 24;
    }
    localDate > 6 && localDate < 19
      ? (Type.innerHTML = "Not Night")
      : (Type.innerHTML = "Night");
    switch (info.weather[0].main) {
      case "Clouds":
        BgImg.style.backgroundImage = "url('cloud.jpg')";
        Img.src = "cloud.svg";
        break;
      case "Clear":
        BgImg.style.backgroundImage = "url('sun.jpg')";
        Img.src = "sun.svg";
        break;
      case "Snow":
        BgImg.style.backgroundImage = "url('snow.jpg')";
        Img.src = "snow.png";
        break;
      case "Rain" || "Drizzle":
        BgImg.style.backgroundImage = "url('rain.jpg')";
        Img.src = "rain.svg";
        break;
      case "Thunderstorm":
        BgImg.style.backgroundImage = "url('thunder.jpg')";
        Img.src = "thunder.png";
        break;
      case "Mist":
        BgImg.style.backgroundImage = "url('mist.jpg')";
        Img.src = "mist.png";
        break;
    }
  }
};
