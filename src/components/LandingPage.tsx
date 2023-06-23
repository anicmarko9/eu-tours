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
      <div className="containerSpacing relative flex h-screen w-full space-x-16 text-header">
        <div className="flex h-full w-1/2 flex-col justify-center">
          <p className="flex flex-col text-base font-bold uppercase tracking-wider sm:text-lg lg:text-xl 2xl:text-8xl">
            <span className="text-white">Live your</span>
            <span className="text-secondary">adventure</span>
          </p>
          <p className="w-2/3 py-4 text-xs sm:text-sm md:flex-nowrap lg:text-base 2xl:text-lg">
            {
              "Don't wait until tomorrow, discover your adventure now and feel the sensation of closeness to nature around you"
            }
          </p>
          <div className="flex w-full justify-between rounded-lg p-4 backdrop-blur-lg 2xl:text-lg">
            <div className="flex w-1/3 items-center space-x-4">
              <SlLocationPin className="text-3xl text-green-400" />
              <div className="">
                <p className="space-x-4">
                  <span>Location</span>
                  <span>
                    <IoIosArrowDown className="inline text-secondary" />
                  </span>
                </p>
                <p className="text-white">Zlatibor, Serbia</p>
              </div>
            </div>
            <div className="flex w-1/3 items-center space-x-4">
              <MdOutlineCalendarMonth className="text-3xl text-green-400" />
              <div className="">
                <p className="space-x-4">
                  <span>Date</span>
                  <span>
                    <IoIosArrowDown className="inline text-secondary" />
                  </span>
                </p>
                <p className="text-white">16 August 2023</p>
              </div>
            </div>
            <button className="gradientOrange rounded-lg border-2 border-tertiary px-4 font-semibold tracking-wider text-white 2xl:text-lg">
              Search
            </button>
          </div>
        </div>
        <div className="flex h-full w-1/2 justify-center">
          <Image
            src="/journey.png"
            alt="Landing Page Image"
            width={440}
            height={440}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
