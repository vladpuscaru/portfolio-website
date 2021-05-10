import { React, useState } from "react";
import styles from "./CTAButton.module.sass";

const CTAButton = (props) => {
	const [isHovered, setIsHovered] = useState(false);
	const { text, hover, link } = props;

	return (
		<a
			className={styles.CTAButton}
			href={link}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			target="_blank"
			rel="noreferrer">
			{isHovered ? (
				<span className={styles.hover}>{hover}</span>
			) : (
				<span className={styles.text}>{text}</span>
			)}
		</a>
	);
};

export default CTAButton;
