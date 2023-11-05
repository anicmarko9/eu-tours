import Image from 'next/image';

export default function BgImage({ src }: { src: string }): JSX.Element {
  return (
    <figure className='absolute inset-0 h-full w-full'>
      <Image
        fill
        src={src}
        alt='Background Image'
        className='object-cover'
        placeholder='blur'
        blurDataURL={src}
        loading='eager'
      />
    </figure>
  );
}
