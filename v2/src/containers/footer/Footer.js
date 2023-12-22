import styles from "./Footer.module.sass"
import Thumbnail from "../../components/thumbnail/Thumbnail";
import project1 from "../../images/p1.gif";
import project2 from "../../images/p2.gif";
import GithubFeed from "../../components/githubfeed/GithubFeed";

const Footer = () => {

    const onProjectClick = () => {

    }

    return (
        <div className="container">
            <footer className={styles.footer}>
                <Thumbnail text={"Project 1"} image={project1} onClick={onProjectClick}/>
                <Thumbnail text={"Project 2"} image={project2} onClick={onProjectClick}/>
                <GithubFeed />
            </footer>
        </div>
)
    ;
}

export default Footer;