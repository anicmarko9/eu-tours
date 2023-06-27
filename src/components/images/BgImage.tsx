import Image from "next/image";

const BgImage = ({ src }: { src: string }): JSX.Element => {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Image
        fill
        src={src}
        alt="Background Image"
        className="object-cover"
        placeholder="blur"
        blurDataURL={src}
        loading="eager"
      />
    </div>
  );
};

export default BgImage;
