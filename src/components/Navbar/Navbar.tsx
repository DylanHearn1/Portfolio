import MainButton from '../Button/Button';
import CloseMenu from '../BurgerMenu/CloseMenu';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="text-primary fixed backdrop-blur-md bg-white/75 left-0 w-full z-10">
      <ul className="md:flex w-desktop m-auto justify-center px-10 space-x-10 py-2 items-center hidden">
        <li className="hover:underline">
          <a href="#home">Home</a>
        </li>
        <li className="hover:underline">
          <a href="#about">About</a>
        </li>
        <li className="hover:underline">
          <a href="#contact">Contact</a>
        </li>
        <li>
          <MainButton name="Download CV" onclick={() => alert('hello')} />
        </li>
      </ul>
      <div className="flex justify-end md:hidden px-10 py-5">
        <div onClick={() => setToggle((prev) => !prev)}>
          {toggle ? (
            <>
              <CloseMenu />
            </>
          ) : (
            <>
              <BurgerMenu />
            </>
          )}
        </div>
      </div>
      {toggle && (
        <ul className="md:hidden space-y-3 text-center shadow-xl py-5">
          <li className="hover:underline">
            <a href="#home">Home</a>
          </li>
          <li className="hover:underline">
            <a href="#about">About</a>
          </li>
          <li className="hover:underline">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
