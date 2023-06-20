import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import HamburgerMenu from "src/components/HamburgerMenu";

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
    <header className="absolute top-0 2xl:px-32 xl:px-16 sm:px-16 px-4 py-4 w-full z-10 text-white">
      <nav className="flex justify-between items-center h-16">
        <div className="flex justify-start w-1/6">
          <a href="#">Logo</a>
        </div>
        {windowWidth >= 1024 ? (
          <div className="flex justify-between w-full xl:w-4/5 xl:h-16 items-center">
            <ul className="flex justify-between w-7/12 xl:w-2/3">
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

            <div className="">
              {loading ? (
                <div className="flex justify-end">Loading...</div>
              ) : !session ? (
                <div className="flex justify-end">
                  <button onClick={() => void signIn()}>Sign in</button>
                </div>
              ) : (
                <div className="flex justify-between space-x-16">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      {session.user?.image && (
                        <Image
                          src={session.user.image}
                          alt="User avatar"
                          width={32}
                          height={32}
                          className="rounded-full mr-4"
                        />
                      )}
                      <small>Signed in as</small>
                    </div>
                    <strong className="text-center">
                      {session.user?.name ?? session.user?.email}
                    </strong>
                  </div>
                  <button
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
            className="h-8 w-8 cursor-pointer text-primary hover:opacity-60"
            onClick={toggleMenu}
          />
        )}
        <HamburgerMenu
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          isMenuOpenLate={isMenuOpenLate}
        />
      </nav>
    </header>
  );
};

export default Header;
