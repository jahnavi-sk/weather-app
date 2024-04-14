const axios = require('axios');
const express = require('express');
const app = express();

async function getCurrentWeather(cityName) {
  const apiKey = 'API__kEY';     // Replace with your OpenWeatherMap API key
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    const weatherData = response.data;

    // Extract the relevant data
    const weather = {
      description: weatherData.weather[0].description,
      temperature: weatherData.main.temp,
      feelsLike: weatherData.main.feels_like,
      humidity: weatherData.main.humidity,
    };

    return weather;
  } catch (error) {
    console.error('Error fetching weather:', error.response.data);
    throw new Error('Unable to fetch weather data');
  }
}

// API endpoint to get weather
app.get('/weather', async (req, res) => {
  const cityName = req.query.cityName;
  try {
    const weather = await getCurrentWeather(cityName);
    res.json(weather);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
