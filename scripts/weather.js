const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const url = `https://api.openweathermap.org/data/2.5/weather?lat=33.787914&lon=-117.853104&appid=191efa2d68869a89587035fa21c23e4c`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw  Error(await response.text());
        }
    } catch (error) {
       console.log(error); 
    }
}
apiFetch();

function displayResults(data) {
    let desc = data.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].main);
    currentTemp.innerHTML = `${data.main.temp}&deg;F - ${desc}`;
}