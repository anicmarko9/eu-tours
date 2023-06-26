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
    <>
      <header className="containerSpacing absolute top-0 z-10 flex h-16 w-full items-center py-0 text-header backdrop-blur-lg 2xl:px-32">
        <nav className="descriptionText flex w-full justify-between">
          <div className="flex w-4/5 items-center justify-start lg:w-1/4">
            <Link className="flex h-12 w-full items-center" href="/">
              <div className="hoverEffect h-full w-[79px] hover:opacity-70">
                <Image src="/brand.png" alt="Logo" width={79} height={48} />
              </div>
              <span className="titleText hoverEffect p-[10px] pr-0 text-secondary">
                EU Tours
              </span>
            </Link>
          </div>
          {windowWidth >= 1024 ? (
            <div className="flex w-3/4 items-center justify-between">
              <ul className="flex w-2/3 items-center justify-between">
                <Link className="hoverEffect p-3" href="#">
                  <li>Discover</li>
                </Link>
                <Link className="hoverEffect p-3" href="#">
                  <li>Services</li>
                </Link>
                <Link className="hoverEffect p-3" href="#">
                  <li>Community</li>
                </Link>
                <Link className="hoverEffect p-3" href="#">
                  <li>About Us</li>
                </Link>
              </ul>
              <div className="w-[180px]">
                {loading ? (
                  <div className="flex justify-end">Loading...</div>
                ) : !session ? (
                  <div className="flex justify-end">
                    <button
                      className="gradientOrangeButton h-12 rounded-lg border-2 border-header px-4 font-bold text-white"
                      onClick={() => void signIn()}
                    >
                      Sign in
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="hoverEffect flex cursor-pointer space-x-2 hover:opacity-70">
                      {session.user?.image && (
                        <Image
                          src={session.user.image}
                          alt="User Avatar"
                          width={48}
                          height={48}
                          className="h-fit w-fit rounded-full"
                        />
                      )}
                    </div>
                    <button
                      className="gradientOrangeButton h-12 rounded-lg border-2 border-header px-4 font-bold text-white"
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
                )}
              </div>
            </div>
          ) : (
            <RxHamburgerMenu
              className="hoverEffect h-8 w-8 cursor-pointer self-center text-secondary"
              onClick={toggleMenu}
            />
          )}
        </nav>
      </header>
      <HamburgerMenu
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        isMenuOpenLate={isMenuOpenLate}
        user={session?.user}
        signOut={signOut}
        signIn={signIn}
      />
    </>
  );
};

export default Header;
