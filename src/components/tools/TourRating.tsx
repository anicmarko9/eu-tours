import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";

const TourRating = ({ rating }: { rating: number }): JSX.Element => {
  const starIcons: JSX.Element[] = [];
  const roundedRating: number = Math.floor(rating);
  const decimalPart: number = rating - roundedRating;

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      starIcons.push(<ImStarFull className="inline" key={i} />);
    } else if (
      i === roundedRating + 1 &&
      decimalPart >= 0.25 &&
      decimalPart <= 0.75
    ) {
      starIcons.push(<ImStarHalf className="inline" key={i} />);
    } else if (i === roundedRating + 1 && decimalPart >= 0.75) {
      starIcons.push(<ImStarFull className="inline" key={i} />);
    } else {
      starIcons.push(<ImStarEmpty className="inline" key={i} />);
    }
  }

  return (
    <div className="descriptionText h-7 max-w-[250px] text-center lg:text-end min-[1750px]:max-w-[350px]">
      {starIcons}
    </div>
  );
};

export default TourRating;
