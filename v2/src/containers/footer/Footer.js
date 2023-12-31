import styles from "./Footer.module.sass"
import GithubFeed from "../../components/githubfeed/GithubFeed";

const Footer = ({ project, projectClicked, onProjectClick }) => {
    return (
        <div className="container">
            <footer className={styles.footer}>
                <div onClick={projectClicked ? () => {} : onProjectClick} className={`${styles.project} ${projectClicked ? styles.disabled : ""}`}>
                    <img src={project.thumbnail} />
                </div>

                <GithubFeed/>
            </footer>
        </div>
    )
        ;
}

export default Footer;