import MainButton from '../Button/Button';

const Navbar = () => {
  return (
    <div className="text-primary fixed backdrop-blur-md bg-white/75 left-0 w-full z-10">
      <ul className="flex w-desktop m-auto justify-center px-10 space-x-10 py-2 items-center">
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
    </div>
  );
};

export default Navbar;
