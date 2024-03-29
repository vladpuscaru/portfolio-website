import styles from "./Menu.module.sass";
import { ReactSVG } from "react-svg";
import SocialLinks from "../SocialLinks/SocialLinks";
import { getProjects } from "../../common/data/projects";
import icBack from "../../common/images/ic_back.svg";
import { Fragment } from "react";
import me1 from "../../common/images/me_1.png";

const Menu = ({active, activeSection, activeProject, mobile, onMenuItemClick}) => {
    return (
        <nav className={`${styles.menu} ${active ? styles.active : ""}`}>
            <div onClick={() => onMenuItemClick(0)}
                 className={`${styles.cell} ${activeSection === 0 ? styles.active : ""}`}>
                <a href={`${mobile ? "#about" : ""}`}>about</a>
            </div>
            <div onClick={() => onMenuItemClick(1)}
                 className={`${styles.cell} ${activeSection === 1 ? styles.active : ""}`}>
                <div className={styles.shape}></div>
                <a href={`${mobile ? "#projects" : ""}`}>projects</a>
            </div>
            <div onClick={() => onMenuItemClick(2)}
                 className={`${styles.cell} ${activeSection === 2 ? styles.active : ""}`}>
                <div className={styles.shape}></div>
                <a href={`${mobile ? "#resume" : ""}`}>resume</a>
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
                        <div className={styles.back} onClick={() => onMenuItemClick(1)}>
                            <ReactSVG src={icBack}/>
                            <h1>All Projects</h1>
                        </div>
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

            <div className={styles.avatar}>
                <img src={me1}/>
            </div>
        </nav>
    )
}

export default Menu;