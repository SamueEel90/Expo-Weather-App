  import dayjs from "dayjs";
  
  const getHourOnly = (timeString?: string): string => {
    if (!timeString) return "N/A";
    return dayjs(timeString).format("HH ");
  };

  export default getHourOnly;