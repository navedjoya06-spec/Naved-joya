function fakeAPICall() {
  console.log("Fetching user details...");
  setTimeout(() => {
    console.log("User data received ");
    
    // Nested timeout for processing data
    setTimeout(() => {
      console.log("Processing Data...");
    }, 1000); 
    
  }, 2000);
}

fakeAPICall();
async function getWeather() {
  console.log("Fetching weather...");
  
  try {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true";
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Extracting temperature and wind speed from the current_weather object
    const temp = data.current_weather.temperature;
    const wind = data.current_weather.windspeed;
    
    console.log(`Current Temp: ${temp}°C`);
    console.log(`Wind Speed: ${wind} km/h`);
    
  } catch (error) {
    console.error("Failed to fetch weather data:", error.message);
  }
}

getWeather();