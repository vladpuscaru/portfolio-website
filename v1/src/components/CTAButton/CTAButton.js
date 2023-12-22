import {React, useState} from "react";
import styles from "./CTAButton.module.sass";

const CTAButton = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const {icon, hover, link} = props;

    return (
        <a
            className={styles.CTAButton}
            href={link}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            target="_blank"
            rel="noreferrer">
            <img src={icon} alt={""}/>
            <span className={styles.hover}>{hover}</span>
        </a>
    );
};

export default CTAButton;
