import { useEffect, useState } from "react";
import { TextInput, View, Text, FlatList, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import { fetchCitySuggestions } from "../api/weatherApi";
import { useWeatherQuery } from "../features/useWeatherQuery";

const LocationSearch: React.FC = () => {
  const [input, setInput] = useState("");
  const [selectedCity, setSelectedCity] = useState("Trencin");
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const { data, isLoading, error } = useWeatherQuery(selectedCity);

const handleSelect = async (cityName: string) => {
  setInput(cityName);
  setSelectedCity(cityName);
  setSuggestions([]);

  try {
    await fetch('http://192.168.100.11:3001/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: cityName }),
    });
  } catch (error) {
    console.error("Failed to save city:", error);
  }
};

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (input.trim() && input !== selectedCity) {
        const results = await fetchCitySuggestions(input);
        setSuggestions(results);
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [input]);

  return (
    <View className="mt-11 px-4">
      <TextInput
        className="border p-2 mb-2"
        placeholder="Search city"
        value={input}
        onChangeText={setInput}
      />

      {suggestions.length > 0 && (
      
        <FlatList
        
          data={suggestions}
          keyExtractor={(item) => item.id?.toString() || item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleSelect(item.name)}
              className="p-8 border-b "
            >
              <Text>{item.name}, {item.country}</Text>
            </TouchableOpacity>
          )}
        />
        
      )}


      {isLoading && <ActivityIndicator size="large" className="mt-4" />}
      {error && <Text className="text-red-500 mt-4">Error loading weather</Text>}
      {data && (
        <View className="mt-4">
          <Text className="text-xl font-bold">{data.location.name}</Text>
          <Text>{data.current.temp_c}°C</Text>
          <Text>{data.current.condition.text}</Text>
        </View>
      )}
    </View>
  );
};

export default LocationSearch;
