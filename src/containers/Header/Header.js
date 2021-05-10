import { React, Component } from "react";
import { ReactComponent as Logo } from "../../data/images/Logo-1.svg";
import styles from "./Header.module.sass";

import Appear from "../../components/Appear/Appear";

export default class Header extends Component {
	render() {
		return (
			<header className={styles.header}>
				<Appear sourceDirection="up">
					<Logo className={styles.logo} />
				</Appear>
			</header>
		);
	}
}
