import styles from "./ProjectList.module.sass"
import ProjectItem from "../ProjectItem/ProjectItem";

export const ProjectList = ({active, projects, onProjectItemClick}) => {
    return (
        <div className={`${styles.projectList} ${active ? styles.active : ""}`}>
            {
                projects.map((project, idx) => (
                    <ProjectItem key={project.id} project={project} inversed={idx % 2 !== 0} onClick={() => onProjectItemClick(idx)} />
                ))
            }
        </div>
    )
}