import type { Session } from 'next-auth';
import Image from 'next/image';

export default function UserAvatar({
  session,
}: {
  session: Session | null;
}): JSX.Element {
  return (
    <figure className='hoverEffect cursor-pointer hover:opacity-70'>
      {session?.user?.image && (
        <Image
          src={session.user.image}
          alt='User Avatar'
          width={48}
          height={48}
          className='h-fit w-fit rounded-full'
          placeholder='blur'
          blurDataURL={session.user.image}
          loading='eager'
        />
      )}
    </figure>
  );
}
