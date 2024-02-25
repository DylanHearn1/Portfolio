import venture from './../../assets/Capture.png';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import venturegif from './../../assets/venturegif.gif';
import trackerpng from './../../assets/tracker.png';
import macroGif from './../../assets/macro.gif';
import chef from './../../assets/homechef.png';
import chefgif from './../../assets/homechef.gif';

const Projects = () => {
  return (
    <div className="space-y-2">
      <div className="space-y-5">
        <h1 className="title dark:text-white">
          My <span className="bg-accent text-white px-2">projects</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-x-10 divide-y-2">
        <ProjectCard
          title="Venture Vision"
          description="This website was inspired for real estate agencies to showcase homes through 3D
          virtual tours. Using React, NodeJS and PostgreSQL I've created a straightforward,
          user-friendly interface with React-Router for an optimal browsing experience."
          liveLink="https://venture.dylanhearn.co.uk/"
          codeLink="https://github.com/DylanHearn1/Venture"
          image={venture}
          gif={venturegif}
        />
        <ProjectCard
          title="MacroStats"
          description="MacroStats is a robust and user-friendly web application built with React designed to help individuals monitor and manage their daily nutritional intake effortlessly. As the user adds food, the app shows the real-time progress of each macro."
          liveLink="https://macro-stats.vercel.app/"
          codeLink="https://macro.dylanhearn.co.uk/"
          image={trackerpng}
          gif={macroGif}
        />
        <ProjectCard
          title="Home Chef"
          description="Using Wordpress, advanced custom fields (ACF's) and custom posts. I've created a site which showcases meals, intended to be cooked at home. The ACF's allow the meals, ingredients and difficulty to be rendered dynamicly."
          liveLink=""
          codeLink="https://github.com/DylanHearn1/WP-Menu-Theme"
          image={chef}
          gif={chefgif}
        />
      </div>
    </div>
  );
};

export default Projects;
