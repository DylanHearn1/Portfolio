import reactlogo from './../../assets/reactlogo.png';
import tslogo from './../../assets/tslogo.png';
import sasslogo from './../../assets/sasslogo.png';
import twlogo from './../../assets/twlogo.png';
import gitlogo from './../../assets/gitlogo.png';

const AboutMe = () => {
  const skills = [
    {
      skill: 'React',
      icon: reactlogo,
    },
    {
      skill: 'Typescript',
      icon: tslogo,
    },
    {
      skill: 'SASS',
      icon: sasslogo,
    },
    {
      skill: 'Tailwind',
      icon: twlogo,
    },
    {
      skill: 'Git',
      icon: gitlogo,
    },
  ];

  return (
    <div className="md:flex gap-10 space-y-10">
      <div className="md:w-1/2">
        <div className="shadow-xl rounded-xl hover:shadow-2xl ease-in-out duration-300 px-5 py-4 dark:hover:shadow-blue-500">
          <h2 className="title my-3 dark:text-white">
            <span className="primary">About</span> me
          </h2>
          <p className="dark:text-white dark:opacity-100">
            Hi, I'm a motivated <strong className="primary">Front-end </strong>{' '}
            Developer seeking a<strong className="primary"> junior </strong>{' '}
            position to break into the industry passionate about crafting
            seamless user experiences. Proficient in
            <strong className="primary"> Typescript</strong>,{' '}
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
        <div className=" shadow-xl hover:shadow-2xl ease-in-out duration-300 rounded-xl px-5 py-4 space-y-5 dark:hover:shadow-blue-500">
          <h2 className="title my-3 dark:text-white">
            My <span className="primary">skills</span>
          </h2>
          <p className="dark:text-white dark:opacity-100">
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
