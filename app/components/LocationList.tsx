import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import WeatherCard from "./WeatherCard";

const LocationList: React.FC = () => {
  const [locations, setLocations] = useState<string[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch("http://192.168.100.11:3001/locations");
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
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 16 }}>
      {locations.map((city) => (
        <View key={city} style={{ width: '50%', padding: 4, shadowColor: 'gray', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.75, shadowRadius: 5.84, elevation: 5 }}>
          <WeatherCard city={city} />
        </View>
      ))}
    </View>
    </ScrollView>
  );
};

export default LocationList;
