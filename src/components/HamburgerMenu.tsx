import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { getEmailUsername } from "src/helper/helper";
import {
  LiteralUnion,
  SignInAuthorizationParams,
  SignInOptions,
  SignOutParams,
} from "next-auth/react/types";
import { BuiltInProviderType } from "next-auth/providers";

const BurgerMenu = ({
  toggleMenu,
  isMenuOpen,
  isMenuOpenLate,
  user,
  signOut,
  signIn,
}: {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  isMenuOpenLate: boolean;
  user:
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | undefined;
  signOut: (options?: SignOutParams<true> | undefined) => Promise<undefined>;
  signIn: (
    provider?: LiteralUnion<BuiltInProviderType> | undefined,
    options?: SignInOptions | undefined,
    authorizationParams?: SignInAuthorizationParams | undefined
  ) => Promise<unknown>;
}): JSX.Element => {
  // Props are passed from "Header" component.
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Access the window object and set the initial window width
      setWindowWidth(window.innerWidth);

      // Add an event listener to update the window width on resize
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  if (!isMenuOpenLate || windowWidth >= 1024)
    return <div className="hidden"></div>;

  return (
    <div
      className={`fixed top-0 z-30 h-screen w-full text-primary ${
        isMenuOpen ? "animate-slideInRight" : "scale-0 animate-slideOutRight"
      }`}
    >
      <div className="absolute right-0 top-0 z-30 h-full w-full space-y-4 bg-bodyBg p-4 shadow-lg sm:w-3/5">
        <div className="titleText flex items-center justify-between text-secondary">
          <a href="/">Logo</a>
          <IoClose
            onClick={toggleMenu}
            className="h-8 w-8 cursor-pointer rounded-full text-secondary transition-all duration-200 ease-in hover:bg-secondary hover:text-white"
          />
        </div>
        <hr className="border-1 border-primary" />
        <div className="titleText flex w-full flex-col space-y-4">
          <a href="/about-us">Discover</a>
          <a href="/bookings">Services</a>
          <a href="/weight-loss">Community</a>
          <a href="/stories">About Us</a>
        </div>
        <hr className="border-1 border-primary" />
        {user ? (
          <div className="flex justify-between">
            <div className="flex space-x-2">
              {user.image && (
                <Image
                  src={user.image}
                  alt="User Avatar"
                  width={48}
                  height={48}
                  className="h-fit w-fit rounded-full"
                />
              )}
              {user.email && user.name && (
                <p className="descriptionText flex h-12 flex-col justify-evenly">
                  <span className="break-words break-all font-bold">
                    {getEmailUsername(user.email)}
                  </span>
                  <span>{user.name}</span>
                </p>
              )}
            </div>
            <button
              className="gradientOrange h-12 w-[120px] rounded-lg border-2 border-primary px-4 font-bold text-white"
              onClick={() =>
                void signOut({ callbackUrl: "http://localhost:3000" })
              }
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="flex justify-end">
            <button
              className="gradientOrange h-12 w-[120px] rounded-lg border-2 border-primary px-4 font-bold text-white"
              onClick={() => void signIn()}
            >
              Sign in
            </button>
          </div>
        )}
      </div>
      <div
        className="absolute left-0 top-0 z-30 h-0 w-0 bg-black bg-opacity-30 sm:h-full sm:w-2/5"
        onClick={toggleMenu}
      ></div>
    </div>
  );
};

export default BurgerMenu;
