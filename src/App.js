import { Form } from "./components/Form";
import { MainWeather } from "./components/MainWeather";
import { WeatherForecast } from "./components/WeatherForecast";
import { useState } from "react";

export const App = () => {
  const [weather, setWeather] = useState("");

  return (
    <div className="w-full h-full bg-gradient-to-t from-yellow-300 to-yellow-600 absolute px-2 overflow-auto">
      <p className="ml-2">Weather app</p>
      <main className="w-full flex justify-center">
        <div className="lg:max-w-screen-lg w-full">
          <Form setWeather={setWeather} />
          {weather !== "" ? (
            <section className="max-w-xl text-center mx-auto p-5 relative mt-10">
              <MainWeather />
              <WeatherForecast />
            </section>
          ) : (
            <p className="text-center mt-10 text-2xl">Search for a city!</p>
          )}
        </div>
      </main>
    </div>
  );
};
