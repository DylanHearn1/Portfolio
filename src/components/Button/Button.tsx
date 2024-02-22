interface buttonProps {
  name: string;
  onclick?: () => void;
  margin?: string;
}

const MainButton = ({ name, onclick, margin }: buttonProps) => {
  return (
    <button
      onClick={onclick}
      className={`bg-accent hover:bg-blue-700 text-white px-4 py-3 rounded-xl shadow-lg ease duration-500 standard-font-size hover:bg-accent hover:shadow-blue-400 dark:hover:shadow-blue-900 ${margin}`}
    >
      {name}
    </button>
  );
};

export default MainButton;
