import { React, useState } from "react";
import styles from "./FloatingButton.module.sass";
import { ReactComponent as DocumentIcon } from "../../data/images/ic_document.svg";
import { ReactComponent as DownloadIcon } from "../../data/images/ic_download.svg";

const FloatingButton = (props) => {
	const [isHovered, setIsHovered] = useState(false);
	const { sup, txt, link } = props;

	return (
		<a
			className={styles.FloatingButton}
			href={link}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			target="_blank"
			rel="noreferrer">
			<div className={styles.info}>
				<span className={styles.sup}>{sup}</span>
				<span className={styles.txt}>{txt}</span>
			</div>

			<div className={styles.icon}>
				{isHovered ? <DownloadIcon /> : <DocumentIcon />}
			</div>
		</a>
	);
};

export default FloatingButton;
