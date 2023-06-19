import FooterLinkGroup from "../FooterLinkGroup";

const Footer = (): JSX.Element => {
  return (
    <footer className="relative 2xl:px-32 xl:px-16 px-8 py-8 w-full z-10 text-black">
      <div className="flex flex-col space-y-16">
        <div className="flex justify-between">
          <div className="w-1/4 space-y-4">
            <a className="text-xl font-bold uppercase" href="/">
              Logo
            </a>
            <p>
              Our mission is to make everyone able to feel the attachment back
              to nature by providing an unforgettable experience.
            </p>
          </div>
          <div className="w-2/3 flex justify-between">
            <FooterLinkGroup
              title="Discover"
              links={[
                { link: "/about-us", text: "Why EU Tours" },
                { link: "/bookings", text: "Support Us" },
              ]}
            />
            <FooterLinkGroup
              title="Services"
              links={[
                { link: "/faqs", text: "FAQs" },
                { link: "/support", text: "Support Center" },
                { link: "/contact", text: "Contact Us" },
              ]}
            />
            <FooterLinkGroup
              title="Community"
              links={[
                { link: "/capital", text: "Capital" },
                { link: "/security", text: "Security" },
                { link: "/blogs", text: "News and Blogs" },
              ]}
            />
            <FooterLinkGroup
              title="About"
              links={[
                { link: "/about-us", text: "About Us" },
                { link: "/features", text: "Features" },
                { link: "/blogs", text: "News & Blogs" },
              ]}
            />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <p className="flex w-[60%]">
            Copyright by EU Tours. All rights reserved.
          </p>
          <div className="flex justify-between w-[30%]">
            <p>Terms & Agreements</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
