import { React } from "react";
import styles from "./CTAButton.module.sass";

const CTAButton = (props) => {
	const { text, hover, link } = props;

	return (
		<a
			className={styles.CTAButton}
			href={link}
			target="_blank"
			rel="noreferrer">
			<span className={styles.hover}>{hover}</span>
			<span className={styles.text}>{text}</span>
		</a>
	);
};

export default CTAButton;
