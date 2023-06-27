import Image from "next/image";
import VignetteScreen from "./images/VignetteScreen";
import BgImage from "./images/BgImage";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";

const ToursSlideshow = (): JSX.Element => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <BgImage src="/images/test.png" />
      <VignetteScreen />
      <div className="containerSpacing relative flex h-full w-full flex-wrap space-x-0 text-white lg:flex-nowrap lg:space-x-16">
        <div className="order-last flex h-[70%] w-full flex-col justify-center lg:order-first lg:h-full lg:w-1/2 2xl:w-[45%]">
          <div className="flex h-full w-full lg:h-4/5 lg:items-center">
            <div className="absolute transform duration-500 ease-in-out max-md:hidden md:left-0 md:top-[30.75%] md:w-[50%] md:-translate-x-[45%] lg:left-auto lg:top-auto lg:hidden lg:h-auto lg:w-[20%] lg:translate-x-[40%] xl:w-1/2 xl:translate-x-[10%] 2xl:w-1/2 2xl:translate-x-[5%]">
              <p className="titleText">Fourth</p>
              <p className="descriptionText">
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
              </p>
              <div className="h-3/4 w-full">
                <Image
                  width={250}
                  height={400}
                  src="/images/test-2.png"
                  alt="Background image"
                  className="object-fit h-full rounded-lg"
                  placeholder="blur"
                  blurDataURL={"/images/test-2.png"}
                  loading="eager"
                />
              </div>
            </div>
            <div className="absolute left-0  top-[30.75%] w-[50%] -translate-x-[60%] transform duration-500 ease-in-out min-[520px]:-translate-x-[55%] sm:-translate-x-[40%] md:left-auto md:top-auto md:w-[50%] md:translate-x-[26%] lg:w-[20%] lg:-translate-x-[70%] xl:w-1/2 xl:-translate-x-[33%] 2xl:w-1/2 2xl:-translate-x-[33%]">
              <p className="titleText">Third</p>
              <p className="descriptionText">
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarHalf className="inline" />
                <ImStarEmpty className="inline" />
              </p>
              <div className="h-3/4 w-full">
                <Image
                  width={250}
                  height={400}
                  src="/images/test-2.png"
                  alt="Background image"
                  className="object-fit h-full rounded-lg"
                  placeholder="blur"
                  blurDataURL={"/images/test-2.png"}
                  loading="eager"
                />
              </div>
            </div>
            <div className="absolute w-[50%] translate-x-[42.5%] transform duration-500 ease-in-out min-[520px]:translate-x-[45%] sm:translate-x-[55.5%] md:translate-x-[101%] lg:h-auto lg:w-[20%] lg:translate-x-[40%] xl:w-1/2 xl:translate-x-[10%] 2xl:w-1/2 2xl:translate-x-[5%]">
              <p className="titleText">Second</p>
              <p className="descriptionText">
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarEmpty className="inline" />
              </p>
              <div className="h-3/4 w-full">
                <Image
                  width={250}
                  height={400}
                  src="/images/test-2.png"
                  alt="Background image"
                  className="object-fit h-full rounded-lg"
                  placeholder="blur"
                  blurDataURL={"/images/test-2.png"}
                  loading="eager"
                />
              </div>
            </div>
            <div className="absolute right-0 top-[30.75%] w-[50%] translate-x-[62.5%] transform duration-500 ease-in-out min-[520px]:translate-x-[55%] md:translate-x-[80%] lg:right-auto lg:top-auto lg:w-[20%] lg:translate-x-[150%] xl:w-1/2 xl:translate-x-[53%] 2xl:w-1/2 2xl:translate-x-[43%]">
              <p className="titleText">First</p>
              <p className="descriptionText">
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarFull className="inline" />
                <ImStarHalf className="inline" />
              </p>
              <div className="h-3/4 w-full">
                <Image
                  width={250}
                  height={400}
                  src="/images/test-2.png"
                  alt="Background image"
                  className="object-fit h-full rounded-lg"
                  placeholder="blur"
                  blurDataURL={"/images/test-2.png"}
                  loading="eager"
                />
              </div>
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
              Title
            </p>
            <p className="descriptionText text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolor neque saepe officia, non itaque necessitatibus
              excepturi id, quidem unde suscipit ipsum deleniti amet, alias
              doloremque quam voluptatibus ipsa autem?
            </p>
            <button className="titleText gradientOrangeButton mt-2 w-fit space-x-2 self-center rounded-lg border-2 border-primary p-2 capitalize lg:mt-4 lg:self-end lg:p-3 xl:mt-8">
              <span className="text-base lg:text-lg">Explore</span>
              <IoIosArrowForward className="inline text-xl lg:text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursSlideshow;
