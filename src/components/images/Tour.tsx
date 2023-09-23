import { useState, useEffect } from 'react';

import { slugifyString } from '@Helper/helper';
import TourRating from '@Components/tools/TourRating';
import SlidingTour from './SlidingTour';

const Tour = ({
  tourName,
  tourRating,
  staticOrder,
}: {
  tourName: string;
  tourRating: number;
  staticOrder: string;
}): JSX.Element => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = `/images/${slugifyString(tourName)}.png`;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, [tourName]);

  return (
    <section className={staticOrder}>
      <h2 className="tourText">{tourName}</h2>
      <TourRating rating={tourRating} />
      {imageLoaded ? (
        <SlidingTour src={`/images/${slugifyString(tourName)}.png`} />
      ) : (
        <div className="flex justify-center items-center w-12 h-12 rounded-full animate-spin border-8 border-solid border-orange-500 border-t-transparent"></div>
      )}
    </section>
  );
};

export default Tour;
