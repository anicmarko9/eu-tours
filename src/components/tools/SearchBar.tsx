import { SelectionType } from "src/types/types";
import LocationOrDate from "./LocationOrDate";
import PrimaryBtn from "./PrimaryBtn";

const SearchBar = (): JSX.Element => {
  return (
    <section className="flex w-fit flex-col justify-between space-x-0 space-y-8 self-center rounded-lg p-4 text-sm backdrop-blur-lg sm:flex-row sm:space-x-8 sm:space-y-0 sm:text-base lg:self-start">
      <div className="flex w-fit flex-col space-x-0 space-y-8 sm:flex-row sm:space-x-8 sm:space-y-0">
        <LocationOrDate
          choose={SelectionType.Location}
          location="Zlatibor, Serbia"
        />
        <LocationOrDate choose={SelectionType.Date} date="16 September 2023" />
      </div>
      <PrimaryBtn text="Search" />
    </section>
  );
};

export default SearchBar;
