const apiKey = 'c751d3a6e9bf43e687d51122241909';

async function getWeather() {
    const city = document.getElementById('city').value;
    const apiURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (response.ok) {
            document.getElementById('weatherResult').innerHTML = `
                <h2>Weather in ${data.location.name}</h2>
                <h4>Temperature: ${data.current.temp_c}°C</h4>
                <h4>Condition: ${data.current.condition.text}</h4>
            `;
        } else {
            document.getElementById('weatherResult').innerHTML = `<h4>${data.error.message}</h4>`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherResult').innerHTML = `<h4>Unable to fetch weather data</h4>`;
    }
}