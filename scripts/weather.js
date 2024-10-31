const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#fig1");



const url = `https://api.openweathermap.org/data/2.5/weather?lat=33.787914&lon=-117.853104&appid=191efa2d68869a89587035fa21c23e4c&units=imperial`;


async function weatherapiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); //Testing only
      displayResults(data); // uncomment when ready
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
      console.log(data); //Testing only
      displayForecast(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

weatherapiFetch();
forecastapiFetch();
forecastdates();