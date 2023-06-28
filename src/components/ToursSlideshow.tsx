import VignetteScreen from "./images/VignetteScreen";
import BgImage from "./images/BgImage";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";
import SlidingTour from "./images/SlidingTour";
import PrimaryBtn from "./tools/PrimaryBtn";

const ToursSlideshow = (): JSX.Element => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <BgImage src="/images/test.png" />
      <VignetteScreen />
      <div className="containerSpacing relative flex h-full w-full flex-wrap space-x-0 text-white lg:flex-nowrap lg:space-x-16">
        <div className="order-last flex h-[70%] w-full flex-col justify-center lg:order-first lg:h-full lg:w-1/2 2xl:w-[45%]">
          <div className="flex h-full w-full lg:h-4/5 lg:items-center">
            <div className="absolute transform duration-500 ease-in-out max-md:hidden md:left-0 md:top-[30.75%] md:w-[50%] md:-translate-x-[45%] lg:left-auto lg:top-auto lg:hidden lg:h-auto lg:w-[20%] lg:translate-x-[40%] xl:w-1/2 xl:translate-x-[10%] 2xl:w-1/2 2xl:translate-x-[5%]">
              <p className="titleText max-w-[250px] text-center capitalize lg:text-end">
                prague
              </p>
              <p className="descriptionText h-7 max-w-[250px] text-center lg:text-end">
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarHalf className="inline" />
                <ImStarEmpty className="inline" />
              </p>
              <SlidingTour src="/images/prague-2.png" />
            </div>
            <div className="absolute left-0 top-[30.75%] w-[50%] -translate-x-[60%] transform duration-500 ease-in-out min-[520px]:-translate-x-[55%] sm:-translate-x-[40%] md:left-auto md:top-auto md:w-[50%] md:translate-x-[26%] lg:w-[20%] lg:-translate-x-[70%] xl:w-1/2 xl:-translate-x-[33%] 2xl:w-1/2 2xl:-translate-x-[33%] min-[1750px]:-translate-x-[43%]">
              <p className="titleText max-w-[250px] text-center capitalize lg:text-end min-[1750px]:max-w-[350px]">
                la valletta
              </p>
              <p className="descriptionText h-7 max-w-[250px] text-center lg:text-end min-[1750px]:max-w-[350px]">
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
              </p>
              <SlidingTour src="/images/malta-2.png" />
            </div>
            <div className="absolute w-[50%] translate-x-[42.5%] transform duration-500 ease-in-out min-[520px]:translate-x-[45%] sm:translate-x-[55.5%] md:translate-x-[101%] lg:h-auto lg:w-[20%] lg:translate-x-[40%] xl:w-1/2 xl:translate-x-[10%] 2xl:w-1/2 2xl:translate-x-[5%] min-[1750px]:translate-x-[0%]">
              <p className="titleText max-w-[250px] text-center capitalize lg:text-end min-[1750px]:max-w-[350px]">
                paris
              </p>
              <p className="descriptionText h-7 max-w-[250px] text-center lg:text-end min-[1750px]:max-w-[350px]">
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarEmpty className="inline" />
              </p>
              <SlidingTour src="/images/paris.png" />
            </div>
            <div className="absolute right-0 top-[30.75%] w-[50%] translate-x-[62.5%] transform duration-500 ease-in-out min-[520px]:translate-x-[55%] md:translate-x-[80%] lg:right-auto lg:top-auto lg:w-[20%] lg:translate-x-[150%] xl:w-1/2 xl:translate-x-[53%] 2xl:w-1/2 2xl:translate-x-[43%]">
              <p className="titleText max-w-[250px] text-center capitalize lg:text-end min-[1750px]:max-w-[350px]">
                helsinki
              </p>
              <p className="descriptionText h-7 max-w-[250px] text-center lg:text-end min-[1750px]:max-w-[350px]">
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarHalf className="inline" />
              </p>
              <SlidingTour src="/images/helsinki.png" />
            </div>
          </div>
          <div className="descriptionText flex w-full justify-center space-x-4 max-sm:hidden lg:w-full lg:justify-end">
            <div className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-primary bg-secondary p-[2px] text-xl text-white shadow-2xl transition-all duration-200 ease-in hover:bg-white hover:text-secondary lg:text-2xl">
              <IoIosArrowBack className="inline" />
            </div>
            <div className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-primary bg-secondary p-[2px] text-xl text-white shadow-2xl transition-all duration-200 ease-in hover:bg-white hover:text-secondary lg:text-2xl">
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
