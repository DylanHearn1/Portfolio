import githubLogo from './../../assets/githubLogo.png';
import linkedinlogo from './../../assets/linkedinlogo.png';
import SecondaryAnchor from '../../components/Anchor/SecondaryAnchor';
import MainAnchor from '../../components/Anchor/MainAnchor';

const Homepage = () => {
  return (
    <>
      <div className="h-dvh md:items-center text-center sm:text-left flex flex-col justify-center md:flex-row md:justify-between space-y-10">
        <div className="space-y-3">
          <h1 className="sm:text-8xl text-6xl font-bold dark:text-white">
            Dylan Hearn
          </h1>
          <h2 className="dark:text-white sm:text-5xl text-2xl">
            <span className="accent font-bold">Front-end</span> Developer
          </h2>
          <div className="flex space-x-6 justify-center sm:justify-start">
            <a href="https://github.com/DylanHearn1" target="_blank">
              <img
                src={githubLogo}
                alt="github logo"
                height="50px"
                width="50px"
                className="brightness-0 dark:invert"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/dylan-hearn-84b216291/"
              target="_blank"
            >
              <img
                src={linkedinlogo}
                alt="linkin logo"
                height="50px"
                width="50px"
                className="brightness-0 dark:invert"
              />
            </a>
          </div>
        </div>
        <div>
          <SecondaryAnchor
            name="Contact"
            link="mailto: dylanhearn123@gmail.com"
            className="mr-5 mb-4"
            download={false}
          />
          <MainAnchor
            name="Download CV"
            download
            link={'./../../assets/dylancv.pdf'}
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;
