import { View, Text, Image } from 'react-native';
import dayjs from 'dayjs';
import WeatherData from '../types/weatherData';
import { getWeatherIcon } from '../helperFunctions/getIcon';

interface NextForecastProps {
  weather?: WeatherData;
}

const NextForecast: React.FC<NextForecastProps> = ({ weather }) => {
  return (
    <>
      <View>
        <Text className="text-2xl pt-4 border-b border-gray-300 my-2">
          Next Forecast
        </Text>
      </View>
      <View>
        {weather?.forecast.forecastday.map((forecast, index) => (
          <View
            className="flex flex-row justify-between border-b border-gray-200 my-4 mb-20 mt-6 px-6"
            key={index}
          >
            <View className="flex">
              <Text className="text-xl">
                {dayjs(forecast.date).format('dddd')}
              </Text>
              <Text className="text-xl text-muted">
                {dayjs(forecast.date).format('DD.MM')}
              </Text>
            </View>
            <Image
              source={getWeatherIcon(forecast.day.condition.text)}
              style={{ width: 70, height: 70, shadowColor: 'gray', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.75, shadowRadius: 2.84 }}
            />
            <Text className="text-xl text-muted">
              {forecast.day.maxtemp_c}° / {forecast.day.mintemp_c}°
            </Text>
          </View>
        ))}
      </View>
    </>
  );
};

export default NextForecast;