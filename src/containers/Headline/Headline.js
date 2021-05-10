import { React, Component } from "react";
import styles from "./Headline.module.sass";

import Count from "../../components/Count/Count";
import CTAButton from "../../components/CTAButton/CTAButton";

export default class Headline extends Component {
	constructor(props) {
		super();
		this.state = {
			title: props.title,
			info: props.info,
			counts: [...props.counts],
			image: props.image,
			ctabuttons: [...props.ctabuttons],
		};
	}

	render() {
		const { superscript, firstName, lastName } = this.state.title;
		const info = this.state.info;
		const counts = this.state.counts;
		const ctabuttons = this.state.ctabuttons;

		return (
			<div>
				<div className={styles.title}>
					<div className={styles.title__left}>
						<h3 className={styles.title__super}>{superscript}</h3>
						<h1 className={styles.title__firstName}>{firstName}</h1>
					</div>
					<div className={styles.title__right}>
						<h1 className={styles.title__lastName}>{lastName}</h1>
					</div>
				</div>

				<div className={styles.info}>
					<p>{info}</p>
				</div>

				<div className={styles.counts}>
					{counts.map((c, index) => (
						<Count number={c.number} name={c.name} key={index} />
					))}
				</div>

				<div className={styles.ctabuttons}>
					{ctabuttons.map((cta, index) => (
						<CTAButton
							text={cta.text}
							hover={cta.hover}
							link={cta.link}
							key={index}
						/>
					))}
				</div>
			</div>
		);
	}
}
