import venture from './../../assets/Capture.png';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import venturegif from './../../assets/venturegif.gif';
import benchmarkpng from './../../assets/benchmark.png';
import benchmarkgif from './../../assets/benchmark.gif';
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
      <div className="grid gap-x-10 divide-y-2">
        <ProjectCard
          title="Mind Benchmark"
          description="Designed for a seamless full-stack user experience with user authentication, built with React, ExpressJS and MongoDB. Mind benchmark is a way to test your cognitive ability and compare with real-time global scores."
          liveLink="https://benchmark.dylanhearn.co.uk/"
          codeLink="https://github.com/DylanHearn1/Benchmark"
          image={benchmarkpng}
          gif={benchmarkgif}
          extra="Username: Demo"
          extra2="Password: password"
        />
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
          title="Home Chef"
          description="Using PHP, I created a custom Wordpress theme featuring advanced custom fields (ACF's) and custom posts. The site showcases meals, ingredients delivered, intended to be cooked at home. The ACF's allow the meals, ingredients and difficulty to be rendered dynamically."
          liveLink="https://hellochef.org/"
          codeLink="https://github.com/DylanHearn1/WP-Menu-Theme"
          image={chef}
          gif={chefgif}
        />
      </div>
    </div>
  );
};

export default Projects;
