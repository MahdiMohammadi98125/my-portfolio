import { projectsData } from "@/lib/data";
import Project from "./Project";
import SectionHeading from "./SectionHeading";

const Projects = () => {
  return (
    <article>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </article>
  );
};

export default Projects;
