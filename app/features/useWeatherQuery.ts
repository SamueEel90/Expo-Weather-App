import { useQuery } from '@tanstack/react-query';
import { fetchWeatherData } from '../api/weatherApi';

export const useWeatherQuery = (location: string) =>
  useQuery({
    queryKey: ['weather', location],
    queryFn: () => fetchWeatherData(location),
  });