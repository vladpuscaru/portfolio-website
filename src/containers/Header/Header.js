import { React, Component } from "react";
import { ReactComponent as Logo } from "../../data/images/Logo-1.svg";
import styles from "./Header.module.sass";

import Appear from "../../components/Appear/Appear";

export default class Header extends Component {
	render() {
		return (
			<header className={styles.header}>
				<Appear sourceDirection="up">
					<a href="http://cd-21.com">
						<Logo className={styles.logo} />
						<span>cd-21.com</span>
					</a>
				</Appear>
			</header>
		);
	}
}
