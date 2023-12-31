import styles from "./Footer.module.sass"
import GithubFeed from "../../components/githubfeed/GithubFeed";

const Footer = () => {
    return (
        <div className="container">
            <footer className={styles.footer}>
                <div className={styles.left}>

                </div>

                <GithubFeed/>
            </footer>
        </div>
    )
        ;
}

export default Footer;