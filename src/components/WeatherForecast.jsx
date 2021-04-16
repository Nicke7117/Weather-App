import { WeatherList } from "./WeatherList";

export const WeatherForecast = ({ forecast }) => {
  return (
    <div className="bg-yellow-100 rounded-xl mt-2 overflow-x-auto p-2 flex flex-nowrap">
      
      
      {forecast.map((forecast, index) => { 
        return(
      <WeatherList forecast={forecast} key={index}/>
      )
}
      )}
    </div>
  );
};
