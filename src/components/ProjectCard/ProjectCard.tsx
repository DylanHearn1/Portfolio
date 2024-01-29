import MainAnchor from '../Anchor/MainAnchor';
import SecondaryAnchor from '../Anchor/SecondaryAnchor';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  gif: string;
  liveLink: string;
  codeLink: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  liveLink,
  codeLink,
  gif,
}: ProjectCardProps) => {
  return (
    <div className="flex space-y-5 col-span-2 items-center gap-10 even:flex-row-reverse">
      <div className="shadow-xl relative overflow-hidden rounded-lg w-1/2">
        <img
          src={image}
          alt="Project screenshot"
          width={'100%'}
          className="absolute hover:opacity-0 ease duration-500 rounded-xl"
          loading="lazy"
        />
        <img
          src={gif}
          alt="Project screenshot"
          width={'100%'}
          className="rounded-xl"
          loading="lazy"
        />
      </div>
      <div className="w-1/2 space-y-5">
        <h2 className="subheading">{title}</h2>
        <p className="opacity-75">{description}</p>
        <div className="flex space-x-5">
          <SecondaryAnchor name="Code" link={codeLink} />
          <MainAnchor name="Live site" link={liveLink} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
