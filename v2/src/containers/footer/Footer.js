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
                Footer
            </footer>
        </div>
)
    ;
}

export default Footer;