interface anchorProps {
  name: string;
  link: string;
  newTab?: boolean;
  download?: boolean;
  className?: string;
}

const SecondaryAnchor = ({
  name,
  link,
  newTab,
  download,
  className,
}: anchorProps) => {
  return (
    <a
      href={link}
      target={newTab ? '_blank' : undefined}
      className={`bg-secondary hover:bg-gray-300 text-primary px-4 py-3 rounded-xl shadow-lg standard-font-size hover:-translate-y-2 ease duration-500 ${className}`}
      download={download}
    >
      {name}
    </a>
  );
};

export default SecondaryAnchor;
