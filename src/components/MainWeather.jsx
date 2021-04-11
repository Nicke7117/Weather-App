import axios from "axios";
import { apiKey } from "../apiKey"

export const MainWeather = () => {
  function getData() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=London&appid=" + apiKey,
        { params: { units: "metric" } }
      )
      .then((data) => console.log(data.data))
      .catch((e) => console.log(e));
  }
  getData()
  return <div className="mt-11 h-11 mx-auto flex"></div>;
};
