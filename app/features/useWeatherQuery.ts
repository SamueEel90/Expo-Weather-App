import { useQuery } from '@tanstack/react-query';
import { fetchWeatherData } from '../api/weatherApi';
import  WeatherData  from '../types/weatherData';

export const useWeatherQuery = (location: string) => 
  useQuery<WeatherData>({
    queryKey: ['weather', location],
    queryFn: () => fetchWeatherData(location),
  });