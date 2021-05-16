import { React } from "react";
import styles from "./Appear.module.sass";

const Appear = (props) => {
	const { sourceDirection, className } = props;

	return (
		<div className={styles[sourceDirection] + " " + className}>
			{props.children}
		</div>
	);
};

export default Appear;
