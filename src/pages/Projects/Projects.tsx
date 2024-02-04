import venture from './../../assets/Capture.png';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import venturegif from './../../assets/venturegif.gif';
import trackerpng from './../../assets/tracker.png';
import macroGif from './../../assets/macro.gif';

const Projects = () => {
  return (
    <div className="space-y-2">
      <div className="space-y-5 w-1/2">
        <h1 className="title dark:text-white">
          My <span className="primary">projects</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-x-10 divide-y-2">
        <ProjectCard
          title="Venture Vision"
          description="This website is for real estate agencies to showcase homes through 3D
          virtual tours. Using React, I've created a straightforward,
          user-friendly interface for an optimal browsing experience."
          liveLink="https://venture-delta.vercel.app/"
          codeLink="https://github.com/DylanHearn1/Venture"
          image={venture}
          gif={venturegif}
        />
        <ProjectCard
          title="MacroStats"
          description="MacroStats is a robust and user-friendly web application designed to help individuals monitor and manage their daily nutritional intake effortlessly. As the user adds food, the app shows the real-time progress of each macro."
          liveLink="https://macro-stats.vercel.app/"
          codeLink="https://github.com/DylanHearn1/MacroStats"
          image={trackerpng}
          gif={macroGif}
        />
        <ProjectCard
          title="MacroStats"
          description="During"
          liveLink="https://venture-delta.vercel.app/"
          codeLink="https://github.com/DylanHearn1/Venture"
          image={venture}
          gif={venturegif}
        />
      </div>
    </div>
  );
};

export default Projects;
