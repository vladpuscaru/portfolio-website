import styles from "./PageHome.module.sass";
import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";
import LogoEconowind from "../../assets/images/logo_econowind.svg";
import LogoUU from "../../assets/images/logo_uu.png";
import avatar from "../../assets/images/avatar.png";

const PageHome = () => {
	return (
		<div className={styles.PageHome}>
			<div className={styles.Sections}>
				{/* LEFT: Studying */}
				<motion.div
					className={styles.SectionLeft}
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<h1>Studying at</h1>
					<a href="#" className={styles.img}>
						<p className={styles.Subtitle}>Game and Media Technology</p>
						<img src={LogoUU} alt="Utrecht University Logo" />
					</a>
				</motion.div>

				{/* CENTER: Avatar */}
				<div className={styles.Center}>
					<motion.div
						className={styles.Avatar}
						initial={{ opacity: 0, scale: 0.8, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
					>
						<img src={avatar} alt="Avatar" />
					</motion.div>
				</div>

				{/* RIGHT: Working */}
				<motion.div
					className={styles.SectionRight}
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<h1>Working at</h1>
					<a href="#" className={styles.img}>
						<p className={styles.Subtitle}>Software Architect & Developer</p>
						<ReactSVG
							src={LogoEconowind}
							beforeInjection={(svg) => {
								svg.classList.add("svg-class-name");
								svg.setAttribute("style", "width: 280px");
							}}
						/>
					</a>
				</motion.div>
			</div>

			{/* INFO SECTION */}
			<motion.div
				className={styles.Info}
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
			>
				<p>
					<strong>Hi! I'm Vlad</strong>
					<br />
					I’m a Software Engineer with over six years of experience in software development, now eager to focus my career on game development.
				</p>
			</motion.div>
		</div>
	);
};

export default PageHome;
