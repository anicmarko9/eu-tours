import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { getEmailUsername } from "src/helper/helper";
import type {
  LiteralUnion,
  SignInAuthorizationParams,
  SignInOptions,
  SignOutParams,
} from "next-auth/react/types";
import type { BuiltInProviderType } from "next-auth/providers";
import Logo from "../images/Logo";
import HeaderLinkGroup from "../links/HeaderLinkGroup";
import type { Session } from "next-auth";
import UserAvatar from "../images/UserAvatar";
import { AuthType } from "src/types/types";
import PrimaryBtn from "./PrimaryBtn";

const BurgerMenu = ({
  toggleMenu,
  isMenuOpen,
  isMenuOpenLate,
  session,
}: {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  isMenuOpenLate: boolean;
  session: Session | null;
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
      const handleResize = (): void => {
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
      role="navigation"
    >
      <nav className="absolute right-0 top-0 z-30 h-full w-full space-y-4 bg-bodyBg p-4 shadow-lg sm:w-3/5">
        <section className="titleText flex items-center justify-between text-secondary">
          <Logo />
          <IoClose onClick={toggleMenu} className="closeBtn" />
        </section>
        <hr className="border-1 border-primary" />
        <HeaderLinkGroup
          links={[
            { link: "/about-us", text: "Discover" },
            { link: "/bookings", text: "Services" },
            { link: "/community", text: "Community" },
            { link: "/about", text: "About Us" },
          ]}
          isHamburger={true}
        />
        <hr className="border-1 border-primary" />
        {session?.user ? (
          <section className="flex justify-between">
            <div className="flex space-x-2">
              <UserAvatar session={session} />
              {/* There will always be a name, but not always an email. */}
              {session.user.name && (
                <div className="hoverEffect descriptionText flex h-12 cursor-pointer flex-col justify-evenly hover:text-secondary">
                  {session.user.email && (
                    <span className="break-words break-all font-bold">
                      {getEmailUsername(session.user.email)}
                    </span>
                  )}
                  <span>{session.user.name}</span>
                </div>
              )}
            </div>
            <PrimaryBtn authType={AuthType.SignOut} />
          </section>
        ) : (
          <section className="flex justify-end">
            <PrimaryBtn authType={AuthType.SignIn} />
          </section>
        )}
      </nav>
      <div
        className="absolute left-0 top-0 z-30 h-0 w-0 bg-black bg-opacity-30 sm:h-full sm:w-2/5"
        onClick={toggleMenu}
      ></div>
    </div>
  );
};

export default BurgerMenu;
