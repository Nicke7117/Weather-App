import sunrise from "../assets/sunrise.svg";
import sunset from "../assets/sunset.svg";
import wind from "../assets/wind.svg";

export const MainWeather = () => {

  return (
    <>
      <header className="bg-yellow-100 p-2 rounded-full">
        <div className="rounded-full shadow-md hover:shadow-xl border-2 border-black">
          <h1 className="font-bold text-lg sm:text-xl py-2">CURRENT WEATHER</h1>
        </div>
      </header>
      <section className="flex justify-center">
        <div className="grid grid-cols-2 grid-rows-2 bg-yellow-100 rounded-xl shadow w-full gap-2 p-2 mt-2">
          <div className="rounded-xl relative justify-center flex shadow-md hover:shadow-xl border-2 border-black">
            <p className="sm:text-lg pt-2 font-semibold mt-2">
              {/* Weather condition  */}
            </p>
            <img
              src="https://openweathermap.org/img/w/04n.png"
              className="w-16 bottom-0 pb-1 absolute"
              alt=""
            />
          </div>

          <div className="flex justify-center rounded-xl shadow-md hover:shadow-xl border-2 border-black">
            <div className="grid grid-rows-3">
              <div className="justify-center flex">
                <p className="font-semibold text-xl my-auto sm:text-2xl">{/* Temperature */}</p>
              </div>
              <div className="flex justify-center">
                <img src={wind} alt="" className="w-5 mr-2 sm:w-7" />
                <p className="font-semibold text-lg my-auto sm:text-xl">
                  {/* Wind speed in m/s */}
                </p>
              </div>
              <div className="justify-center flex">
                <p className="font-semibold my-auto sm:text-xl">
                  Feels like {/* Temperature */}
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center rounded-xl shadow-md hover:shadow-xl border-2 border-black">
            <img src={sunrise} alt="" className="w-20 absolute" />
            <p className="bottom-1 absolute text-xl sm:text-2xl font-semibold">
              {/* Sunrise time */}
            </p>
          </div>

          <div className="flex justify-center relative rounded-xl shadow-md hover:shadow-xl border-2 border-black">
            <img src={sunset} alt="" className="w-20 absolute" />
            <p className="text-xl sm:text-2xl bottom-1 absolute font-semibold">
              {/* Sunset time */}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
