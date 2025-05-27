import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { useWeatherQuery } from "./features/useWeatherQuery";
import dayjs from "dayjs";
import { getWeatherIcon } from "./helperFunctions/getIcon";
import { useRouter } from "expo-router";
import MiniForecast from "./components/MiniForecast";
import NextForecast from "./components/NextForecast";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const Main: React.FC = () => {
  const router = useRouter();
  const city = useSelector((state: RootState) => state.city.city);
  const { data, isLoading, error } = useWeatherQuery(city);

  const formattedDate = dayjs(data?.forecast.forecastday[0].date).format(
    "ddd, DD MMMM"
  );

  return (
    <ScrollView className="flex-1">
      <View className="h-full overflow-scroll bg-background p-4 pt-14">
        <Text className="text-secondary text-2xl font-semibold">
          {data?.location.name}, {data?.location.country}
        </Text>
        <View className="absolute top-12 right-8">
          <TouchableOpacity onPress={() => router.push("./LocationsPage")}>
            <Image
              source={require("../assets/icons/icons8-menu-60.png")}
              style={{ width: 32, height: 32, shadowColor: 'gray', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.75, shadowRadius: 2.84 }}
            />
          </TouchableOpacity>
        </View>
        <Text className="text-muted text-xl">{formattedDate}</Text>
        <View className="items-center justify-center">
          <Image
            className="mt-10"
            source={
              data?.current?.condition?.text
                ? getWeatherIcon(data.current.condition.text)
                : null
            }
            style={{ width: 200, height: 200, shadowColor: 'gray', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.75, shadowRadius: 1.84, borderRadius: 20 }}
            resizeMode="contain"
          />
        </View>
        <View className="mt-4 items-center">
          <Text className="mt-4 text-6xl text-secondary">
            {data?.forecast.forecastday[0].day.maxtemp_c}°C
          </Text>
          <Text className="-mt-1 text-4xl text-muted">
            {data?.current.condition.text}
          </Text>
        </View>
        <View className="bg-surface rounded-2xl">
          <View className="mt-6 flex-row justify-between items-center w-full px-12">
            <Text className="text-muted text-xl">Wind</Text>
            <Text className="text-muted text-xl">Humidity</Text>
            <Text className="text-muted text-xl">Pressure</Text>
          </View>
          <View className="flex-row justify-between items-center w-full px-12">
            <Text className="text-primary text-xl">
              {data?.current.wind_kph} km/h
            </Text>
            <Text className="text-primary text-xl">
              {data?.current.humidity}%
            </Text>
            <Text className="text-primary text-xl">
              {data?.current.pressure_mb} hPa
            </Text>
          </View>
          <MiniForecast weather={data} />
          <NextForecast weather={data} />
          {isLoading && <Text>Loading...</Text>}
          {error && <Text>Error fetching weather data</Text>}
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;
