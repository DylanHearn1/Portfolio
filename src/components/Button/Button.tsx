interface buttonProps {
  name: string;
  onclick?: () => void;
  margin?: string;
}

const MainButton = ({ name, onclick, margin }: buttonProps) => {
  return (
    <button
      onClick={onclick}
      className={`bg-accent text-white px-4 py-3 rounded-xl shadow-lg ease duration-500 standard-font-size hover:bg-accent hover:shadow-blue-300 dark:hover:shadow-blue-800 ${margin}`}
    >
      {name}
    </button>
  );
};

export default MainButton;
