import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { AuthType } from '@Types/enum';

export default function PrimaryBtn({
  authType,
  text,
}: {
  authType?: AuthType;
  text?: string;
}): JSX.Element {
  const router: AppRouterInstance = useRouter();

  return (
    <button
      className={`gradientOrangeButton h-12 w-[120px] self-center rounded-lg border-2 border-white px-4 text-base font-bold capitalize tracking-wider text-white lg:self-end ${
        authType ? '' : 'sm:text-lg lg:text-xl'
      }`}
      onClick={() =>
        authType
          ? authType === AuthType.SignOut
            ? void signOut({
                callbackUrl: process.env.NEXTAUTH_URL,
              })
            : void signIn()
          : router.push('/')
      }
    >
      {authType ? authType : text}
    </button>
  );
}
