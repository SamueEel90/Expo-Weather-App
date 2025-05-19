import {View, Text} from "react-native"
import LocationSearch from "./components/LocationSearch";
import WeatherData from "./types/weatherData";
import LocationList from "./components/LocationList";

interface WeatherDataProps {
  weather?: WeatherData;
}

const LocationsPage: React.FC<WeatherDataProps> = ({ weather}) => {
  
  return (
    <View>
  <LocationSearch />
  <LocationList />
    </View>
  )
}

export default LocationsPage;