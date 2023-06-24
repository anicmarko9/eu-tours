import Link from "next/link";
import FooterLinkGroup from "../components/FooterLinkGroup";
import Image from "next/image";

const Footer = (): JSX.Element => {
  return (
    <footer className="containerSpacing relative z-10 w-full text-tertiary 2xl:py-8">
      <div className="flex flex-col space-y-4 lg:space-y-8 xl:space-y-12">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="w-full space-y-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <Link className="flex h-12 w-full items-center" href="/">
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
            <p className="descriptionText lg:w-4/5">
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
        <div className="descriptionText flex w-full flex-wrap justify-between md:flex-nowrap">
          <p className="xl:x-[60%] order-last flex w-full pt-4 md:order-first md:w-1/2 md:pt-0">
            Copyright by EU Tours. All rights reserved.
          </p>
          <div className="md:odrer-last order-first flex w-full flex-wrap justify-between md:w-2/5 md:flex-row md:flex-nowrap xl:w-[30%]">
            <p className="hoverEffect cursor-pointer hover:text-secondary">
              Terms & Agreements
            </p>
            <p className="hoverEffect cursor-pointer hover:text-secondary">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
