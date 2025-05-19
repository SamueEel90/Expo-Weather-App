import { use, useEffect, useState } from "react";
import { TextInput, View, Text, FlatList, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import { fetchCitySuggestions } from "../api/weatherApi";
import { useWeatherQuery } from "../features/useWeatherQuery";
import { WeatherData } from "../types/weatherData";
import WeatherCard from "./WeatherCard";


const LocationList: React.FC = () => {

const [locations , setLocations ] = useState<string[]>([])
const [selectedCity, setSelectedCity] = useState("Trencin");


useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch('http://192.168.100.11:3001/locations');
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error("Failed to fetch locations:", error);
      }
    };
    fetchLocations();
  }, []);
  
  
  return (
 <ScrollView>
      {locations.map((city) => (
        <WeatherCard key={city} city={city} />
      ))}
    </ScrollView>
  );
}
  export default LocationList;