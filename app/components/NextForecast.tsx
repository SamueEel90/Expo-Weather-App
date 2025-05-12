import {View, Text, Image} from 'react-native'
import dayjs from 'dayjs';
import { WeatherData } from '../types/weatherData';
import { getWeatherIcon } from '../helperFunctions/getIcon';
interface NextForecastProps  {
weather? : WeatherData;
}

const NextForecast:React.FC<NextForecastProps> = ({ weather }) => {
return (
  <>
  <View>
  <Text className=" text-2xl pt-4">Next Forecasts</Text>
  </View>
  <View>
    {weather?.forecast.forecastday.map((forecast, index) => (
      <View className='flex flex-row justify-between' key={index}>
      <Text >{dayjs(weather?.forecast.forecastday[index].date).format('dddd')}</Text>
      <Image 
      source={getWeatherIcon(weather.forecast.forecastday[index].day.condition.text)}
      style= {{width : 10, height : 10}}
      ></Image>
      <Text >{dayjs(weather?.forecast.forecastday[index].date).format('DD.MM')}</Text>
      <Text>{weather?.forecast.forecastday[index].day.mintemp_c}°C</Text>
      <Text>{weather?.forecast.forecastday[index].day.maxtemp_c}°C</Text>
      </View>
    ))}
  
  </View>
  </>
)
}
export default NextForecast;