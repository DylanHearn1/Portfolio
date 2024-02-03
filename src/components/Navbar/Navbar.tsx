import MainButton from '../Button/Button';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useState } from 'react';
import darkmodeicon from './../../assets/darkmodeicon.png';
import lightmodeicon from './../../assets/lightmodeicon.png';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function toggleMode() {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark', !darkMode);
  }

  const containerStyle =
    'text-primary fixed backdrop-blur-md bg-white/75 left-0 w-full z-10';

  return (
    <div
      className={
        toggle
          ? `fixed z-10 backdrop-blur-md bg-white/75 w-full`
          : `${containerStyle}`
      }
    >
      <div className="flex justify-between w-desktop m-auto">
        <button onClick={toggleMode} className="px-10">
          {darkMode ? (
            <>
              <img src={lightmodeicon} alt="light mode button" width={'50px'} />
            </>
          ) : (
            <>
              <img src={darkmodeicon} alt="dark mode button" width={'50px'} />
            </>
          )}
        </button>
        <ul className="md:flex w-desktop px-10 space-x-10 py-2 items-center hidden">
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
            <BurgerMenu clicked={toggle} />
          </div>
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
