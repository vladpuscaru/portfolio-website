import styles from "./SectionProjects.module.sass"
import { useEffect, useState } from "react";
import { getProjects, getTags } from "../../../data/projects/projects";
import ProjectList from "../../../components/projectList/ProjectList";
import Project from "../../project/Project";

const SectionProjects = ({active, activeProjectId, onProjectItemClick}) => {
    const [projects, setProjects] = useState(getProjects());
    const [filters, setFilters] = useState({
        tags: getTags().map(t => ({text: t, active: false})),
        text: ""
    });

    useEffect(() => {
        updateProjects();
    }, [filters]);

    const onTextChange = (e) => {
        setFilters({
            ...filters,
            text: e.target.value
        });
    }

    const onTagClick = (tag) => {
        setFilters({
            ...filters,
            tags: filters.tags.map(t => t.text === tag.text ? {...tag, active: !tag.active} : t)
        });
    }

    const updateProjects = () => {
        setProjects(getProjects(filters.text, filters.tags.filter(t => t.active).map(t => t.text)));
    }

    return active ?
        <div className={styles.projects}>
            {
                activeProjectId !== -1 ? "" :
                    <div className={styles.filters}>
                        <input type="text" name="text" id="text" value={filters.text} onChange={onTextChange}
                               placeholder="Search ..."/>
                        <div className={styles.tags}>
                            {
                                filters.tags.map((tag, idx) => (
                                    <div
                                        key={idx}
                                        className={`${styles.tag} ${tag.active ? styles.active : ""}`}
                                        onClick={() => onTagClick(tag)}>
                                        {tag.text}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            }

            <div className={styles.content}>
                <ProjectList projects={projects}
                             activeProjectId={activeProjectId}
                             onProjectClick={onProjectItemClick}/>
                {
                    projects.map(project => (
                        <Project
                            key={project.id}
                            projectData={project}
                            active={activeProjectId === project.id}
                        />
                    ))
                }
            </div>
        </div>
        :
        ""
}

export default SectionProjects;