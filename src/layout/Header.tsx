import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import HamburgerMenu from "src/components/HamburgerMenu";
import { getEmailUsername } from "src/helper/helper";

const Header = (): JSX.Element => {
  const { data: session, status } = useSession<boolean>();
  const loading: boolean = status === "loading";

  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMenuOpenLate, setIsMenuOpenLate] = useState<boolean>(false);

  // isMenuOpen is false when Hamburger Menu closes, and it's responsible for animation.
  // isMenuOpenLate is supposed to wait one second for animation to execute before applying "display: none" to side menu container.

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
    isMenuOpen
      ? setTimeout(function () {
          setIsMenuOpenLate(!isMenuOpenLate);
        }, 1000)
      : setIsMenuOpenLate(!isMenuOpenLate);
  };

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

  return (
    <>
      <header className="containerSpacing absolute top-0 z-10 w-full text-header backdrop-blur-lg 2xl:px-32 2xl:py-4">
        <nav className="descriptionText flex h-8 items-center justify-between">
          <div className="titleText flex h-full w-1/5 items-center justify-start text-secondary">
            <a href="#">Logo</a>
          </div>
          {windowWidth >= 1024 ? (
            <div className="flex h-full w-full items-center justify-between xl:w-4/5">
              <ul className="flex h-full w-2/3 items-center justify-between xl:w-2/3">
                <Link href="#">
                  <li>Discover</li>
                </Link>
                <Link href="#">
                  <li>Services</li>
                </Link>
                <Link href="#">
                  <li>Community</li>
                </Link>
                <Link href="#">
                  <li>About Us</li>
                </Link>
              </ul>
              <div className="h-full w-1/4">
                {loading ? (
                  <div className="flex justify-end">Loading...</div>
                ) : !session ? (
                  <div className="flex justify-end">
                    <button onClick={() => void signIn()}>Sign in</button>
                  </div>
                ) : (
                  <div className="flex justify-between">
                    <div className="flex space-x-2">
                      {session.user?.image && (
                        <Image
                          src={session.user.image}
                          alt="User Avatar"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      )}
                      <div className="flex flex-col">
                        <small className="h-4 leading-3">
                          {getEmailUsername(session.user?.email as string)}
                        </small>
                        <small className="h-4 leading-3">
                          {session.user?.name}
                        </small>
                      </div>
                    </div>
                    <button
                      className="gradientOrange rounded-lg border-2 border-tertiary px-4 text-white"
                      onClick={() =>
                        void signOut({ callbackUrl: "http://localhost:3000" })
                      }
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <RxHamburgerMenu
              className="h-8 w-8 cursor-pointer text-secondary hover:opacity-60"
              onClick={toggleMenu}
            />
          )}
        </nav>
      </header>
      <HamburgerMenu
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        isMenuOpenLate={isMenuOpenLate}
      />
    </>
  );
};

export default Header;
