import { Form } from "./components/Form";
import { MainWeather } from "./components/MainWeather";
import { WeatherForecast } from "./components/WeatherForecast";

export const App = () => {
  return (
    <div className="w-full h-full bg-gradient-to-t from-yellow-300 to-yellow-600 absolute px-2 overflow-auto">
      <p className="ml-2">Weather app</p>
      <main className="w-full flex justify-center">
        <div className="lg:max-w-screen-lg w-full">
          <Form />
          <section className="max-w-xl text-center mx-auto p-5 relative mt-10">
            <MainWeather />
            <WeatherForecast />
          </section>
        </div>
      </main>
    </div>
  );
};
