import { type NextRouter, useRouter } from 'next/router';

const Logo = ({ whiteHover }: { whiteHover?: boolean }): JSX.Element => {
  const router: NextRouter = useRouter();
  const handleClick = (): void => {
    void router.push('/');
  };
  return (
    <figure
      className={`flex h-12 ${
        whiteHover ? 'w-4/5 lg:w-1/4' : 'w-full'
      } cursor-pointer items-center justify-start`}
      onClick={handleClick}
    >
      <figcaption
        className={`logoText text-black ${
          whiteHover ? 'hover:text-black' : 'hover:text-black'
        }`}
      >
        EU TOURS
      </figcaption>
    </figure>
  );
};

export default Logo;
