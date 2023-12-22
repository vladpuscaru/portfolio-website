import { React, useState } from "react";
import styles from "./FloatingButton.module.sass";
import { ReactComponent as DocumentIcon } from "../../data/images/ic_document.svg";

const FloatingButton = (props) => {
	const { sup, txt, link, fixed } = props;

	return (
		<a
			className={fixed ? styles.FixedButton : styles.FloatingButton}
			href={link}
			target="_blank"
			rel="noreferrer">
			<div className={styles.info}>
				<span className={styles.sup}>{sup}</span>
				<span className={styles.txt}>{txt}</span>
			</div>

			<div className={styles.icon}>
				<DocumentIcon />
			</div>
		</a>
	);
};

export default FloatingButton;
