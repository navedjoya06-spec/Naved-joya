const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherResult = document.getElementById('weather-result');

// Put your actual OpenWeatherMap API Key here
const API_KEY = "d7debe393b7e2d82c9b572c6e8e0b646"; 

// Event Listeners for button click and "Enter" key
searchBtn.addEventListener('click', () => fetchWeather(cityInput.value));
cityInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') fetchWeather(cityInput.value);
});

async function fetchWeather(city) {
  // 1. Validation
  if (!city.trim()) {
    weatherResult.innerHTML = `<p class="error-text">Please enter a city name.</p>`;
    return;
  }

  // 2. Loading State (Bonus Feature)
  weatherResult.innerHTML = `
    <div class="spinner"></div>
    <p>Fetching weather data...</p>
  `;

  try {
    // 3. API Call
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    
    // 4. Error Handling
    if (!response.ok) {
      throw new Error("City not found or API error.");
    }

    const data = await response.json();
    displayWeather(data);

  } catch (error) {
    // 5. Display Error UI
    weatherResult.innerHTML = `<p class="error-text">⚠️ ${error.message}</p>`;
    // Reset background to default on error
    document.body.style.background = "linear-gradient(135deg, #89f7fe, #66a6ff)";
  }
}

function displayWeather(data) {
  // Extract data fields
  const cityName = data.name;
  const temp = Math.round(data.main.temp);
  const condition = data.weather[0].main;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  
  // Format current date
  const dateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  // Change Background based on weather condition (Bonus Feature)
  updateBackground(condition);

  // Inject UI
  weatherResult.innerHTML = `
    <div class="weather-details">
      <h2>${cityName}, ${data.sys.country}</h2>
      <p class="date-text">${dateStr}</p>
      
      <img src="https://openweathermap.org/img/wn/${icon}@4x.png" alt="${condition}">
      
      <div class="temp">${temp}°C</div>
      <div class="condition">${description}</div>
      
      <div class="extra-info">
        <div>💧 Humidity<br><b>${humidity}%</b></div>
        <div>💨 Wind<br><b>${windSpeed} km/h</b></div>
      </div>
    </div>
  `;
}

// Function to handle dynamic backgrounds
function updateBackground(condition) {
  const body = document.body;
  
  switch(condition) {
    case "Rain":
    case "Drizzle":
      body.style.background = "linear-gradient(135deg, #74ebd5, #ACB6E5)"; // Grey/Blue
      break;
    case "Clear":
      body.style.background = "linear-gradient(135deg, #56CCF2, #2F80ED)"; // Bright Blue
      break;
    case "Clouds":
      body.style.background = "linear-gradient(135deg, #bdc3c7, #2c3e50)"; // Darker Grey
      break;
    case "Snow":
      body.style.background = "linear-gradient(135deg, #E0EAFC, #CFDEF3)"; // Icy White
      break;
    case "Thunderstorm":
      body.style.background = "linear-gradient(135deg, #373B44, #4286f4)"; // Dark Stormy
      break;
    default:
      body.style.background = "linear-gradient(135deg, #89f7fe, #66a6ff)"; // Default Blue
  }
}