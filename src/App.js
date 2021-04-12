import { Form } from "./components/Form";
import { MainWeather } from "./components/MainWeather";
import { WeatherForecast } from "./components/WeatherForecast";

export const App = () => {
  return (
    <div className="w-full h-full bg-gradient-to-t from-yellow-200 to-yellow-600 absolute px-2">
      <p className="ml-2">Weather app</p>
      <main className="justify-center flex">
        <div className="w-full">
          <Form />
          <div className="flex justify-center">
            <div className="lg:max-w-screen-lg w-full">
              <MainWeather />
              <WeatherForecast />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
