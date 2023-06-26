import Image from "next/image";
import VignetteScreen from "src/components/VignetteScreen";
import { SlLocationPin } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";

const LandingPage = (): JSX.Element => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Image
          fill
          src="/leaves-bg.jpg"
          alt="Background Image"
          className="h-full w-full object-cover"
        />
      </div>
      <VignetteScreen />
      <div className="containerSpacing relative flex h-screen w-full text-header sm:flex-wrap lg:flex-nowrap">
        <div className="flex h-full w-full flex-col justify-evenly pt-16 lg:h-full lg:w-7/12 lg:justify-center">
          <p className="flex flex-col self-center text-center text-4xl font-bold uppercase tracking-wider sm:self-start sm:text-start sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="text-white">Live your</span>
            <span className="text-secondary">adventure</span>
          </p>
          <div className="flex h-[250px] w-full justify-center lg:hidden">
            <Image
              src="/journey.png"
              alt="Landing Page Image"
              width={250}
              height={250}
              priority
            />
          </div>
          <p className="w-full text-xs leading-relaxed sm:w-1/2 sm:text-sm md:flex-nowrap md:text-base lg:py-4 xl:text-lg">
            {
              "Don't wait until tomorrow, discover your adventure now and feel the sensation of closeness to nature around you."
            }
          </p>
          <div className="flex w-fit flex-col justify-between space-x-0 space-y-4 self-center rounded-lg p-4 text-sm backdrop-blur-lg sm:flex-row sm:space-x-4 sm:space-y-0 sm:text-base lg:self-start">
            <div className="flex w-fit flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="flex items-center space-x-4 sm:w-fit">
                <SlLocationPin className="text-lg text-green-600 sm:text-2xl xl:text-3xl" />
                <div className="hoverEffect cursor-pointer">
                  <p className="space-x-2">
                    <span>Location</span>
                    <IoIosArrowDown className="hoverEffect inline text-secondary" />
                  </p>
                  <p className="text-white">Zlatibor, Serbia</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 sm:w-fit">
                <MdOutlineCalendarMonth className="text-lg text-green-600 sm:text-2xl xl:text-3xl" />
                <div className="hoverEffect cursor-pointer">
                  <p className="space-x-2">
                    <span>Date</span>
                    <IoIosArrowDown className="hoverEffect inline text-secondary" />
                  </p>
                  <p className="text-white">16 September 2023</p>
                </div>
              </div>
            </div>
            <button className="gradientOrangeButton w-fit self-center rounded-lg border-2 border-header px-4 py-2 font-semibold tracking-wider text-white sm:self-auto sm:py-0 xl:text-base 2xl:text-lg">
              Search
            </button>
          </div>
        </div>
        <div className="flex h-full w-5/12 items-center justify-end max-[1023.9px]:hidden">
          <Image
            src="/journey.png"
            alt="Landing Page Image"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
