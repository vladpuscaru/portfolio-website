import { React } from "react";
import styles from "./MatrixBackground.module.sass";

const MatrixBackground = (props) => {
	const { content } = props;
	let contentJSX = [];

	for (let i = 0; i < 2500; i++) {
		contentJSX.push(
			content.map((c, index) => <div key={i + index}>{c.toString()}</div>)
		);
	}

	return <div className={styles.MatrixBackground}>{contentJSX}</div>;
};

export default MatrixBackground;
