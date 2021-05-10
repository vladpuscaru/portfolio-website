import { React, Component } from "react";
import styles from "./Profile.module.sass";

import FloatingButton from "../../components/FloatingButton/FloatingButton";

import Img from "../../data/images/Img_container.png";
import Appear from "../../components/Appear/Appear";

export default class Profile extends Component {
	render() {
		const { btnSup, btnTxt, btnLink } = this.props;

		return (
			<div className={styles.profile}>
				<Appear sourceDirection="right">
					<img src={Img} alt="" />
				</Appear>

				<Appear sourceDirection="left">
					<FloatingButton sup={btnSup} txt={btnTxt} link={btnLink} />
				</Appear>
			</div>
		);
	}
}
