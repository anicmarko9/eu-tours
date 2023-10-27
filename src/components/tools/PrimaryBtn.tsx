import { signIn, signOut } from 'next-auth/react';
import type { AuthType } from 'src/types/types';

const PrimaryBtn = ({
  authType,
  text
}: {
  authType?: AuthType;
  text?: string;
}): JSX.Element => {
  const handleSubmit = (): void => {
    console.log('Not implemented yet!');
  };
  return (
    <button
      className={`gradientOrangeButton h-12 w-[120px] self-center rounded-lg border-2 border-white px-4 text-base font-bold capitalize tracking-wider text-white lg:self-end ${
        authType ? '' : 'sm:text-lg lg:text-xl'
      }`}
      onClick={() =>
        authType
          ? authType === 'Sign Out'
            ? void signOut({
                callbackUrl: process.env.NEXTAUTH_URL
              })
            : void signIn()
          : handleSubmit()
      }
    >
      {authType ? authType : text}
    </button>
  );
};

export default PrimaryBtn;
