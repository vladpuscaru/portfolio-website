import { React } from "react";
import Typing from "react-typing-animation";
import styles from "./PaceCover.module.sass";

const PaceCover = (props) => {
	const { content, onFinish } = props;

	return (
		<div className={styles.pace}>
			<Typing speed={75} onFinishedTyping={onFinish}>
				{content}
			</Typing>
		</div>
	);
};

export default PaceCover;
