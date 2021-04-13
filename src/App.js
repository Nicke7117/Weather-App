import { Form } from "./components/Form";
import { MainWeather } from "./components/MainWeather";
import { WeatherForecast } from "./components/WeatherForecast";

export const App = () => {
  return (
    <div className="w-full h-full bg-gradient-to-t from-yellow-200 to-yellow-500 absolute px-2 overflow-auto">
      <p className="ml-2">Weather app</p>
      <main className="w-full flex justify-center">
        <div className="lg:max-w-screen-lg w-full">
          <Form />
          <MainWeather />
          <WeatherForecast />
        </div>
      </main>
    </div>
  );
};
