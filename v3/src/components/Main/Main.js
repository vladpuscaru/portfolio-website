import styles from "./Main.module.sass"
import avatarImg from "../../common/images/avatar.png";
import SectionAbout from "../SectionAbout/SectionAbout";
import SectionProjects from "../SectionProjects/SectionProjects";
import SectionResume from "../SectionResume/SectionResume";

const Main = ({active, mobile, activeSection, activeProject, onProjectItemClick, onMenuItemClick}) => {
    return <main className={`${styles.main} ${active ? styles.active : ""}`}>
        <div className={`${styles.container} container`}>

            {
                mobile && activeProject !== -1 ? ""
                    :
                    <div className={styles.avatar}>
                        <img src={avatarImg}/>
                    </div>
            }

            <div className={`${styles.content}`}>
                {
                    mobile && activeProject !== -1 ? ""
                        :
                        <SectionAbout active={activeSection === 0} onMenuItemClick={onMenuItemClick}/>
                }
                <SectionProjects active={activeSection === 1} activeProject={activeProject}
                                 onProjectItemClick={onProjectItemClick}/>

                {
                    mobile && activeProject !== -1 ? ""
                        :
                        <SectionResume active={activeSection === 2} mobile={mobile}/>
                }
            </div>

            <div className={styles.shadow}></div>
        </div>
    </main>
}

export default Main;