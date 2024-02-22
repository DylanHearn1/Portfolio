import gitHubLogo from './../../assets/githubLogo.png';
import linkedinlogo from './../../assets/linkedinlogo.png';

const Footer = () => {
  return (
    <div className="bg-black w-full left-0 absolute text-white">
      <div className="w-desktop m-auto px-10 flex flex-col md:flex-row space-y-10 md:space-y-0 justify-between items-center py-20 text-center">
        <ul className="flex space-x-5">
          <li>
            <a href="https://github.com/DylanHearn1" target="_blank">
              <img
                src={gitHubLogo}
                alt="github logo"
                height="50px"
                width="50px"
                className="invert"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dylan-hearn-84b216291/"
              target="_blank"
            >
              <img
                src={linkedinlogo}
                alt="linkedin logo"
                height="50px"
                width="50px"
                className="brightness-0 invert"
              />
            </a>
          </li>
        </ul>
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
        <a
          href="mailto:dylanhearn123@gmail.com"
          className="hover:underline underline-offset-8 ease-in-out duration-300"
        >
          Email me!
        </a>
      </div>
    </div>
  );
};

export default Footer;
