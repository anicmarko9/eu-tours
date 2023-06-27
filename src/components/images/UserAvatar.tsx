import type { Session } from "next-auth";
import Image from "next/image";

const UserAvatar = ({ session }: { session: Session | null }): JSX.Element => {
  return session?.user ? (
    <div className="hoverEffect flex cursor-pointer space-x-2 hover:opacity-70">
      {session.user.image && (
        <Image
          src={session.user.image}
          alt="User Avatar"
          width={48}
          height={48}
          className="h-fit w-fit rounded-full"
          placeholder="blur"
          blurDataURL={session.user.image}
          loading="eager"
        />
      )}
    </div>
  ) : (
    <div className="hidden"></div>
  );
};

export default UserAvatar;
