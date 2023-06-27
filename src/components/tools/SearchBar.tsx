import { SelectionType } from "src/types/types";
import LocationOrDate from "./LocationOrDate";

const SearchBar = (): JSX.Element => {
  return (
    <div className="flex w-fit flex-col justify-between space-x-0 space-y-4 self-center rounded-lg p-4 text-sm backdrop-blur-lg sm:flex-row sm:space-x-4 sm:space-y-0 sm:text-base lg:self-start">
      <div className="flex w-fit flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <LocationOrDate
          choose={SelectionType.Location}
          location="Zlatibor, Serbia"
        />
        <LocationOrDate choose={SelectionType.Date} date="16 September 2023" />
      </div>
      <button className="gradientOrangeButton w-fit self-center rounded-lg border-2 border-header px-4 py-2 font-semibold tracking-wider text-white sm:self-auto sm:py-0 xl:text-base 2xl:text-lg">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
