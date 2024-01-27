interface buttonProps {
  name: string;
  onclick: () => void;
}

const MainButton = ({ name, onclick }: buttonProps) => {
  return (
    <button
      onClick={onclick}
      className="primary-background text-white px-6 py-3 rounded-xl ml-5 shadow-lg ease duration-500"
    >
      {name}
    </button>
  );
};

export default MainButton;
