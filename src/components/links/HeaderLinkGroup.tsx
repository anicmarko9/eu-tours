import Link from "next/link";

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
        )
      )}
    </ul>
  );
};

export default HeaderLinkGroup;
