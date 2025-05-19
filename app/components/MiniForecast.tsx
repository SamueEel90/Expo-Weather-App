import { View, Text, Image, ScrollView } from "react-native";
import { WeatherData } from "../types/weatherData";

import { getWeatherIcon } from "../helperFunctions/getIcon";
import dayjs from "dayjs";

interface MiniForecastProps {
  weather?: WeatherData;
}

const MiniForecast: React.FC<MiniForecastProps> = ({ weather }) => {
  const getHourOnly = (timeString?: string): string => {
    if (!timeString) return "N/A";
    return dayjs(timeString).format("HH ");
  };

  return (
    <>
      <Text className="text-2xl pt-4 border-b border-gray-300">Today</Text>
      <ScrollView horizontal={true} className="flex flex-row h-40 mt-12 px-6 space-x-10">
        {weather?.forecast?.forecastday?.[0]?.hour?.slice(6).map((hourData, index) => (
          <View key={index} className="mx-4">
            <Text className="text-xl">{getHourOnly(hourData.time)}</Text>
            <Image
              source={hourData.condition?.text ? getWeatherIcon(hourData.condition.text) : undefined}
              style={{ width: 40, height: 40 }}
            />
            <Text className="text-xl">{hourData.temp_c}°C</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default MiniForecast;
