import { FaGithub, FaArrowRight } from "react-icons/fa";
import StackSet from "./StackSet";
import Atropos from "atropos/react";

type Project = {
    name: string,
    image: string,
    github: string,
    description: string,
    stack: Array<string>,
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Atropos shadow={false}>
            <article className="project-card">
                <h3>{project.name}</h3>
                <div className="project-img-container">
                    <img src={project.image} />
                </div>
                <p>{project.description}</p>
                <div className="footer">
                    <StackSet data={project.stack} />
                    <ul className="links">
                        <li title="Voir détails"><a href="#"><FaArrowRight /></a></li>
                        <li title="Lien github"><a href={project.github} target="_blank"><FaGithub /></a></li>
                    </ul>
                </div>
            </article>
        </Atropos>
    );
}