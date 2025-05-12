import {View, Text, Image} from 'react-native'
import dayjs from 'dayjs';
import { WeatherData } from '../types/weatherData';
import { getWeatherIcon } from '../helperFunctions/getIcon';
import CustomText from './CustomText';
interface NextForecastProps  {
weather? : WeatherData;
}

const NextForecast:React.FC<NextForecastProps> = ({ weather }) => {
return (
  <>
  <View>
  
          <Text className="text-2xl pt-4 border-b border-gray-300 my-2">
          Next Forecast
        </Text>
  </View>
  <View>
    {weather?.forecast.forecastday.map((forecast, index) => (
      <View className='flex flex-row justify-between border-b border-gray-200 my-4 mb-20 mt-6 px-6' key={index}>
        <View className='flex'>
      <Text className='text-xl' >{dayjs(weather?.forecast.forecastday[index].date).format('dddd')}</Text>
       <Text className='text-xl text-muted' >{dayjs(weather?.forecast.forecastday[index].date).format('DD.MM')}</Text>
       </View>
      
      <Image 
      source={getWeatherIcon(weather.forecast.forecastday[index].day.condition.text)}
      style= {{width : 70, height : 70}}
      >

      </Image>
     
      <Text className='text-xl  text-muted' >{weather?.forecast.forecastday[index].day.maxtemp_c}°  {weather?.forecast.forecastday[index].day.mintemp_c}°</Text>
  
      </View>
    ))}
  
  </View>
  </>
)
}
export default NextForecast;