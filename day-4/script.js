const citysearch = document.getElementById('search');
const cityweather = document.getElementById('results');
const cityenter = document.getElementById('weather-box');
citysearch.addEventListener('click', getWeather);
async function getWeather() {
    const city = cityenter.value.trim();
    if (!city) {
        cityweather.innerText = "Please enter a city name";
        return;
    }
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cd2fe9a4bfe40126346638510cacfcb8&units=metric`);
        if (!response.ok) {
            throw new Error("Network no response");
        }
        const data = await response.json();
        cityweather.innerText = `
        City: ${data.name}
        Temp: ${data.main.temp} °C
        Weather: ${data.weather[0].description}`
    } catch (error) {
        console.log("error", error);
        cityweather.innerText = "Error fetching weather. Please check city name.";
    }
}
