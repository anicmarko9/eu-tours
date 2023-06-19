const FooterLinkGroup = ({
  title,
  links,
}: {
  title: string;
  links: { link: string; text: string }[];
}): JSX.Element => {
  return (
    <div className="space-y-4">
      <h5 className="text-xl font-bold uppercase tracking-wider">{title}</h5>
      <ul className="space-y-4">
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
