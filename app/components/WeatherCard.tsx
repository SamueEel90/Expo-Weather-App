
import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useWeatherQuery } from "../features/useWeatherQuery";

type Props = {
  city: string;
};

const WeatherCard: React.FC<Props> = ({ city }) => {
  const { data, isLoading, error } = useWeatherQuery(city);

  if (isLoading) return <ActivityIndicator />;
  if (error || !data) return <Text >Failed to load {city}</Text>;

  return (
    <View >
      <Text>{data.location.name}</Text>
      <Text>{data.current.temp_c}°C</Text>
      <Text>{data.current.condition.text}</Text>
    </View>
  );
};

export default WeatherCard;