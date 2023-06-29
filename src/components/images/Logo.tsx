import Image from "next/image";
import Link from "next/link";

const Logo = ({ whiteHover }: { whiteHover?: boolean }): JSX.Element => {
  return (
    <Link className="flex h-12 w-full items-center" href="/">
      <div className="hoverEffect h-full w-[79px] hover:opacity-70">
        <Image
          src="/images/brand.png"
          alt="Logo"
          width={79}
          height={48}
          placeholder="blur"
          blurDataURL="/images/brand.png"
          loading="eager"
        />
      </div>
      <span
        className={`titleText hoverEffect p-[10px] pr-0 text-secondary ${
          whiteHover ? "hover:text-white" : "hover:text-primary"
        }`}
      >
        EU Tours
      </span>
    </Link>
  );
};

export default Logo;
