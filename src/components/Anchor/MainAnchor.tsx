interface anchorProps {
  name: string;
  link: string;
  margin?: string;
  newTab?: boolean;
}

const MainAnchor = ({ name, margin, link, newTab }: anchorProps) => {
  return (
    <a
      href={link}
      target={newTab ? '_blank' : undefined}
      className={`bg-primary text-white px-6 py-3 rounded-xl shadow-lg ease duration-500 standard-font-size hover:bg-accent hover:shadow-blue-300 dark:hover:shadow-blue-800 ${margin}`}
    >
      {name}
    </a>
  );
};

export default MainAnchor;
