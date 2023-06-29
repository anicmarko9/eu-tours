import VignetteScreen from "./images/VignetteScreen";
import BgImage from "./images/BgImage";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PrimaryBtn from "./tools/PrimaryBtn";
import Tour from "./images/Tour";

const ToursSlideshow = (): JSX.Element => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <BgImage src="/images/test.png" />
      <VignetteScreen />
      <div className="containerSpacing relative flex h-full w-full flex-wrap space-x-0 text-white lg:flex-nowrap lg:space-x-16">
        <div className="order-last flex h-[70%] w-full flex-col justify-center lg:order-first lg:h-full lg:w-1/2 2xl:w-[45%]">
          <div className="flex h-full w-full lg:h-4/5 lg:items-center">
            <Tour tourName="prague" tourRating={3.7} staticOrder="four" />
            <Tour tourName="la valletta" tourRating={5} staticOrder="three" />
            <Tour tourName="paris" tourRating={4.6} staticOrder="two" />
            <Tour tourName="helsinki" tourRating={4.1} staticOrder="one" />
          </div>
          <div className="descriptionText flex w-full justify-center space-x-4 max-sm:hidden lg:w-full lg:justify-end">
            <div className="arrowContainer">
              <IoIosArrowBack className="inline" />
            </div>
            <div className="arrowContainer">
              <IoIosArrowForward className="inline" />
            </div>
          </div>
        </div>
        <div className="z-10 order-first flex h-[30%] w-full flex-col justify-center lg:order-last lg:h-full lg:w-1/2">
          <div className="flex h-full w-full flex-col justify-center lg:h-4/5 lg:items-end">
            <p className="titleText text-center text-4xl sm:text-6xl lg:text-start lg:text-7xl xl:text-8xl">
              zlatibor
            </p>
            <p className="descriptionText mb-4 text-justify">
              Welcome to Zlatibor, the crown jewel of Serbian mountains! Nestled
              in the heart of untouched nature, Zlatibor offers an unforgettable
              escape for nature enthusiasts and adventure seekers alike.
            </p>
            <PrimaryBtn text="Book" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursSlideshow;
