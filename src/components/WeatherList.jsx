export const WeatherList = () => {
  return (
    <div className="rounded-xl py-2 px-5 border-2 border-black inline-block float-left mr-2 sm:px-6">
      <p className="font-semibold text-lg sm:text-xl">{/* Date */}</p>
      <p className="font-semibold text-lg sm:text-xl">{/* Time */}</p>
      <img src="https://openweathermap.org/img/w/04n.png" alt=""/>
      <p className="font-semibold text-xl sm:text-2xl">{/* Temperature */}</p>
    </div>
  );
};
