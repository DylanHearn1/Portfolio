interface buttonProps {
  name: string;
  onclick: () => void;
  margin?: string;
}

const MainButton = ({ name, onclick, margin }: buttonProps) => {
  return (
    <button
      onClick={onclick}
      className={`primary-background text-white px-6 py-3 rounded-xl shadow-lg ease duration-500 standard-font-size ${margin}`}
    >
      {name}
    </button>
  );
};

export default MainButton;
