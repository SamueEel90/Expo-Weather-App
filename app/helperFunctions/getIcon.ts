export const getWeatherIcon = (description: string) => {
  
  if (description.toLowerCase().includes("sun")) {
    return require("../../assets/icons/sun.png"); 
  } else if (description.toLowerCase().includes("rain")) {
    return require("../../assets/icons/rainy-day.png");
  } else if (description.toLowerCase().includes("cloud")) {
    return require("../../assets/icons/clouds.png");
  }else if (description.toLowerCase().includes("wind")) {
    return require("../../assets/icons/wind.png");
  }else if (description.toLowerCase().includes("snow")) {
    return require("../../assets/icons/winter.png");
  } else {
    return require("../../assets/icons/clouds.png");
  }
};