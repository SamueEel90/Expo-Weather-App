import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { useWeatherQuery } from "./features/useWeatherQuery";
import { WeatherData } from "./types/weatherData"; 

const HomePage: React.FC = () => {
  const [city, setCity] = useState<string>("Warsaw");
  const [queryCity, setQueryCity] = useState<string>("Warsaw");
  const { data, isLoading, error } = useWeatherQuery(queryCity);

  const handleSearch = () => {
    setQueryCity(city);
  };

  return (
    <>
      <View className="h-full bg-red-200 p-4">
        <TextInput
          className="border p-2 mb-4"
          placeholder="Enter city name"
          value={city}
          onChangeText={setCity}
        />
        <Button title="Search" onPress={handleSearch} />
        {isLoading && <Text>Loading...</Text>}
        {error && <Text>Error fetching weather data</Text>}
        {data && (
          <View>
            <Text className="m-4">
              Temperature: {data.forecast.forecastday[0].day.maxtemp_c}°C
            </Text>
            <Text className="m-4">
              Location: {data.location.name}, {data.location.country}
            </Text>
            <Text className="m-4">
              Condition: {data.current.condition.text}
            </Text>
          </View>
        )}
      </View>
    </>
  );
};

export default HomePage;
