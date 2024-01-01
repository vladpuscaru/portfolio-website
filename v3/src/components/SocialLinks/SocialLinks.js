import styles from "./SocialLinks.module.sass"
import { ReactSVG } from "react-svg";
import iconFacebook from "../../common/images/icons8-facebook.svg";
import iconTwitter from "../../common/images/icons8-twitterx.svg";
import iconLinkedin from "../../common/images/icons8-linkedin.svg";
import iconGithub from "../../common/images/icons8-github.svg";

const SocialLinks = () => {
    return <div className={styles.social}>
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
}

export default SocialLinks;