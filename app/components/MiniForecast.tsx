import { View, Text, Image } from "react-native"
import { WeatherData } from "../types/weatherData"
import { getWeatherIcon } from "../helperFunctions/getIcon";
import dayjs from "dayjs";
interface MiniForecastProps {
  weather?: WeatherData;
}

const MiniForecast: React.FC<MiniForecastProps> = ({ weather }) => {
  
  const currentHour = new Date().getHours();
  const hourPlus4 = (currentHour + 4) % 24;
  const hourPlus8 = (currentHour + 8) % 24;
  const hourPlus12 = (currentHour + 12) % 24;


const getHourOnly = (timeString?: string): string => {
  if (!timeString) return "N/A";
  return dayjs(timeString).format("hh A"); 
};

  return (
  <>
  <Text className=" text-2xl pt-4 border-b border-gray-300">Today</Text>
    <View className="flex flex-row h-40 justify-between mt-12 px-6  space-x-10 ">
      
      
      <View >
        <Text>{getHourOnly(weather?.forecast?.forecastday?.[0]?.hour?.[hourPlus4]?.time)}</Text>
        <Image 
        source={weather?.current?.condition?.text ? getWeatherIcon(weather?.forecast?.forecastday?.[0]?.hour?.[hourPlus4]?.condition.text) : undefined} 
        style={{ width: 50, height: 50 }} />
        <Text>{weather?.forecast?.forecastday?.[0]?.hour?.[hourPlus4]?.temp_c}°C</Text>
      </View>
        <View className="bottom-6">
        <Text>{getHourOnly(weather?.forecast?.forecastday?.[0]?.hour?.[hourPlus8]?.time)}</Text>
        <Image 
        source={weather?.current?.condition?.text ? getWeatherIcon(weather?.forecast?.forecastday?.[0]?.hour?.[hourPlus8]?.condition.text) : undefined} 
        style={{ width: 50, height: 50 }} />
        <Text>{weather?.forecast?.forecastday?.[0]?.hour?.[hourPlus8]?.temp_c}°C</Text>
      </View>
        <View>
        <Text>{getHourOnly(weather?.forecast?.forecastday?.[0]?.hour?.[hourPlus12]?.time)}</Text>
        <Image 
        source={weather?.current?.condition?.text ? getWeatherIcon(weather?.forecast?.forecastday?.[0]?.hour?.[hourPlus12]?.condition.text) : undefined} 
        style={{ width: 50, height: 50 }} />
        <Text>{weather?.forecast?.forecastday?.[0]?.hour?.[hourPlus12]?.temp_c}°C</Text>
      </View>
      
   

    </View>
    </>
  );
}
export default MiniForecast;