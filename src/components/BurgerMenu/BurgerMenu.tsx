interface BurgerMenuProps {
  clicked: boolean;
}

const BurgerMenu = ({ clicked }: BurgerMenuProps) => {
  return (
    <div className="space-y-2">
      <div
        className={
          clicked
            ? `-rotate-45 translate-y-3 transition ease-in-out duration-300 w-10 h-1 bg-primary dark:bg-white rounded-lg`
            : `w-10 h-1 bg-primary rounded-lg dark:bg-white`
        }
      ></div>
      <div
        className={
          clicked
            ? `opacity-0 transition ease-in-out duration-300 w-10 h-1 bg-primary rounded-lg dark:bg-white`
            : `w-10 h-1 bg-primary dark:bg-white rounded-lg`
        }
      ></div>
      <div
        className={
          clicked
            ? `rotate-45 -translate-y-3 transition ease-in-out duration-300 w-10 h-1 bg-primary rounded-lg dark:bg-white`
            : `w-10 h-1 bg-primary rounded-lg dark:bg-white`
        }
      ></div>
    </div>
  );
};

export default BurgerMenu;
