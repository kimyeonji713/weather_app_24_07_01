import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "ea117a4577ecf3b022d6eb78cab56b29",
    units: "metric",
    lang: "kr",
  },
});

export const getWeather = () => {
  const lat = "35.15826667669885";
  const lon = "129.06000137329102";
  return instance.get(`weather?lat=${lat}&lon=${lon}`).then((res) => res.data);
};
