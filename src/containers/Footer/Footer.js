import { React, Component } from "react";
import styles from "./Footer.module.sass";

export default class Footer extends Component {
	render() {
		return (
			<footer className={styles.footer}>
				<p>Copyright &copy; 2021 cd-21.com. All rights reserved.</p>
			</footer>
		);
	}
}
