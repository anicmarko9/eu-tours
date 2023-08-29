import VignetteScreen from "./images/VignetteScreen";
import BgImage from "./images/BgImage";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PrimaryBtn from "./tools/PrimaryBtn";
import Tour from "./images/Tour";

const ToursSlideshow = (): JSX.Element => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <BgImage src="/images/test.png" />
      <VignetteScreen />
      <div className="containerSpacing relative flex h-full w-full flex-wrap space-x-0 text-white lg:flex-nowrap lg:space-x-16 pl-4 pr-4">
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
        <section className=" pr-4 pl-4 z-10 order-first flex h-[30%] w-full flex-col justify-center lg:order-last lg:h-full lg:w-1/2 lg:items-end">
          <h2 className="titleText text-center text-4xl sm:text-6xl lg:text-start lg:text-7xl xl:text-8xl">
            zlatibor
          </h2>
          <p className="descriptionText p-2 text-justify backdrop-blur">
            Welcome to Zlatibor, the crown jewel of Serbian mountains! Nestled
            in the heart of untouched nature, Zlatibor offers an unforgettable
            escape for nature enthusiasts and adventure seekers alike.
          </p>
          <PrimaryBtn text="Book" />
        </section>
      </div>
    </section>
  );
};

export default ToursSlideshow;
