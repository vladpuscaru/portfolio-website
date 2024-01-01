import styles from "./Footer.module.sass"
import sections from "../../common/data/sections";
import GithubFeed from "../GithubFeed/GithubFeed";
import SocialLinks from "../SocialLinks/SocialLinks";
import DownloadButton from "../DownloadButton/DownloadButton";

const Footer = ({active, activeSection, onMenuItemClick}) => {

    const sectionsRemaining = sections
        .map((s, idx) => ({...s, idx}))
        .filter((s, idx) => idx !== activeSection)

    return <footer className={`${styles.footer} ${active ? styles.active : ""}`}>
        <div className={`${styles.container} container`}>
            <div onClick={() => onMenuItemClick(sectionsRemaining[0].idx)} className={styles.menuButtonLeft}>
                <div className={styles.arrow}></div>
                <span>{sectionsRemaining[0].title}</span>
            </div>
            <div className={styles.middle}>
                {
                    activeSection === 0 ? <SocialLinks/>
                        : activeSection === 1 ? <GithubFeed/>
                            : activeSection === 2 ? <DownloadButton/>
                                : ""
                }
            </div>
            <div onClick={() => onMenuItemClick(sectionsRemaining[1].idx)} className={styles.menuButtonRight}>
                <span>{sectionsRemaining[1].title}</span>
                <div className={styles.arrow}></div>
            </div>
        </div>
    </footer>
}

export default Footer;