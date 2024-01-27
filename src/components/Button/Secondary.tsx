interface buttonProps {
  name: string;
  onclick: () => void;
}

const SecondaryButton = ({ name, onclick }: buttonProps) => {
  return (
    <button
      onClick={onclick}
      className="primary-text secondary-background px-6 py-3 rounded-xl ml-5 hover:-translate-y-2 ease duration-500 shadow-lg"
    >
      {name}
    </button>
  );
};

export default SecondaryButton;
