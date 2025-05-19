import React from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { useWeatherQuery } from "../features/useWeatherQuery";
import { useDispatch } from "react-redux";
import { setCity } from "../store/citySlice";
import { useRouter } from "expo-router";

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
    <View className="justify-center items-center">
      <TouchableOpacity
        onPress={() => {
          dispatch(setCity(city));
          router.push("/Main");
        }}
        className="flex m-1 border-hairline w-full h-32"
      >
        <Text>{data.location.name}</Text>
        <Text>{data.current.temp_c}°C</Text>
        <Text>{data.current.condition.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WeatherCard;