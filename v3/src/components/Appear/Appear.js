import styles from "./Appear.module.sass";

const Appear = ({ sourceDirection, className, children }) => {
	return (
		<div className={styles[sourceDirection] + " " + className}>
			{children}
		</div>
	);
};

export default Appear;
