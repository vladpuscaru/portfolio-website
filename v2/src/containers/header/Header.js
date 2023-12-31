import styles from "./Header.module.sass"
import iconLinkedin from "../../images/ic_linkedin.svg";
import iconMail from "../../images/ic_mail.svg";

const Header = () => {

    const mail = "vlad.cpuscaru@gmail.com";

    return (
        <div className="container">
            <header className={styles.header}>
                <a href={"#"}>
                    <img src={iconLinkedin}/>
                </a>

                <a className={styles.contactLink} mailto={mail}>
                    <img src={iconMail}/>
                    <span className={styles.contact}>Contact</span>
                </a>
            </header>

        </div>
    );
}

export default Header;