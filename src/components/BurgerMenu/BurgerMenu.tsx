interface BurgerMenuProps {
  clicked: boolean;
}

const BurgerMenu = ({ clicked }: BurgerMenuProps) => {
  return (
    <div className="space-y-2">
      <div
        className={
          clicked
            ? `-rotate-45 translate-y-3.5 transition ease-in-out duration-300 w-12 h-1.5 bg-primary rounded-lg`
            : `w-12 h-1.5 bg-primary rounded-lg`
        }
      ></div>
      <div
        className={
          clicked
            ? `opacity-0 transition ease-in-out duration-300 w-12 h-1.5 bg-primary rounded-lg`
            : `w-12 h-1.5 bg-primary rounded-lg`
        }
      ></div>
      <div
        className={
          clicked
            ? `rotate-45 -translate-y-3.5 transition ease-in-out duration-300 w-12 h-1.5 bg-primary rounded-lg`
            : `w-12 h-1.5 bg-primary rounded-lg`
        }
      ></div>
    </div>
  );
};

export default BurgerMenu;
