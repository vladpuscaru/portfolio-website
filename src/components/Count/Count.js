import { React } from "react";
import styles from "./Count.module.sass";

const Count = (props) => {
	const { number, name } = props;

	return (
		<div>
			<div className={styles.number}>{number}</div>
			<span className={styles.name}>{name}</span>
		</div>
	);
};

export default Count;
