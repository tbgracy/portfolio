import SectionTitle from "../SectionTitle";

import projects from "../../data/projects.json";

import projectIcon from "../../assets/customIcons/projects.png";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import Filter from "./components/Filter";
import { useTranslation } from "react-i18next";

export default function ProjectSection() {
    const [filterTags, setFilterTags] = useState<string[]>([]);
    const { t } = useTranslation();

    let projectElements: JSX.Element[];

    if (filterTags.length === 0) {
        projectElements = projects.map((project, i) => {
            return <ProjectCard key={i} project={project} />;
        })

    } else {
        const filteredProjects = projects.filter(project => {
            for (const stack of project.stack) {
                if (filterTags.includes(stack)) {
                    return true;
                }
            }
            return false;
        })

        projectElements = filteredProjects.map((project, i) => {
            return <ProjectCard key={i} project={project} />;
        })
    }

    return (
        <section id="projects">
            <SectionTitle icon={projectIcon} value={t('stuff-i-made')} />
            <h3>{t("all-projects")}</h3>
            <Filter filterTags={filterTags} setFilterTags={setFilterTags} />
            <article id="project-container">
                {projectElements}
            </article>
        </section>
    );
}
