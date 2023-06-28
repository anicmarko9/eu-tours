import Image from "next/image";

const JourneyImage = ({ isMobile }: { isMobile: boolean }): JSX.Element => {
  return isMobile ? (
    <div className="flex h-[250px] w-full justify-center lg:hidden">
      <Image
        src="/images/journey.png"
        alt="Landing Page Image"
        width={250}
        height={250}
        placeholder="blur"
        blurDataURL={"/images/journey.png"}
        loading="eager"
      />
    </div>
  ) : (
    <div className="flex h-full w-5/12 items-center justify-end max-[1023.9px]:hidden 2xl:w-1/2">
      <Image
        src="/images/journey.png"
        alt="Landing Page Image"
        width={500}
        height={500}
        placeholder="blur"
        blurDataURL={"/images/journey.png"}
        loading="eager"
        className="w-full"
      />
    </div>
  );
};

export default JourneyImage;
