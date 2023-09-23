import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import PrimaryBtn from './tools/PrimaryBtn';
import Tour from './images/Tour';

const ToursSlideshow = (): JSX.Element => {
  const [activeTourIndex, setActiveTourIndex] = useState(0);
  const tours = [
    { tourName: 'helsinki', tourRating: 4.1, staticOrder: 'one' },
    { tourName: 'paris', tourRating: 4.6, staticOrder: 'two' },
    { tourName: 'la valletta', tourRating: 5, staticOrder: 'three' },
    { tourName: 'prague', tourRating: 3.7, staticOrder: 'four' },
  ];

  const handlePrevTour = () => {
    setActiveTourIndex((prevIndex) =>
      prevIndex === 0 ? tours.length - 1 : prevIndex - 1,
    );
  };

  const handleNextTour = () => {
    setActiveTourIndex((prevIndex) => (prevIndex + 1) % tours.length);
  };
  // const handleTourClick = (index: number) => {
  //   setActiveTourIndex(index);
  // };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="containerSpacing relative flex h-full w-full flex-wrap space-x-0 text-lighterBlack lg:flex-nowrap lg:space-x-16">
        <div className="order-last flex h-[70%] w-full flex-col justify-center lg:order-first lg:h-full lg:w-4/5 2xl:w-[45%] gap-8">
          <div className="flex h-full w-full lg:h-4/5 lg:items-center transition-all ease-in-out duration-1000">
            {tours.map((tour, index) => (
              <Tour
                key={tour.tourName}
                tourName={tour.tourName}
                tourRating={tour.tourRating}
                staticOrder={
                  index === activeTourIndex
                    ? 'one'
                    : index === (activeTourIndex + 1) % tours.length
                    ? 'two'
                    : index === (activeTourIndex + 2) % tours.length
                    ? 'three'
                    : 'four'
                }
              />
            ))}
          </div>
          <div className="descriptionText flex w-full justify-center space-x-4  lg:w-full lg:justify-end">
            <div className="arrowContainer" onClick={handlePrevTour}>
              <IoIosArrowBack className="inline" />
            </div>
            <div className="arrowContainer" onClick={handleNextTour}>
              <IoIosArrowForward className="inline" />
            </div>
          </div>
        </div>
        <section className="z-10 order-first flex h-[30%] w-full flex-col justify-center lg:order-last lg:h-full my-auto lg:w-1/2 lg:items-end">
          <h2 className="titleText text-center text-4xl sm:text-6xl lg:text-start lg:text-5xl xl:text-6xl">
            zlatibor
          </h2>
          <p className="descriptionText flex flex-col text-center lg:text-right gap-4  ">
            Welcome to Zlatibor, the crown jewel of Serbian mountains! Nestled
            in the heart of untouched nature, Zlatibor offers an unforgettable
            escape for nature enthusiasts and adventure seekers alike.
            <PrimaryBtn text="Book" />
          </p>
        </section>
      </div>
    </section>
  );
};

export default ToursSlideshow;
