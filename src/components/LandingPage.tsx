import VignetteScreen from "./images/VignetteScreen";
import BgImage from "./images/BgImage";
import JourneyImage from "./images/JourneyImage";
import SearchBar from "./tools/SearchBar";

const LandingPage = (): JSX.Element => {
  return (
    <div className="relative h-screen w-full">
      <BgImage src="/images/leaves-bg.jpg" />
      <VignetteScreen />
      <div className="containerSpacing relative flex h-screen w-full text-header sm:flex-wrap lg:flex-nowrap">
        <div className="flex h-full w-full flex-col justify-evenly pt-16 lg:h-full lg:w-7/12 lg:justify-center">
          <p className="flex flex-col self-center text-center text-4xl font-bold uppercase tracking-wider sm:self-start sm:text-start sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="text-white">Live your</span>
            <span className="text-secondary">adventure</span>
          </p>
          <JourneyImage isMobile={true} />
          <p className="w-full text-xs leading-relaxed sm:w-1/2 sm:text-sm md:flex-nowrap md:text-base lg:py-4 xl:text-lg">
            Unleash your European adventure today and immerse yourself in the
            beauty of its diverse destinations.
          </p>
          <SearchBar />
        </div>
        <JourneyImage isMobile={false} />
      </div>
    </div>
  );
};

export default LandingPage;
