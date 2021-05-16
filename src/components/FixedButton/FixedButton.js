import { React, useState } from "react";
import styles from "./FixedButton.module.sass";

const FixedButton = (props) => {
    const { txt, link } = props;

    return (
        <a
            className={styles.FixedButton}
            href={link}
            target="_blank"
            rel="noreferrer">
            <div className={styles.info}>
                <span className={styles.txt}>{txt}</span>
            </div>
        </a>
    );
};

export default FixedButton;
