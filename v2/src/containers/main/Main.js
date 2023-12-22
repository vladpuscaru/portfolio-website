import styles from "./Main.module.sass"
import Avatar from "../../components/avatar/Avatar";
import Menu from "../../components/menu/Menu";
import { useState } from "react";
import SectionAbout from "../sections/sectionAbout/SectionAbout";
import SectionResume from "../sections/sectionResume/SectionResume";
import SectionProjects from "../sections/sectionProjects/SectionProjects";
import MenuItem from "../../components/menuItem/MenuItem";
import iconResume from "../../images/icon_resume.svg";
import avatar from "../../images/avatar.png";

const Main = () => {

    const [activeSection, setActiveSection] = useState(-1);


    const onMenuitemClick = (index) => {
        setActiveSection(index);
    }

    return (
        <div className="container">
            <main className={`${styles.main} ${activeSection !== -1 ? styles.active : ""}`}>
                <div className={styles.mainAvatarSection}>
                    <Avatar path={avatar}/>
                </div>
                <div className={styles.mainContentSection}>
                    <SectionAbout active={activeSection === 0}/>
                    <SectionResume active={activeSection === 1}/>
                    <SectionProjects active={activeSection === 2}/>
                </div>
                <div className={styles.mainMenuAvatar}>
                    <Menu>
                        <MenuItem active={activeSection === 0} text={"About"} icon={iconResume}
                                  onClick={() => onMenuitemClick(0)}/>
                        <MenuItem active={activeSection === 1} text={"Resume"} icon={iconResume}
                                  onClick={() => onMenuitemClick(1)}/>
                        <MenuItem active={activeSection === 2} text={"Projects"} icon={iconResume}
                                  onClick={() => onMenuitemClick(2)}/>
                    </Menu>
                </div>
                <div className={styles.mainMenuSection}>
                    <Menu vertical={true}>
                        <MenuItem active={activeSection === 0} text={"About"} icon={iconResume}
                                  onClick={() => onMenuitemClick(0)}/>
                        <MenuItem active={activeSection === 1} text={"Resume"} icon={iconResume}
                                  onClick={() => onMenuitemClick(1)}/>
                        <MenuItem active={activeSection === 2} text={"Projects"} icon={iconResume}
                                  onClick={() => onMenuitemClick(2)}/>
                    </Menu>
                </div>
            </main>
        </div>
    )
        ;
}

export default Main;