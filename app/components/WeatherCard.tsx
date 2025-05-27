import React from "react";
import { View, Text, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import { useWeatherQuery } from "../features/useWeatherQuery";
import { useDispatch } from "react-redux";
import { setCity } from "../store/citySlice";
import { useRouter } from "expo-router";
import { getWeatherIcon } from "../helperFunctions/getIcon";

type Props = {
  city: string;
};

const WeatherCard: React.FC<Props> = ({ city }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data, isLoading, error } = useWeatherQuery(city);

  if (isLoading) return <ActivityIndicator />;
  if (error || !data) return <Text>Failed to load {city}</Text>;

  return (
    <View className="flex justify-center items-center">
      <TouchableOpacity
        onPress={() => {
          dispatch(setCity(city));
          router.push("/Main");
        }}
        className="flex-1 m-2 px-4 rounded-2xl w-40 h-50"
      >
        <View className="flex flex-row justify-between items-center">
          <Text className="mt-2 font-bold">{data.location.name}</Text>
          <Text className="mt-2 text-xl text-right">{data.current.temp_c}°</Text>
        </View>
        <View className="items-center justify-center mt-2">
          <Image
        source={
          data.current.condition?.text
            ? getWeatherIcon(data.current.condition.text)
            : undefined
        }
        style={{ width: 50, height: 50 }}
          />
        </View>
        <Text className="text-center text-l text-opacity-10">{data.current.condition.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WeatherCard;