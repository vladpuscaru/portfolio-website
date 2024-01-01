import styles from "./Menu.module.sass"
import iconFacebook from "../../common/images/icons8-facebook.svg";
import iconTwitter from "../../common/images/icons8-twitterx.svg";
import iconLinkedin from "../../common/images/icons8-linkedin.svg";
import iconGithub from "../../common/images/icons8-github.svg";
import { ReactSVG } from "react-svg";

const Menu = ({activeSection, onMenuItemClick}) => {
    return (
        <nav className={`${styles.menu} ${activeSection === -1 ? styles.active : ""}`}>
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
                <a href="#">
                    <ReactSVG src={iconFacebook}/>
                </a>
                <a href="#">
                    <ReactSVG src={iconTwitter}/>
                </a>
                <a href="#">
                    <ReactSVG src={iconLinkedin}/>
                </a>
                <a href="#">
                    <ReactSVG src={iconGithub}/>
                </a>
            </div>
            <div onClick={() => onMenuItemClick(-1)}
                 className={`${styles.back} ${activeSection !== -1 ? styles.active : ""}`}>
                <a href="#">x</a>
            </div>

            <div className={styles.shapeMobileTop}></div>
            <div className={styles.shapeMobileRight}></div>
            <div className={styles.shapeMobileBottom}></div>
            <div className={styles.shapeMobileLeft}></div>
        </nav>
    )
}

export default Menu;