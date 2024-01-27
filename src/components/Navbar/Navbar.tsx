import MainButton from '../Button/Button';

const Navbar = () => {
  return (
    <div className="text-primary fixed backdrop-blur-xl bg-white/75 left-0 w-full">
      <ul className="flex desktop-width m-auto justify-center space-x-10 py-2 items-center">
        <li className="hover:underline">
          <a href="#">Home</a>
        </li>
        <li className="hover:underline">
          <a href="#">About</a>
        </li>
        <li className="hover:underline">
          <a href="#">Contact</a>
        </li>
        <li>
          <MainButton name="Download CV" onclick={() => alert('hello')} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
