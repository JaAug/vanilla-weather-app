function formatDate(timestamp) {
  let date = new Date(timestamp);
  let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let weekday = weekdays[date.getDay()];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${weekday}, ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windspeedElement = document.querySelector("#windspeed");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windspeedElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}
let apiKey = "dd374300742eea37df64b5cff024beb8";
let unit = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=hanover&units=${unit}&appid=${apiKey}`;
axios.get(apiUrl).then(displayTemperature);
