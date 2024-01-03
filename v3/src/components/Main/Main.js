import styles from "./Main.module.sass"
import avatarImg from "../../common/images/avatar.png";
import SectionAbout from "../SectionAbout/SectionAbout";
import SectionProjects from "../SectionProjects/SectionProjects";
import SectionResume from "../SectionResume/SectionResume";

const Main = ({active, activeSection, activeProject, onProjectItemClick}) => {
    return <main className={`${styles.main} ${active ? styles.active : ""}`}>
        <div className={`${styles.container} container`}>
            <div className={styles.avatar}>
                <img src={avatarImg}/>
            </div>
            <div className={`${styles.content}`}>
                <SectionAbout active={activeSection === 0}/>
                <SectionProjects active={activeSection === 1} activeProject={activeProject}
                                 onProjectItemClick={onProjectItemClick}/>
                <SectionResume active={activeSection === 2}/>
            </div>
        </div>
    </main>
}

export default Main;