import axios from 'axios';

const API_KEY = 'e8001a0cf9b94981a0e71308251105';

export const fetchWeatherData = async (location: string) => {
  const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=5&aqi=no&alerts=no`)
  const weatherData = response.data;


  return weatherData;
};
  export const fetchCitySuggestions = async (query: string) => {
  const response = await axios.get(
    `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`
  );
  return response.data; 
};
