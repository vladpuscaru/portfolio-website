import { React } from "react";
import CountUp from "react-countup";
import styles from "./Count.module.sass";

const Count = (props) => {
	const { number, name } = props;

	return (
		<div>
			<div className={styles.number}>
				<CountUp start={0} end={number} delay={0.75} duration={1.5} />
			</div>
			<span className={styles.name}>
				{name.map((n, index) => (
					<div key={index}>
						{n}
						<br />
					</div>
				))}
			</span>
		</div>
	);
};

export default Count;
