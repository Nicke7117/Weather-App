import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const Form = () => {
  return (
    <form className="flex justify-center">
      <div className="relative">
        <input
          className="mt-64 h-11 w-104 rounded-xl pl-2 focus:shadow-lg outline-none"
          type="text"
          placeholder="Enter city"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="bottom-0 absolute right-2 mb-3"
          size="lg"
          onClick={() => console.log("click")}
        />
      </div>
    </form>
  );
};
