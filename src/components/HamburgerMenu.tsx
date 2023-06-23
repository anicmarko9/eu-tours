import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const BurgerMenu = ({
  toggleMenu,
  isMenuOpen,
  isMenuOpenLate,
}: {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  isMenuOpenLate: boolean;
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
      className={`fixed top-0 z-30 h-screen w-full text-black ${
        isMenuOpen ? "animate-slideInRight" : "scale-0 animate-slideOutRight"
      }`}
    >
      <div className="absolute right-0 top-0 z-30 h-full w-full bg-white p-4 shadow-lg sm:w-3/5">
        <div className="flex items-center justify-between text-2xl">
          <a href="/">EU Tours</a>
          <IoClose
            onClick={toggleMenu}
            className="h-8 w-8 cursor-pointer rounded-full text-secondary transition-all duration-200 ease-in hover:bg-gray-200"
          />
        </div>
        <hr className="border-1" />
        <div className="flex w-full flex-col space-y-4 py-4 text-xl tracking-wide">
          <a href="/about-us">Discover</a>
          <a href="/bookings">Services</a>
          <a href="/weight-loss">Community</a>
          <a href="/stories">About Us</a>
        </div>
      </div>
      <div
        className="absolute left-0 top-0 z-30 h-0 w-0 bg-black bg-opacity-30 sm:h-full sm:w-2/5"
        onClick={toggleMenu}
      ></div>
    </div>
  );
};

export default BurgerMenu;
