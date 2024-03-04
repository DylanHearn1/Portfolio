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
    <div className="md:flex gap-10 space-y-16 md:space-y-0">
      <div className="md:w-1/2 space-y-5">
        <h2 className="title my-3 dark:text-white md:text-start">
          <span className="bg-accent px-2 text-white">About</span> me
        </h2>
        <div className="shadow-xl rounded-xl hover:shadow-2xl ease-in-out duration-300 px-4 py-4 dark:hover:shadow-blue-500">
          <p className="dark:text-white/80">
            Hi, I'm a motivated <strong className="accent ">Front-end </strong>{' '}
            Developer seeking a<strong className="accent"> junior </strong>{' '}
            position to break into the industry. I've worked on multiple
            personal projects with React, NodeJS and Tailwind. I am confident in
            converting design concepts into clean, modern user interfaces and I
            am excited to integrate with and contribute to a great team.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 space-y-5">
        <h2 className="title my-3 dark:text-white md:text-start">
          My <span className="bg-accent px-2 text-white">skills</span>
        </h2>
        <div className=" shadow-xl hover:shadow-2xl ease-in-out duration-300 rounded-xl px-4 py-4 space-y-5 dark:hover:shadow-blue-500">
          <p className="dark:text-white/80">
            Proficient in
            <strong className="accent"> Typescript</strong>,
            <strong className="accent"> Javascript</strong>,
            <strong className="accent"> SCSS</strong>,
            <strong className="accent"> Git</strong>,
            <strong className="accent"> React</strong> and
            <strong className="accent"> Tailwind CSS</strong>, with knowledge of
            <strong className="accent"> NodeJS </strong>&
            <strong className="accent"> PHP</strong>, I thrive in collaborative
            environments, ensuring code quality and responsiveness.
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
