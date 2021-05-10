import { React, Component } from "react";
import { ReactComponent as Logo } from "../../data/images/Logo-1.svg";
import styles from "./Header.module.sass";

export default class Header extends Component {
	render() {
		return (
			<header className={styles.header}>
				<Logo className={styles.logo} />
			</header>
		);
	}
}
