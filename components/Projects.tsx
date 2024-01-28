"use client";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Project from "./Project";
import SectionHeading from "./SectionHeading";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <article className="scroll-mt-28" id="projects" ref={ref}>
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
