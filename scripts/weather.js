const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const url = `https://api.openweathermap.org/data/2.5/weather?lat=40.3431075073385&lon=-111.72294358422822&appid=97b84ccd2465927cb703d32aab5db828&units=imperial`;

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