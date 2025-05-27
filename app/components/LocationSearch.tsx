import { useEffect, useState } from "react";
import { TextInput, View, Text, FlatList, TouchableOpacity, ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import { fetchCitySuggestions } from "../api/weatherApi";
import { useWeatherQuery } from "../features/useWeatherQuery";

const LocationSearch: React.FC = () => {
  const [input, setInput] = useState("");
  const [selectedCity, setSelectedCity] = useState('Trencin');
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const { data, isLoading, error } = useWeatherQuery(selectedCity);
  const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#4B5563', 
    borderRadius: 12,
    padding: 8,
    marginBottom: 8,
    opacity: 0.75,
  },
});

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
    <View className=" mt-20 px-4">
   
<TextInput
  style={styles.input}
  placeholder="Add new location"
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
        
        </View>
      )}
    </View>
  );
};

export default LocationSearch;
