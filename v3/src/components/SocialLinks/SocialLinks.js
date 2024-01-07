import styles from "./SocialLinks.module.sass"
import { ReactSVG } from "react-svg";
import iconFacebook from "../../common/images/icons8-facebook.svg";
import iconTwitter from "../../common/images/icons8-twitterx.svg";
import iconLinkedin from "../../common/images/icons8-linkedin.svg";
import iconGithub from "../../common/images/icons8-github.svg";

const SocialLinks = () => {
    return <div className={styles.social}>
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
    </div>
}

export default SocialLinks;