  import dayjs from "dayjs";
  
  const getHourOnly = (timeString?: string): string => {
  return dayjs(timeString).format("HH ");
  };

  export default getHourOnly;