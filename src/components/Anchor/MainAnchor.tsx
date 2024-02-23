interface anchorProps {
  name: string;
  link: string;
  className?: string;
  newTab?: boolean;
  download: boolean;
}

const MainAnchor = ({
  name,
  className,
  link,
  newTab,
  download,
}: anchorProps) => {
  return (
    <a
      download={download}
      href={link}
      target={newTab ? '_blank' : undefined}
      className={`bg-accent hover:bg-blue-700 text-white px-4 py-3 rounded-xl shadow-lg ease duration-500 standard-font-size hover:bg-accent hover:shadow-blue-400 dark:hover:shadow-blue-900 ${className}`}
    >
      {name}
    </a>
  );
};

export default MainAnchor;
