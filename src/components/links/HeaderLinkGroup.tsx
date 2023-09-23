import Link from 'next/link';
import {
  Root,
  List,
  Item,
  Trigger,
  Content,
} from '@radix-ui/react-navigation-menu';

const HeaderLinkGroup = ({
  links,
  isHamburger,
}: {
  links: {
    link: string;
    text: string;
    subLinks: { subLink: string; subTitle: string }[];
  }[];
  isHamburger?: boolean;
}): JSX.Element => {
  return (
    <Root className={`buttonText ${isHamburger ? 'titleText' : 'w-2/3'}`}>
      <List
        className={
          isHamburger
            ? 'flex w-full flex-col space-y-4'
            : 'flex w-full items-center justify-between'
        }
      >
        {links.map(
          ({ link, text, subLinks }, index: number): JSX.Element => (
            <Item key={`${link}-${index}`}>
              <Trigger>
                <li>
                  <Link
                    className={`hover:text-secondary descriptionText uppercase text-lighterBlack tracking-wider ${
                      isHamburger ? 'hover:text-secondary' : 'px-3'
                    }`}
                    href={link}
                  >
                    {text}
                  </Link>
                </li>
              </Trigger>
              <Content>
                <ul className="descriptionText bg-bodyBg max-w-full absolute top-0 hidden flex-col rounded-lg ">
                  {subLinks.map(
                    ({ subLink, subTitle }, index: number): JSX.Element => (
                      <li key={`${subLink}-${index}`} className="py-1">
                        <Link
                          className={`link link-underline link-underline-black text-lighterBlack delay-2000${
                            isHamburger ? 'hover:text-secondary' : 'px-3'
                          }`}
                          href={subLink}
                        >
                          {subTitle}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </Content>
            </Item>
          ),
        )}
      </List>
    </Root>
  );
};

export default HeaderLinkGroup;
