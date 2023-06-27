import { signIn, signOut } from "next-auth/react";
import type { AuthType } from "src/types/types";

const AuthBtn = ({
  authType,
  isHamburger,
}: {
  authType: AuthType;
  isHamburger?: boolean;
}): JSX.Element => {
  return (
    <button
      className={`gradientOrangeButton h-12 w-[120px] rounded-lg border-2 ${
        isHamburger ? "border-primary" : "border-header"
      } px-4 font-bold text-white`}
      onClick={() =>
        authType === "Sign Out"
          ? void signOut({
              callbackUrl: process.env.NEXTAUTH_URL,
            })
          : void signIn()
      }
    >
      {authType}
    </button>
  );
};

export default AuthBtn;
