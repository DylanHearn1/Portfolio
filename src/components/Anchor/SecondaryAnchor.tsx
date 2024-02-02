interface anchorProps {
  name: string;
  link: string;
  margin?: string;
  newTab?: boolean;
}

const SecondaryAnchor = ({ name, margin, link, newTab }: anchorProps) => {
  return (
    <a
      href={link}
      target={newTab ? '_blank' : undefined}
      className={`bg-secondary text-primary px-6 py-3 rounded-xl shadow-lg standard-font-size hover:-translate-y-2 ease duration-500 ${margin}`}
    >
      {name}
    </a>
  );
};

export default SecondaryAnchor;
