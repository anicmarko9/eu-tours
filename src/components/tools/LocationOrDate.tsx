import { SlLocationPin } from 'react-icons/sl';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineCalendarMonth } from 'react-icons/md';

import { SelectionType } from '@Types/enum';

export default function LocationOrDate({
  choose,
  location,
  date,
}: {
  choose: SelectionType;
  location?: string;
  date?: string;
}): JSX.Element {
  return (
    <div className='flex items-center space-x-4 sm:w-fit'>
      {choose === SelectionType.Location ? (
        <SlLocationPin className='text-lg text-green-600 sm:text-2xl xl:text-3xl' />
      ) : (
        <MdOutlineCalendarMonth className='text-lg text-green-600 sm:text-2xl xl:text-3xl' />
      )}
      <div className='hoverEffect cursor-pointer'>
        <h2 className='space-x-2'>
          <span>{choose}</span>
          <IoIosArrowDown className='hoverEffect inline text-secondary' />
        </h2>
        <h2 className='text-white'>
          {choose === SelectionType.Location ? (
            location
          ) : (
            <time dateTime='2023-09-16'>{date}</time>
          )}
        </h2>
      </div>
    </div>
  );
}
