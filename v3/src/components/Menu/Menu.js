import styles from "./Menu.module.sass"
import iconFacebook from "../../common/images/icons8-facebook.svg";
import iconTwitter from "../../common/images/icons8-twitterx.svg";
import iconLinkedin from "../../common/images/icons8-linkedin.svg";
import iconGithub from "../../common/images/icons8-github.svg";
import { ReactSVG } from "react-svg";
import SocialLinks from "../SocialLinks/SocialLinks";
import { getProjects } from "../../common/data/projects";

const Menu = ({active, activeSection, activeProject, onMenuItemClick}) => {
    console.log(activeProject);
    return (
        <nav className={`${styles.menu} ${active ? styles.active : ""}`}>
            <div onClick={() => onMenuItemClick(0)}
                 className={`${styles.cell} ${activeSection === 0 ? styles.active : ""}`}>
                <a href="#">about</a>
            </div>
            <div onClick={() => onMenuItemClick(1)}
                 className={`${styles.cell} ${activeSection === 1 ? styles.active : ""}`}>
                <div className={styles.shape}></div>
                <a href="#">projects</a>
            </div>
            <div onClick={() => onMenuItemClick(2)}
                 className={`${styles.cell} ${activeSection === 2 ? styles.active : ""}`}>
                <div className={styles.shape}></div>
                <a href="#">resume</a>
            </div>
            <div className={styles.cell}>
                <div className={styles.shape2}></div>
                <div className={styles.shape}></div>
                <SocialLinks/>
            </div>

            {
                (active || activeProject === -1) ? ""
                    :
                    (
                        <h1>{getProjects()[activeProject].title}</h1>
                    )
            }

            <div onClick={() => onMenuItemClick()}
                 className={`${styles.burger} ${!active ? styles.active : ""}`}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={styles.shapeMobileTop}></div>
            <div className={styles.shapeMobileRight}></div>
            <div className={styles.shapeMobileBottom}></div>
            <div className={styles.shapeMobileLeft}></div>
        </nav>
    )
}

export default Menu;