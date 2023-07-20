import { FaGithub, FaArrowRight } from "react-icons/fa";
import StackSet from "./StackSet";

type Project = {
    name: string,
    image: string,
    github: string,
    description: string,
    stack: Array<string>,
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="project-card">
            <h3>{project.name}</h3>
            <div className="project-img-container">
                <img src={project.image} />
            </div>
            <p>{project.description}</p>
            <div className="footer">
                <StackSet data={project.stack} />
                <ul className="project__links">
                    <li title="Voir détails"><a href="#"><FaArrowRight /></a></li>
                    <li title="Lien github"><a href={project.github}><FaGithub /></a></li>
                </ul>
            </div>
        </article>
    );
}