import gitHubLogo from './../../assets/githubLogo.png';

const Footer = () => {
  return (
    <div className="bg-black w-full left-0 absolute text-white">
      <div className="w-desktop m-auto px-10 flex justify-between items-center py-10">
        <div>
          <a href="https://github.com/DylanHearn1" target="_blank">
            <img
              src={gitHubLogo}
              alt="github logo"
              height="50px"
              width="50px"
              className="invert"
            />
          </a>
        </div>
        <ul className="flex space-x-5">
          <li>
            <a
              href="#home"
              className="hover:underline underline-offset-8 ease-in-out duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:underline underline-offset-8 ease-in-out duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:underline underline-offset-8 ease-in-out duration-300"
            >
              Projects
            </a>
          </li>
        </ul>
        <p className="text-white opacity-100">
          dylanhearn123 <br />
          @gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
