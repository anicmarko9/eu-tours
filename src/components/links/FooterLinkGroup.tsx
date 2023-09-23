import Link from 'next/link';

const FooterLinkGroup = ({
  title,
  links,
}: {
  title: string;
  links: { link: string; text: string }[];
}): JSX.Element => {
  return (
    <section className="w-fit space-y-4 pt-4 max-[480px]:w-full lg:pt-0">
      <h2 className="titleText hoverEffect cursor-pointer py-[10px] text-primary hover:text-secondary">
        {title}
      </h2>
      <ul className="descriptionText space-y-4">
        {links.map(
          ({ link, text }, index: number): JSX.Element => (
            <li key={`${link}-${index}`}>
              <Link className="hoverEffect hover:text-secondary" href={link}>
                {text}
              </Link>
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

export default FooterLinkGroup;
