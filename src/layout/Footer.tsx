import FooterLinkGroup from "../components/FooterLinkGroup";

const Footer = (): JSX.Element => {
  return (
    <footer className="relative z-10 w-full px-4 py-4 text-black lg:px-6 lg:py-6 xl:px-8 xl:py-8 2xl:px-16">
      <div className="flex flex-col space-y-4 lg:space-y-8 xl:space-y-12">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="w-full space-y-4 sm:w-1/2 lg:w-1/5 xl:w-1/4">
            <a
              className="text-base font-bold uppercase tracking-wider sm:text-lg lg:text-xl"
              href="/"
            >
              Logo
            </a>
            <p className="text-xs sm:text-sm lg:text-base">
              Our mission is to make everyone able to feel the attachment back
              to nature by providing an unforgettable experience.
            </p>
          </div>
          <hr className="mt-4 w-full border border-black border-opacity-20 lg:hidden" />
          <div className="flex w-full flex-wrap justify-between lg:w-3/4 xl:w-2/3 xl:flex-nowrap">
            <FooterLinkGroup
              title="Discover"
              links={[
                { link: "#", text: "Why EU Tours" },
                { link: "#", text: "Support Us" },
              ]}
            />
            <FooterLinkGroup
              title="Services"
              links={[
                { link: "#", text: "FAQs" },
                { link: "#", text: "Support Center" },
                { link: "#", text: "Contact Us" },
              ]}
            />
            <FooterLinkGroup
              title="Community"
              links={[
                { link: "#", text: "Capital" },
                { link: "#", text: "Security" },
                { link: "#", text: "News and Blogs" },
              ]}
            />
            <FooterLinkGroup
              title="About"
              links={[
                { link: "#", text: "About Us" },
                { link: "#", text: "Features" },
                { link: "#", text: "News & Blogs" },
              ]}
            />
          </div>
        </div>
        <hr className="mt-4 w-full border border-black border-opacity-20 lg:hidden" />
        <div className="flex w-full flex-wrap justify-between text-xs sm:text-sm md:flex-nowrap lg:text-base">
          <p className="xl:x-[60%] order-last flex w-full pt-4 md:order-first md:w-1/2 md:pt-0">
            Copyright by EU Tours. All rights reserved.
          </p>
          <div className="md:odrer-last order-first flex w-full flex-wrap justify-between md:w-2/5 md:flex-row md:flex-nowrap xl:w-[30%]">
            <p>Terms & Agreements</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
