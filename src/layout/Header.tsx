import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import HamburgerMenu from 'src/components/tools/HamburgerMenu';
import Logo from 'src/components/images/Logo';
import UserAvatar from 'src/components/images/UserAvatar';
import { AuthType } from 'src/types/types';
import PrimaryBtn from 'src/components/tools/PrimaryBtn';
import HeaderLinkGroup from 'src/components/links/HeaderLinkGroup';

const Header = (): JSX.Element => {
  const { data: session, status } = useSession<boolean>();
  const loading: boolean = status === 'loading';

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
    if (typeof window !== 'undefined') {
      // Access the window object and set the initial window width
      setWindowWidth(window.innerWidth);
      // Add an event listener to update the window width on resize
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <>
      <header className="containerSpacing absolute top-0 z-10 flex h-16 w-full items-center py-0 text-header backdrop-blur-lg 2xl:px-32">
        <nav className="descriptionText flex w-full justify-between">
          <Logo whiteHover={true} />
          {windowWidth >= 1024 ? (
            <div className="flex w-3/4 items-center justify-between">
              <HeaderLinkGroup
                links={[
                  {
                    link: '/about-us',
                    text: 'Discover',
                    subLinks: [
                      { subLink: '#', subTitle: 'Why EU Tours' },
                      { subLink: '#', subTitle: 'Support Us' }
                    ]
                  },
                  {
                    link: '/bookings',
                    text: 'Services',
                    subLinks: [
                      { subLink: '#', subTitle: 'FAQs' },
                      { subLink: '#', subTitle: 'Support Center' },
                      { subLink: '#', subTitle: 'Contact Us' }
                    ]
                  },
                  {
                    link: '/community',
                    text: 'Community',
                    subLinks: [
                      { subLink: '#', subTitle: 'Capital' },
                      { subLink: '#', subTitle: 'Security' },
                      { subLink: '#', subTitle: 'News and Blogs' }
                    ]
                  },
                  {
                    link: '/about',
                    text: 'About Us',
                    subLinks: [
                      { subLink: '#', subTitle: 'About Us' },
                      { subLink: '#', subTitle: 'Features' },
                      { subLink: '#', subTitle: 'Reviews' }
                    ]
                  }
                ]}
              />
              <section className="w-[180px]">
                {loading ? (
                  <small className="flex justify-end">Loading...</small>
                ) : !session ? (
                  <div className="flex justify-end">
                    <PrimaryBtn authType={AuthType.SignIn} />
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <UserAvatar session={session} />
                    <PrimaryBtn authType={AuthType.SignOut} />
                  </div>
                )}
              </section>
            </div>
          ) : (
            <RxHamburgerMenu className="burgerMenu" onClick={toggleMenu} />
          )}
        </nav>
      </header>
      <HamburgerMenu
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        isMenuOpenLate={isMenuOpenLate}
        session={session}
        signOut={signOut}
        signIn={signIn}
      />
    </>
  );
};

export default Header;
