import axios from "axios";

export const MainWeather = () => {
  function getData() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=London&appid=f6f246dbb9a0aa8b67c9b76d968808e6",
        { params: { units: "metric" } }
      )
      .then((data) => console.log(data.data))
      .catch((e) => console.log(e));
  }
  return <div className="mt-11 h-11 mx-auto flex"></div>;
};
