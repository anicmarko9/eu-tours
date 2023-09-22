import { signIn, signOut } from "next-auth/react";
import type { AuthType } from "src/types/types";

const PrimaryBtn = ({
  authType,
  text,
}: {
  authType?: AuthType;
  text?: string;
}): JSX.Element => {
  const handleSubmit = (): void => {
    console.log("Not implemented yet!");
  };
  return (
    <button
      className={`shadow-2xl descriptionText hoverButton self-center rounded-full font-light tracking-wide captalise border h-8 my-auto w-[120px] bg-lighterBlack px-4 text-sm  text-white lg:self-end ${
        authType ? "" : "text-sm"
      }`}
      onClick={() =>
        authType
          ? authType === "Sign Out"
            ? void signOut({
                callbackUrl: process.env.NEXTAUTH_URL,
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
