import { React, useState } from "react";
import styles from "./Folder.module.sass";
import { ReactComponent as Icon } from "../../data/images/ic_under_construction.svg";
import FolderImage from "../../data/images/folder.svg";
import FolderStroke from "../../data/images/Stroke.svg";

const Folder = (props) => {
	// eslint-disable-next-line
	const [isHovered, setIsHovered] = useState(false);
	const { path, sub, link, active } = props;

	return (
		<a
			className={active ? styles.Folder : styles.InactiveFolder}
			href={link}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			target="_blank"
			rel="noreferrer">
			<img src={FolderImage} alt="" />
			<img className={styles.stroke} src={FolderStroke} alt="" />
			<div className={styles.icon}>
				<Icon />
			</div>
			<div className={styles.info}>
				<span className={styles.sup}>GO TO</span>
				<span className={styles.path}>{path}</span>
				<span className={styles.sub}>{sub}</span>
			</div>
		</a>
	);
};

export default Folder;
