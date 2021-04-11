import { Form } from "./Form";
import { MainWeather } from "./MainWeather";
import { WeatherForecast } from "./WeatherForecast";

export const Main = () => {
  return (
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
  );
};
