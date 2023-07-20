import SectionTitle from "../SectionTitle";

import projects from "../../data/projects.json";

import projectIcon from "../../assets/customIcons/projects.png";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
    const projectElements = projects.map((project) => {
        return <ProjectCard project={project}/>;
    })

    return (
        <section id="projects">
            <SectionTitle icon={projectIcon} value="Stuff I made"/>
            <article id="project-container">
                {projectElements}
            </article>
        </section>
    );
}