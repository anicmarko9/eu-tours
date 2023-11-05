import Image from 'next/image';

export default function SlidingTour({ src }: { src: string }): JSX.Element {
  return (
    <figure className='rounded-lg'>
      <Image
        width={250}
        height={400}
        src={src}
        alt='Background image'
        className='rounded-lg min-[1750px]:min-w-[350px]'
        placeholder='blur'
        blurDataURL={src}
        loading='eager'
      />
    </figure>
  );
}
