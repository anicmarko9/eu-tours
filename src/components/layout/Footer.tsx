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
            <div className="space-y-4">
              <h5 className="text-xl font-bold uppercase tracking-wider">
                Discover
              </h5>
              <ul className="space-y-4">
                <li>
                  <a href="/about-us">Why EU Tours</a>
                </li>
                <li>
                  <a href="/bookings">Support Us</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-xl font-bold uppercase tracking-wider">
                Services
              </h5>
              <ul className="space-y-4">
                <li>
                  <a href="/faqs">FAQs</a>
                </li>
                <li>
                  <a href="/support">Support Center</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-xl font-bold uppercase tracking-wider">
                Comunity
              </h5>
              <ul className="space-y-4">
                <li>
                  <a href="/capital">Capital</a>
                </li>
                <li>
                  <a href="/security">Security</a>
                </li>
                <li>
                  <a href="/blogs">News and Blogs</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-xl font-bold uppercase tracking-wider">
                About
              </h5>
              <ul className="space-y-4">
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/features">Features</a>
                </li>
                <li>
                  <a href="/blogs">News & Blogs</a>
                </li>
              </ul>
            </div>
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
