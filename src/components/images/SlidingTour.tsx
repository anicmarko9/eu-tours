import Image from "next/image";
const SlidingTour = (): JSX.Element => {
  return (
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
  );
};

export default SlidingTour;
