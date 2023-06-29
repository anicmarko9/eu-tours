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
    <div className={staticOrder}>
      <p className="tourText">{tourName}</p>
      <TourRating rating={tourRating} />
      <SlidingTour src={`/images/${slugifyString(tourName)}.png`} />
    </div>
  );
};

export default Tour;
