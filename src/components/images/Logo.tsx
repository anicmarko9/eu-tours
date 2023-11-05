import { useRouter } from 'next/navigation';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Image from 'next/image';

export default function Logo({
  whiteHover,
}: {
  whiteHover?: boolean;
}): JSX.Element {
  const router: AppRouterInstance = useRouter();

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
      <Image
        src='/images/brand.png'
        alt='Logo'
        width={79}
        height={48}
        placeholder='blur'
        blurDataURL='/images/brand.png'
        loading='eager'
        className='hoverEffect h-full w-[79px] hover:opacity-70'
      />
      <figcaption
        className={`titleText hoverEffect p-[10px] pr-0 text-secondary ${
          whiteHover ? 'hover:text-white' : 'hover:text-primary'
        }`}
      >
        EU Tours
      </figcaption>
    </figure>
  );
}
