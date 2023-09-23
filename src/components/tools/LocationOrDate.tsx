import { IoIosArrowDown } from 'react-icons/io';

import type { SelectionType } from '@Types/types';

const LocationOrDate = ({
  choose,
  location,
  date,
}: {
  choose: SelectionType;
  location?: string;
  date?: string;
}): JSX.Element => {
  return (
    <div className="flex items-left space-x-4 sm:w-fit">
      <div className="hoverEffect cursor-pointer">
        <h2 className="space-x-2">
          <span>{choose}</span>
          <IoIosArrowDown className="hoverEffect inline text-secondary" />
        </h2>
        <h2 className="text-lighterBlack">
          {choose === 'Location' ? (
            location
          ) : (
            <time dateTime="2023-09-16">{date}</time>
          )}
        </h2>
      </div>
    </div>
  );
};

export default LocationOrDate;
