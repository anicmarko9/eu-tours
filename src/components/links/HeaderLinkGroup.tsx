import Link from 'next/link';
import {
  Root,
  List,
  Item,
  Trigger,
  Content
} from '@radix-ui/react-navigation-menu';

const HeaderLinkGroup = ({
  links,
  isHamburger
}: {
  links: {
    link: string;
    text: string;
    subLinks: { subLink: string; subTitle: string }[];
  }[];
  isHamburger?: boolean;
}): JSX.Element => {
  return (
    <Root className={isHamburger ? 'titleText' : 'w-2/3'}>
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
                    className={`hoverEffect ${
                      isHamburger ? 'hover:text-secondary' : 'px-3'
                    }`}
                    href={link}
                  >
                    {text}
                  </Link>
                </li>
              </Trigger>
              <Content>
                <ul className="descriptionText absolute top-0 hidden flex-col rounded-lg lg:top-8 lg:flex">
                  {subLinks.map(
                    ({ subLink, subTitle }, index: number): JSX.Element => (
                      <li key={`${subLink}-${index}`} className="py-1">
                        <Link
                          className={`hoverEffect ${
                            isHamburger ? 'hover:text-secondary' : 'px-3'
                          }`}
                          href={subLink}
                        >
                          {subTitle}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </Content>
            </Item>
          )
        )}
      </List>
    </Root>
  );
};

export default HeaderLinkGroup;
