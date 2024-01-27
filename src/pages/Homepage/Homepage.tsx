import MainButton from '../../components/Button/Button';
import SecondaryButton from '../../components/Button/Secondary';
import githubLogo from './../../assets/githubLogo.png';
import linkedinLogo from './../../assets/linkdedinLogo.png';

const Homepage = () => {
  return (
    <div className="h-dvh items-center flex justify-between">
      <div className="space-y-3">
        <h1 className="text-8xl primary-text font-bold">Dylan Hearn</h1>
        <h2 className="subheading">Front-end Developer</h2>
        <div className="flex space-x-6">
          <a href="#">
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
      <div className="space-x-6">
        <SecondaryButton name="Download CV" onclick={() => alert('clicked')} />
        <MainButton name="Contact" onclick={() => alert('clicked')} />
      </div>
    </div>
  );
};

export default Homepage;
