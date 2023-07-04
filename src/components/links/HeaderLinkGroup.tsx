import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const HeaderLinkGroup = ({
  links,
  isHamburger,
}: {
  links: { link: string; text: string }[];
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
        ({ link, text }, index: number): JSX.Element => (
          <NavigationMenu.Root className="NavigationMenuRoot">
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
                <NavigationMenu.Content className="absolute top-8 left-1 w-full ">
                  <ul className="flex flex-col gap-1 w-500 bg-black bg-opacity-30 rounded p-5">
                    <li className="text-white">hello</li>
                    <li className="text-white">hello</li>
                    <li className="text-white">hello</li>
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


