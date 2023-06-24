import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { getEmailUsername } from "src/helper/helper";
import type {
  LiteralUnion,
  SignInAuthorizationParams,
  SignInOptions,
  SignOutParams,
} from "next-auth/react/types";
import type { BuiltInProviderType } from "next-auth/providers";
import Link from "next/link";

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
          <Link className="hoverEffect flex h-12 w-full items-center" href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={48}
              className="hoverEffect h-full w-auto object-contain hover:opacity-70"
            />
            <span className="titleText hoverEffect p-[10px] pr-0 text-secondary hover:text-primary">
              EU Tours
            </span>
          </Link>
          <IoClose
            onClick={toggleMenu}
            className="h-8 w-8 cursor-pointer rounded-full text-secondary transition-all duration-200 ease-in hover:bg-secondary hover:text-white"
          />
        </div>
        <hr className="border-1 border-primary" />
        <div className="titleText flex w-full flex-col space-y-4">
          <Link className="hoverEffect hover:text-secondary" href="/about-us">
            Discover
          </Link>
          <Link className="hoverEffect hover:text-secondary" href="/bookings">
            Services
          </Link>
          <Link
            className="hoverEffect hover:text-secondary"
            href="/weight-loss"
          >
            Community
          </Link>
          <Link className="hoverEffect hover:text-secondary" href="/stories">
            About Us
          </Link>
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
                  className="hoverEffect h-fit w-fit cursor-pointer rounded-full hover:opacity-70"
                />
              )}
              {user.email && user.name && (
                <p className="hoverEffect descriptionText flex h-12 cursor-pointer flex-col justify-evenly hover:text-secondary">
                  <span className="break-words break-all font-bold">
                    {getEmailUsername(user.email)}
                  </span>
                  <span>{user.name}</span>
                </p>
              )}
            </div>
            <button
              className="gradientOrangeButton h-12 w-[120px] rounded-lg border-2 border-primary px-4 font-bold text-white"
              onClick={() =>
                void signOut({
                  callbackUrl:
                    process.env.NODE_ENV === "production"
                      ? `https://${process.env.VERCEL_URL as string}`
                      : "http://localhost:3000",
                })
              }
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="flex justify-end">
            <button
              className="gradientOrangeButton h-12 w-[120px] rounded-lg border-2 border-primary px-4 font-bold text-white"
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
