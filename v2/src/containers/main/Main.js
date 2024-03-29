import styles from "./Main.module.sass"
import Avatar from "../../components/avatar/Avatar";
import Menu from "../../components/menu/Menu";
import { useEffect, useState } from "react";
import SectionAbout from "../sections/sectionAbout/SectionAbout";
import SectionResume from "../sections/sectionResume/SectionResume";
import SectionProjects from "../sections/sectionProjects/SectionProjects";
import avatar from "../../images/avatar.png";
import { getProjects, getProjectTitle } from "../../data/projects/projects";

const sections = [
    {text: "About"},
    {text: "Projects"},
    {text: "Resume"},
    {text: "Blog", blocked: true},
]

const Main = ({ selectedProject, onBackClick }) => {

    const [activeSection, setActiveSection] = useState(-1);
    const [activeProject, setActiveProject] = useState(-1);

    useEffect(() => {
        if (selectedProject !== null) {
            setActiveSection(1);
            setActiveProject(selectedProject.id);
        }
    }, [selectedProject]);

    const onMenuItemClick = (index) => {
        if (index === -1 && activeProject !== -1) {
            setActiveProject(-1);
        } else {
            setActiveSection(index);
        }
        onBackClick();
    }

    const onProjectItemClick = (idx) => {
        setActiveProject(idx);
    }

    return (
        <div className="container">
            <main className={`${styles.main}`}>
                <div className={styles.mainAvatarSection}>
                    <Avatar path={avatar}/>
                </div>
                <div className={styles.mainContentSection}>
                    <Menu
                        isBreadcrumb={activeSection !== -1}
                        sections={sections}
                        activeSection={activeSection}
                        breadcrumb={activeProject !== -1 ? getProjectTitle(activeProject) : null}
                        onMenuItemClick={onMenuItemClick}/>
                    <SectionAbout active={activeSection === 0}/>
                    <SectionProjects active={activeSection === 1} activeProjectId={activeProject} onProjectItemClick={onProjectItemClick} />
                    <SectionResume active={activeSection === 2}/>
                </div>
                <div className={styles.shadow}></div>
            </main>
        </div>
    )
        ;
}

export default Main;