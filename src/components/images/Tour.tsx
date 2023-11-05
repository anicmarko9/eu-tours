import { useState, useEffect } from 'react';

import SlidingTour from './SlidingTour';
import TourRating from '@Components/tools/TourRating';
import { slugifyString } from '@Utils/slug';

export default function Tour({
  tourName,
  tourRating,
  staticOrder,
}: {
  tourName: string;
  tourRating: number;
  staticOrder: string;
}): JSX.Element {
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
      <h2 className='tourText'>{tourName}</h2>
      <TourRating rating={tourRating} />
      {imageLoaded ? (
        <SlidingTour src={`/images/${slugifyString(tourName)}.png`} />
      ) : (
        <div className='flex h-12 w-12 animate-spin items-center justify-center rounded-full border-8 border-solid border-orange-500 border-t-transparent'></div>
      )}
    </section>
  );
}
