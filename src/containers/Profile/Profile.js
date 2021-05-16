import { React, Component } from "react";
import styles from "./Profile.module.sass";

import FloatingButton from "../../components/FloatingButton/FloatingButton";

import Appear from "../../components/Appear/Appear";

export default class Profile extends Component {
	render() {
		const { btnSup, btnTxt, btnLink, profileBg, profileImg, isMobile } = this.props;

		return (
			<div className={isMobile ? styles.mobileProfile : styles.profile}>
				<Appear className={styles.profileBg} sourceDirection="right">
					<img src={profileBg} alt="" />
				</Appear>

				<Appear className={styles.profileImg} sourceDirection="right">
					<img src={profileImg} alt="" />
				</Appear>

				<Appear sourceDirection="left">
					<FloatingButton sup={btnSup} txt={btnTxt} link={btnLink} fixed={isMobile} />
				</Appear>
			</div>
		);
	}
}
