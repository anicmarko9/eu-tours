import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const HeaderLinkGroup = ({
  links,
  isHamburger,
}: {
  // links: { link: string; text: string }[];
  //links:[ {link:"ink",text:'hello',subLinks:[{sublink:"doona"}]} ]
  links: {
    link: string;
    text: string;
    subLinks: { subLink: string; subTitle: string }[];
  }[];
  isHamburger?: boolean;
}): JSX.Element => {
  return (
    <ul
      className={
        isHamburger
          ? "titleText flex w-full flex-col space-y-4"
          : "flex w-2/3 items-center justify-between"
      }
    >
      {links.map(
        ({ link, text, subLinks }, index: number): JSX.Element => (
          <NavigationMenu.Root
            className="NavigationMenuRoot"
            key={`${link}-${index}`}
          >
            <NavigationMenu.List className="NavigationMenuList">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                  <li key={`${link}-${index}`}>
                    <Link
                      className={`hoverEffect ${
                        isHamburger ? "hover:text-secondary" : "p-3"
                      }`}
                      href={link}
                    >
                      {text}
                    </Link>
                  </li>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className=" top-8 left-1 w-full ">
                  <ul className="absolute text-sm flex flex-col gap-1 bg-black bg-opacity-30 rounded p-1  w-full whitespace-nowrap min-w-[180px]">
                    {subLinks.map(
                      ({ subLink, subTitle }, index: number): JSX.Element => (
                        <li key={`${subLink}-${index}`}>
                          <Link
                            className={`hoverEffect ${
                              isHamburger ? "hover:text-secondary" : "p-3"
                            }`}
                            href={subLink}
                          >
                            {subTitle}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        )
      )}
    </ul>
  );
};

export default HeaderLinkGroup;
