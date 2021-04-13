import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
/*  */
export const Form = () => {
  const [city, setCity] = useState("");

  return (
    <form className="flex justify-center">
      <div className="relative w-full sm:max-w-screen-sm">
        <input
          className="mt-28 h-11 w-full rounded-full pl-2 focus:shadow-lg outline-none "
          type="text"
          placeholder="Enter city"
          onChange={(e) => setCity({ city: e.target.value })}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="bottom-0 absolute right-3 mb-3"
          size="lg"
          onClick={() => console.log(city)}
        />
      </div>
    </form>
  );
};
