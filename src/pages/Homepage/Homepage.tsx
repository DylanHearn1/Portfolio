import MainButton from '../../components/Button/Button';
import SecondaryButton from '../../components/Button/Secondary';

const Homepage = () => {
  return (
    <div className="h-dvh items-center flex justify-between">
      <div>
        <h1 className="text-8xl primary-text font-bold">Dylan Hearn</h1>
        <h2 className="text-4xl opacity-75 primary-text">
          Front-end Developer
        </h2>
      </div>
      <div>
        <SecondaryButton name="Download CV" onclick={() => alert('clicked')} />
        <MainButton name="Contact" onclick={() => alert('clicked')} />
      </div>
    </div>
  );
};

export default Homepage;
