import Link from 'next/link';
import FooterLinkGroup from '../components/links/FooterLinkGroup';
import Logo from 'src/components/images/Logo';

const Footer = (): JSX.Element => {
  return (
    <footer className="containerSpacing relative z-10 flex w-full flex-col space-y-4 text-tertiary lg:space-y-8 xl:space-y-12 2xl:py-8">
      <section className="flex flex-col justify-between lg:flex-row">
        <div className="w-full space-y-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
          <Logo />
          <p className="descriptionText lg:w-4/5">
            Our mission is to create opportunities for everyone to rediscover
            the joys of European travel and tourism.
          </p>
        </div>
        <hr className="mt-4 w-full border border-black border-opacity-20 lg:hidden" />
        <nav className="flex w-full flex-wrap justify-between lg:w-3/4 xl:w-2/3 xl:flex-nowrap">
          <FooterLinkGroup
            title="Discover"
            links={[
              { link: '#', text: 'Why EU Tours' },
              { link: '#', text: 'Support Us' }
            ]}
          />
          <FooterLinkGroup
            title="Services"
            links={[
              { link: '#', text: 'FAQs' },
              { link: '#', text: 'Support Center' },
              { link: '#', text: 'Contact Us' }
            ]}
          />
          <FooterLinkGroup
            title="Community"
            links={[
              { link: '#', text: 'Capital' },
              { link: '#', text: 'Security' },
              { link: '#', text: 'News and Blogs' }
            ]}
          />
          <FooterLinkGroup
            title="About"
            links={[
              { link: '#', text: 'About Us' },
              { link: '#', text: 'Features' },
              { link: '#', text: 'Reviews' }
            ]}
          />
        </nav>
      </section>
      <hr className="mt-4 w-full border border-black border-opacity-20 lg:hidden" />
      <section className="descriptionText flex w-full flex-col flex-wrap justify-between min-[480px]:flex-row md:flex-nowrap">
        <p className="order-last flex w-full pt-4 min-[480px]:order-none min-[480px]:w-3/5 min-[480px]:pt-0 lg:w-[70%]">
          <small>Copyright by EU Tours. All rights reserved.</small>
        </p>
        <div className="order-first flex w-full justify-start space-x-4 min-[480px]:order-none min-[480px]:w-2/5 min-[480px]:justify-between min-[480px]:space-x-0 lg:w-[27%]">
          <Link
            href="/terms"
            className="hoverEffect cursor-pointer hover:text-secondary"
          >
            <small>Terms & Agreements</small>
          </Link>
          <Link
            href="/privacy"
            className="hoverEffect cursor-pointer hover:text-secondary"
          >
            <small>Privacy Policy </small>
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
