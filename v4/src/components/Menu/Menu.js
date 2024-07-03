import styles from "./Menu.module.sass";
import iconFacebook from "../../common/icons/icons8-facebook.svg";
import iconLinkedin from "../../common/icons/icons8-linkedin.svg";
import iconTwitter from "../../common/icons/icons8-twitterx.svg";
import iconGithub from "../../common/icons/icons8-github.svg";
import iconEmail from "../../common/icons/icons8-gmail.svg";
import { ReactSVG } from "react-svg";

export const Menu = ({activeSection, onSectionClick}) => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={`${activeSection === 0 ? styles.active : ""}`}
                    onClick={() => onSectionClick(0)}>
                    <h3>
                        About
                    </h3>
                </li>
                <li className={`${activeSection === 1 ? styles.active : ""}`}
                    onClick={() => onSectionClick(1)}>
                    <h3>
                        Projects
                    </h3>
                </li>
                <li>
                    <a href="https://www.facebook.com/puscaru.vlad.1/" target={"_blank"}>
                        <ReactSVG src={iconFacebook}/>
                    </a>
                    <a href="https://twitter.com/vcpuscaru" target={"_blank"}>
                        <ReactSVG src={iconTwitter}/>
                    </a>
                    <a href="https://www.linkedin.com/in/vlad-cristian-puscaru-2399b6123/" target={"_blank"}>
                        <ReactSVG src={iconLinkedin}/>
                    </a>
                    <a href="https://github.com/vladpuscaru" target={"_blank"}>
                        <ReactSVG src={iconGithub}/>
                    </a>
                    <a href="mailto:vlad.cpuscaru@gmail.com" target={"_blank"}>
                        <ReactSVG src={iconEmail}/>
                    </a>
                </li>
            </ul>
        </nav>
    );
};