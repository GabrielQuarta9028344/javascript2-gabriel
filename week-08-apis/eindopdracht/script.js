// API_KEY wordt geladen vanuit config.js (zie config.example.js voor instructies)

const showWeather = (data) => {
  const weatherInfo = document.querySelector('#weather-info');
  const weather = data.weather[0];
  const article = document.createElement('article');
  const title = document.createElement('h2');
  const icon = document.createElement('img');

  title.textContent = data.name;
  icon.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  icon.alt = weather.description;

  article.append(title, icon);

  const details = [
    ['Temperatuur', `${Math.round(data.main.temp)} °C`],
    ['Gevoelstemperatuur', `${Math.round(data.main.feels_like)} °C`],
    ['Luchtvochtigheid', `${data.main.humidity}%`],
    ['Windsnelheid', `${data.wind.speed} m/s`],
  ];

  details.forEach(([label, value]) => {
    const paragraph = document.createElement('p');
    const labelElement = document.createElement('span');
    const valueElement = document.createElement('span');

    labelElement.textContent = label;
    valueElement.textContent = value;
    paragraph.append(labelElement, valueElement);
    article.appendChild(paragraph);
  });

  weatherInfo.replaceChildren(article);
};

const getWeather = (city) => {
  const weatherInfo = document.querySelector('#weather-info');

  if (typeof API_KEY === 'undefined' || API_KEY === 'VUL_HIER_JE_KEY_IN') {
    weatherInfo.textContent = 'Stel eerst je OpenWeather API-key in config.js in.';
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      if (Number(data.cod) !== 200) {
        weatherInfo.textContent = `Weer niet gevonden: ${data.message || 'controleer de stadsnaam.'}`;
        return;
      }

      showWeather(data);
    })
    .catch(error => {
      console.error('Fout bij ophalen van het weer:', error);
      weatherInfo.textContent = 'Het weer kon niet worden opgehaald. Probeer het later opnieuw.';
    });
};

document.querySelector('#search-form').addEventListener('submit', event => {
  event.preventDefault();

  const input = document.querySelector('#city-input');
  const city = input.value.trim();

  if (!city) {
    return;
  }

  getWeather(city);
  input.value = '';
});
