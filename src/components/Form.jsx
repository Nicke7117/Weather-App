import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import { apiKey } from "../apiKey";
import axios from "axios";

export const Form = ({ setWeather, setForecast }) => {
  const fetchData = (url, unit) => {
    return axios.get(url, { params: { units: unit } });
  };

  const [input, setInput] = useState("");
  const [city, setCity] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const firstUpdate = useRef(true);

  const weatherURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey;

  const forecastURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=" +
    apiKey;

  useEffect(() => {
    // Prevent running on initial render
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      fetchData(weatherURL, "metric")
        .then((data) => {
          setInvalidInput(false);
          setWeather(data.data);
        })
        .catch((e) => {
          setInvalidInput(true);
        });
      fetchData(forecastURL, "metric")
        .then((data) => {
          setForecast(data.data.list);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [city]);

  const search = (e) => {
    e.preventDefault();
    setCity(input);
  };

  return (
    <form className="flex justify-center pb-5 relative" onSubmit={search}>
      <div className="relative w-full sm:max-w-lg">
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
          onClick={search}
        />
      </div>
      {invalidInput ? (
        <p className="bottom-0 absolute text-sm font-semibold text-red-600">
          Invalid input!
        </p>
      ) : (
        ""
      )}
    </form>
  );
};
