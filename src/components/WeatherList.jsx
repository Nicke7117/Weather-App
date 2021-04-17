import { unixToTime } from "../unixToTime"

export const WeatherList = ({ forecast }) => {
  return (
    <div className="rounded-xl py-2 px-5 border-2 border-black inline-block float-left mr-2 sm:px-6 shadow-md hover:shadow-xl">
      <p className="font-semibold text-lg sm:text-xl">{forecast["dt_txt"].split(" ", 1)}</p>
      <p className="font-semibold text-lg sm:text-xl">{unixToTime(forecast.dt)}</p>
      <img src={"https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png"} alt="" className="mx-auto"/>
      <p className="font-semibold text-xl sm:text-2xl">{forecast.main.temp}°</p>
    </div>
  );
};
