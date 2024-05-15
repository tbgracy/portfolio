import { FaGithub } from "react-icons/fa";
import StackSet from "./StackSet";
import Project from "./type";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="project-card">
            <h3>{project.name}</h3>
            <div className="project-img-container">
                <img loading="lazy" src={project.image} />
            </div>
            <p>{project.description}</p>
            <div className="footer">
                <StackSet data={project.stack} />
                <ul className="links">
                    <li title="Lien github"><a href={project.github} target="_blank"><FaGithub /></a></li>
                </ul>
            </div>
        </article>
    );
}