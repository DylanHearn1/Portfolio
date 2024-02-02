import MainButton from '../../components/Button/Button';
import SecondaryButton from '../../components/Button/Secondary';
import githubLogo from './../../assets/githubLogo.png';
import linkedinLogo from './../../assets/linkdedinLogo.png';

const Homepage = () => {
  return (
    <div className="h-dvh md:items-center flex flex-col justify-center md:flex-row md:justify-between space-y-10">
      <div className="space-y-3">
        <h1 className="text-8xl primary-text font-bold">Dylan Hearn</h1>
        <h2 className="subheading">Front-end Developer</h2>
        <div className="flex space-x-6">
          <a href="https://github.com/DylanHearn1" target="_blank">
            <img
              src={githubLogo}
              alt="github logo"
              height="50px"
              width="50px"
              className="brightness-0"
            />
          </a>
          <a href="#">
            <img
              src={linkedinLogo}
              alt="linkin logo"
              height="50px"
              width="50px"
              className="brightness-0"
            />
          </a>
        </div>
      </div>
      <div>
        <SecondaryButton
          name="Contact"
          onclick={() => alert('clicked')}
          margin="mr-5 mb-4"
        />
        <MainButton name="Download CV" onclick={() => alert('clicked')} />
      </div>
    </div>
  );
};

export default Homepage;
