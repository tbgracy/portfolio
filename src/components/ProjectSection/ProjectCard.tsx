import { FaGithub } from "react-icons/fa";
import StackSet from "./StackSet";
import Project from "./type";
import { useTranslation } from "react-i18next";

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation();
  const isPrivate = Boolean(project.private);

  return (
    <article className="project-card">
      <h3>{project.name}</h3>
      <div className="project-img-container">
        <img loading="lazy" src={project.image ?? "/placeholder.png"} />
      </div>
      <p>{project.description}</p>
      <div className="footer">
        <StackSet data={project.stack} />
        <ul className="links">
          <li
            title={isPrivate ? t("private-repo") : "Lien github"}
            className={isPrivate ? "private" : ""}
          >
            {isPrivate ? (
              <FaGithub />
            ) : (
              <a href={project.github} target="_blank">
                <FaGithub />
              </a>
            )}
          </li>
        </ul>
      </div>
    </article>
  );
}
