import { React } from "react";
import styles from "./Appear.module.sass";

const Appear = (props) => {
	const { sourceDirection } = props;

	return <div className={styles[sourceDirection]}>{props.children}</div>;
};

export default Appear;
