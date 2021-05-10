import { React, Component } from "react";
import styles from "./Profile.module.sass";

import FloatingButton from "../../components/FloatingButton/FloatingButton";

import Img from "../../data/images/Img_container.png";

export default class Profile extends Component {
	render() {
		const { btnSup, btnTxt, btnLink } = this.props;

		return (
			<div className={styles.profile}>
				<img src={Img} alt="" />
				<FloatingButton sup={btnSup} txt={btnTxt} link={btnLink} />
			</div>
		);
	}
}
