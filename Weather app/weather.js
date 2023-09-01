const apiKey = "ea6a75674d5e2e316aad22f702c78f25";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather() {
  const inputElement = document.querySelector('.js-city-input');
  const city = inputElement.value;

  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


  if (response.status == 404) {
    document.querySelector('.js-info-container')
      .innerHTML = 'Error, enter valid location.';
  } else {
    const data = await response.json();
    generateHTML(data);
  }
  inputElement.value = '';
}
checkWeather();

document.querySelector('.js-search-button')
  .addEventListener('click', () => {
    checkWeather();
  });

document.querySelector('.js-city-input')
  .addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
      checkWeather();
    }
  });

function generateHTML(data) {
  let infoHTML = `
    <img src="images/${data.weather[0].main}.png" class="weather-image">
    <div class="temperature">${data.main.temp}&#176;C</div>
    <div class="city-name">${data.name}</div>

    <div class="humidity-wind-container">
      <div class="humidity-container">
        <img class="humidity-image" src="images/humidity.png">
        <div class="humidity-info-container">
          <div class="humidity-percentage">${data.main.humidity}%</div>
          <div class="humidity-text">Humidity</div>
        </div>
      </div>

      <div class="wind-container">
        <img class="wind-image" src="images/wind.png">
        <div class="wind-info-container">
          <div class="wind-speed">${data.wind.speed}<span class="speed-unit"> km/h</span></div>
          <div class="wind-text">Wind Speed</div>
        </div>
      </div>
    </div>
  `;
  document.querySelector('.js-info-container')
    .innerHTML = infoHTML;
}