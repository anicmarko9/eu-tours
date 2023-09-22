
import SearchBar from "./tools/SearchBar";
import Slider from "./Slider"


const LandingPage = (): JSX.Element =>
{
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt- md:px-0">
      <main className="flex flex-col items-center max-w-2xl md:px-8">
        <header className="max-w-xl mb-10 md:mx-auto text-center my-16 sm:text-center lg:max-w-2xl md:mb-12">
          <div className="max-w-md font-sans text-5xl leading-none text-lighter  md:mx-auto">
            <h2 className="relative inline-block  tracking-tight ">
              A world away in the regions of{" "}
              <span className="relative">Europe</span>
            </h2>
            <p className="descriptionText text-base text-gray-500 md:text-lg  mt-2 mb-6">
            Europe's Treasures, Your Stories
          </p>
          </div>
          <div className="w-fit mx-auto border-b border-t">
            <SearchBar/>
          </div>
        </header>
      </main>
      <div className="-mt-32 lg:-mt-50">
        <Slider/>
      </div>
    </section>
  );
};

export default LandingPage;
