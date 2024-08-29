import SectionTitle from "../SectionTitle";

import projects from "../../data/projects.json";
import i18n from "../../i18n";

import projectIcon from "../../assets/customIcons/projects.png";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import Filter from "./components/Filter";
import { useTranslation } from "react-i18next";
import Project from "./type";

export default function ProjectSection() {
  const [filterTags, setFilterTags] = useState<string[]>([]);
  const { t } = useTranslation();
  const currentLocal = i18n.language;
  const projectsWithCurrentLang: Project[] = projects.map((project) => {
    return {
      ...project,
      description: {
        fr: project.description.fr as string,
        en: project.description.en as string,
      }[currentLocal] as string,
    };
  });

  let projectElements: JSX.Element[];

  if (filterTags.length === 0) {
    projectElements = projectsWithCurrentLang.map((project, i) => {
      return <ProjectCard key={i} project={project} />;
    });
  } else {
    const filteredProjects = projectsWithCurrentLang.filter((project) => {
      for (const stack of project.stack) {
        if (filterTags.includes(stack)) {
          return true;
        }
      }
      return false;
    });

    projectElements = filteredProjects.map((project, i) => {
      return <ProjectCard key={i} project={project} />;
    });
  }

  return (
    <section id="projects">
      <SectionTitle icon={projectIcon} value={t("stuff-i-made")} />
      <Filter filterTags={filterTags} setFilterTags={setFilterTags} />
      <article id="project-container">{projectElements}</article>
    </section>
  );
}
