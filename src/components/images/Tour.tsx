import { slugifyString } from "src/helper/helper";
import TourRating from "../tools/TourRating";
import SlidingTour from "./SlidingTour";

const Tour = ({
  tourName,
  tourRating,
  staticOrder,
}: {
  tourName: string;
  tourRating: number;
  staticOrder: string;
}): JSX.Element => {
  // static order is temporary until I find correct fix
  return (
    <section className={staticOrder}>
      <h2 className="tourText">{tourName}</h2>
      <TourRating rating={tourRating} />
      <SlidingTour src={`/images/${slugifyString(tourName)}.png`} />
    </section>
  );
};

export default Tour;
