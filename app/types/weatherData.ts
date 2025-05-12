export interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    humidity: number;
    wind_kph: number;
    precip_mm: number;
    condition: {
      text: string;
      icon: string;
    };
    pressure_mb: number;
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        avgtemp_c: number;
        daily_chance_of_rain: number;
        condition: {
          text: string;
          icon: string;
        };
      };
      hour: Array<{
        time: string;
        temp_c: number;
        humidity: number;
        wind_kph: number;
        precip_mm: number;
        pressure_mb: number;
        is_day: number;
        condition: {
          text: string;
          icon: string;
        };
        will_it_rain: number;
        chance_of_rain: number;
      }>;
    }>;
  };
}
