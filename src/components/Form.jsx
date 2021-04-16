import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { apiKey } from "../apiKey";
import axios from "axios";

export const Form = ({ setWeather, setForecast }) => {
  const [input, setInput] = useState("");

  const [city, setCity] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=" +
          apiKey,
        { params: { units: "metric" } }
      )
      .then((data) =>
        setWeather(data.data)
      )
      .catch((e) => console.log("Error! " + e));
  }, [city]);

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          "&appid=" +
          apiKey,
        { params: { units: "metric" } }
      )
      .then((data) =>
        setForecast(data.data.list)
      )
      .catch((e) => console.log("Error! " + e));
  }, [city]);

  

  return (
    <form className="flex justify-center mb-5">
      <div className="relative w-full sm:max-w-screen-sm">
        <input
          className="mt-28 h-11 w-full rounded-full pl-2 focus:shadow-lg outline-none"
          type="text"
          placeholder="Enter city"
          onChange={(e) => setInput(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="bottom-0 absolute right-3 mb-3"
          size="lg"
          onClick={() => setCity(input)}
        />
      </div>
    </form>
  );
};
