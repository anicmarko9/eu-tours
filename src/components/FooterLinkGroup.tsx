const FooterLinkGroup = ({
  title,
  links,
}: {
  title: string;
  links: { link: string; text: string }[];
}): JSX.Element => {
  return (
    <div className="w-fit space-y-4 pt-4 max-[480px]:w-full lg:pt-0">
      <h5 className="titleText hoverEffect cursor-pointer py-[10px] text-primary hover:text-secondary">
        {title}
      </h5>
      <ul className="descriptionText space-y-4">
        {links.map(
          ({ link, text }): JSX.Element => (
            <li key={link}>
              <a className="hoverEffect hover:text-secondary" href={link}>
                {text}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default FooterLinkGroup;
