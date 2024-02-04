import reactLogo from './../../assets/reactlogo.png';
import tsLogo from './../../assets/tsLogo.png';
import sassLogo from './../../assets/sasslogo.png';
import twLogo from './../../assets/twlogo.png';
import gitLogo from './../../assets/githubLogo.png';

const AboutMe = () => {
  const skills = [
    {
      skill: 'React',
      icon: reactLogo,
    },
    {
      skill: 'Typescript',
      icon: tsLogo,
    },
    {
      skill: 'SASS',
      icon: sassLogo,
    },
    {
      skill: 'Tailwind',
      icon: twLogo,
    },
    {
      skill: 'Git',
      icon: gitLogo,
    },
  ];

  return (
    <div className="md:flex gap-10 space-y-10">
      <div className="md:w-1/2">
        <div className="shadow-xl rounded-xl px-5 py-4">
          <h2 className="title my-3 dark:text-white">
            <span className="primary">About</span> me
          </h2>
          <p className="dark:text-white">
            Hi, I'm a motivated <strong className="primary">Front-end </strong>{' '}
            Developer seeking a<strong className="primary"> junior </strong>{' '}
            position to break into the industry passionate about crafting
            seamless user experiences. Proficient in
            <strong className="primary opacity-100"> Typescript</strong>,{' '}
            <strong className="primary">Javascript</strong>,{' '}
            <strong className="primary">SCSS</strong>,{' '}
            <strong className="primary">Git</strong>, and experienced with
            <strong className="primary"> React</strong> and{' '}
            <strong className="primary">Tailwind CSS</strong>. I thrive in
            collaborative environments, ensuring code quality and
            responsiveness. Eager to contribute my skills and learn in a dynamic
            team.
          </p>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className=" shadow-xl rounded-xl px-5 py-4 space-y-5">
          <h2 className="title my-3 dark:text-white">
            My <span className="primary">skills</span>
          </h2>
          <p className="dark:text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ea,
            officia nemo in quaerat explicabo deleniti a! Ab quis libero dolore
            dolorem dolorum ad unde consectetur. Corrupti, aspernatur sunt!
            Odio.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2">
            {skills.map((skill, ind) => (
              <li className="flex items-center gap-5 mb-5" key={ind}>
                <img
                  src={skill.icon}
                  alt={`${skill} logo`}
                  width={'50px'}
                  className="rounded-lg"
                />
                <p className="dark:text-white"> {skill.skill}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
