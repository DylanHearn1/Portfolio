interface buttonProps {
  name: string;
  onclick: () => void;
  margin?: string;
}

const SecondaryButton = ({ name, onclick, margin }: buttonProps) => {
  return (
    <button
      onClick={onclick}
      className={`primary-text secondary-background px-6 py-3 rounded-xl hover:-translate-y-2 ease duration-500 shadow-lg standard-font-size ${margin}`}
    >
      {name}
    </button>
  );
};

export default SecondaryButton;
