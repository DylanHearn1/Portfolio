import MainButton from '../Button/Button';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';
import darkmodeicon from './../../assets/darkmodeicon.png';
import lightmodeicon from './../../assets/lightmodeicon.png';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState('dark');

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      setDarkMode('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  function toggleMode() {
    const theme = localStorage.getItem('theme');

    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      setDarkMode('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode('light');
      localStorage.setItem('theme', 'light');
    }
  }

  const listItemStyle =
    'underline-offset-4 hover:underline decoration-2 decoration-primary hover:translate-y-1 ease-in-out duration-300';

  return (
    <div className="text-primary fixed backdrop-blur-md bg-white/75 dark:bg-dark-75 left-0 w-full shadow md:shadow-none dark:shadow-gray-700 z-10 dark:text-white">
      <div className="flex justify-between w-desktop m-auto">
        <button onClick={toggleMode} className="px-10">
          {darkMode === 'dark' ? (
            <>
              <img
                src={lightmodeicon}
                alt="light mode button"
                width={'50px'}
                className="invert"
              />
            </>
          ) : (
            <>
              <img src={darkmodeicon} alt="dark mode button" width={'50px'} />
            </>
          )}
        </button>
        <ul className="md:flex w-desktop px-10 space-x-10 py-2 items-center hidden">
          <li className={listItemStyle}>
            <a href="#home">Home</a>
          </li>
          <li className={listItemStyle}>
            <a href="#about">About</a>
          </li>
          <li className={listItemStyle}>
            <a href="#projects">Projects</a>
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
          <li className="hover:underline" onClick={(prev) => setToggle(!prev)}>
            <a href="#home">Home</a>
          </li>
          <li className="hover:underline" onClick={(prev) => setToggle(!prev)}>
            <a href="#about">About</a>
          </li>
          <li className="hover:underline" onClick={(prev) => setToggle(!prev)}>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
