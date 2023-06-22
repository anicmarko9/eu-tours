const FooterLinkGroup = ({
  title,
  links,
}: {
  title: string;
  links: { link: string; text: string }[];
}): JSX.Element => {
  return (
    <div className="w-fit space-y-4 pt-4 max-[480px]:w-full lg:pt-0">
      <h5 className="text-base font-bold uppercase tracking-wider sm:text-lg lg:text-xl">
        {title}
      </h5>
      <ul className="space-y-4 text-xs sm:text-sm lg:text-base">
        {links.map(
          ({ link, text }): JSX.Element => (
            <li key={link}>
              <a href={link}>{text}</a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default FooterLinkGroup;
