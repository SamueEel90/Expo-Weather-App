export const getWeatherIcon = (description: string) => {
  
  if (description.toLowerCase().includes("sun")) {
    return require("../../assets/icons/sun.png"); 
  } else if (description.toLowerCase().includes("rain")) {
    return require("../../assets/icons/rainy-day.png");
  } else {
    return require("../../assets/icons/clouds.png");
  }
};