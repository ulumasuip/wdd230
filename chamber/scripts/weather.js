const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#fig1");

const forecastTemp1 = document.querySelector("#forecast-temp-1");
const weatherIcon1 = document.querySelector("#weather-icon1");
const captionDesc1 = document.querySelector("#fig2");
const forecastday1 = document.querySelector("#forecast-day-1");

const forecastTemp2 = document.querySelector("#forecast-temp-2");
const weatherIcon2 = document.querySelector("#weather-icon2");
const captionDesc2 = document.querySelector("#fig3");
const forecastday2 = document.querySelector("#forecast-day-2");

const forecastTemp3 = document.querySelector("#forecast-temp-3");
const weatherIcon3 = document.querySelector("#weather-icon3");
const captionDesc3 = document.querySelector("#fig4");
const forecastday3 = document.querySelector("#forecast-day-3");

const url = `https://api.openweathermap.org/data/2.5/weather?lat=33.787914&lon=-117.853104&appid=191efa2d68869a89587035fa21c23e4c&units=imperial`;
const url1 = `https://api.openweathermap.org/data/2.5/forecast?lat=33.787914&lon=-117.853104&appid=191efa2d68869a89587035fa21c23e4c&units=imperial`;

async function weatherapiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", "weather icon");
  captionDesc.textContent = `${desc}`;
}

async function forecastapiFetch() {
  try {
    const response = await fetch(url1);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayForecast(data) {
  forecastTemp1.innerHTML = `${data.list[6].main.temp.toFixed(1)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.list[6].weather[0].icon}.png`;
  let desc1 = data.list[6].weather[0].description;
  weatherIcon1.setAttribute("src", iconsrc);
  weatherIcon1.setAttribute("alt", "weather icon");
  captionDesc1.textContent = `${desc1}`;

  forecastTemp2.innerHTML = `${data.list[14].main.temp.toFixed(1)}&deg;F`;
  const iconsrc1 = `https://openweathermap.org/img/w/${data.list[14].weather[0].icon}.png`;
  let desc2 = data.list[14].weather[0].description;
  weatherIcon2.setAttribute("src", iconsrc1);
  weatherIcon2.setAttribute("alt", "weather icon");
  captionDesc2.textContent = `${desc2}`;

  forecastTemp3.innerHTML = `${data.list[22].main.temp.toFixed(1)}&deg;F`;
  const iconsrc2 = `https://openweathermap.org/img/w/${data.list[22].weather[0].icon}.png`;
  let desc3 = data.list[22].weather[0].description;
  weatherIcon3.setAttribute("src", iconsrc2);
  weatherIcon3.setAttribute("alt", "weather icon");
  captionDesc3.textContent = `${desc3}`;
}

function forecastdates() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();
  const todayIndex = currentDate.getDay();

  forecastday1.innerHTML = `${daysOfWeek[(todayIndex + 1) % 7]}`;
  forecastday2.innerHTML = `${daysOfWeek[(todayIndex + 2) % 7]}`;
  forecastday3.innerHTML = `${daysOfWeek[(todayIndex + 3) % 7]}`;
}
weatherapiFetch();
forecastapiFetch();
forecastdates();