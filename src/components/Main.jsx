import { Form } from "./Form";
import { WeatherData } from "./WeatherData";

export const Main = () => {
  return (
    <main className="justify-center flex">
      <div className="w-full">
        <Form />
        <WeatherData />
      </div>
    </main>
  );
};
