import styles from "./SectionProjects.module.sass"
import { ProjectList } from "../ProjectList/ProjectList";
import { useEffect, useState } from "react";
import { getProjects, getTags } from "../../common/data/projects";
import Project from "../Project/Project";
import Appear from "../Appear/Appear";
import App from "../../App";

const SectionProjects = ({active, activeProject, onProjectItemClick}) => {
    const [data, setData] = useState({
        filters: {
            text: "",
            tags: getTags().map(t => ({active: false, text: t}))
        },
        projects: getProjects()
    });

    const {filters, projects} = data;

    useEffect(() => {
        updateProjects();
    }, [filters]);

    const updateProjects = () => {
        setData({
            ...data,
            projects: getProjects(filters.text, filters.tags.filter(t => t.active).map(t => t.text))
        });
    }

    const onTagClick = (tag) => {
        setData({
            ...data,
            filters: {
                ...filters,
                tags: filters.tags.map(t => ({active: t.text === tag.text ? !t.active : t.active, text: t.text}))
            }
        });
    }

    const onTextChange = (e) => {
        setData({
            ...data,
            filters: {
                ...filters,
                text: e.target.value
            }
        });
    }

    return (
        <section id={"projects"} className={`${styles.projects} ${active ? styles.active : ""}`}>
            <div className={`${styles.header} ${activeProject === -1 ? styles.active : ""}`}>
                <Appear sourceDirection={"up"}>
                    <div className={styles.title}>
                        <h2>A work in progress</h2>
                    </div>
                </Appear>
                <Appear sourceDirection={"left"}>
                    <p className={styles.description}>
                        Most of my work over the years has been mainly back-end web development. As such, my portfolio
                        section can be thought as rather 'bland'
                        and small.
                        Nevertheless, in the last months since I've become a student once again, I had the time to work
                        on
                        game prototypes that may give you
                        an insight of my skills and knowledge.
                        <br/>
                        Here they are!
                    </p>
                </Appear>
            </div>
            <div className={styles.main}>
                <div className={`${styles.filters} ${activeProject === -1 ? styles.active : ""}`}>
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
                <div className={`${styles.content}`}>
                    <ProjectList active={activeProject === -1} projects={projects}
                                 onProjectItemClick={onProjectItemClick}/>

                    {
                        projects.map((project, idx) => (
                            <Project active={activeProject === idx} project={project}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default SectionProjects;