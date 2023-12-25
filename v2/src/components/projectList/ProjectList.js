import styles from "./ProjectList.module.sass"
import ProjectItem from "../projtectItem/ProjectItem";

const ProjectList = ({projects, activeProjectId, onProjectClick}) => {
    return (
        <div className={styles.projectList}>
            {
                projects.map((project, idx) => (
                    <ProjectItem
                        key={idx}
                        onClick={() => onProjectClick(project.id)}
                        onDisplay={activeProjectId === project.id}
                        hidden={activeProjectId !== -1}
                        title={project.title}
                        thumbnail={project.thumbnail}
                        slug={project.slug}
                        technologies={project.technologies}
                    />
                ))
            }
        </div>
    )
}

export default ProjectList;