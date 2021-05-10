import { React, Component } from "react";
import styles from "./Footer.module.sass";

import Appear from "../../components/Appear/Appear";

export default class Footer extends Component {
	render() {
		return (
			<footer className={styles.footer}>
				<Appear sourceDirection="down">
					<p>Copyright &copy; 2021 cd-21.com. All rights reserved.</p>
				</Appear>
			</footer>
		);
	}
}
