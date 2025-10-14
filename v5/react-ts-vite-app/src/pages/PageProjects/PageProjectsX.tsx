import SearchBar from "../../components/SearchBar/SearchBar.tsx";
import styles from "./PageProjectsX.module.sass";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../../common/types.ts";
import { Link } from "react-router";
import { useState, useEffect, useMemo } from "react";
import { technologies } from "../../assets/data/projects";
import { BASE_PATH } from "../../assets/data";

interface PageProjectsProps {
	projects: Project[];
	highlight: Project;
}

const PageProjects = ({ projects, highlight }: PageProjectsProps) => {
	const [count, setCount] = useState(6);
	const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
	const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
	const [searchedText, setSearchedText] = useState("");

	// 🧠 Filter projects by selected technologies (all must match)
	const filteredProjects = useMemo(() => {
		let x = projects;
		if (searchedText !== "") {
			x = projects.filter(p => p.title.toLowerCase().includes(searchedText.toLowerCase()));
		}

		if (selectedTechs.length !== 0) {
			x = x.filter((p) =>
				selectedTechs.every((tech) =>
					p.technologies.map(t => t.text).includes(technologies[tech].text)
				)
			);
		}

		return x;
	}, [projects, selectedTechs, searchedText]);

	useEffect(() => {
		setVisibleProjects(filteredProjects.slice(0, count));
	}, [count, filteredProjects]);

	const toggleTech = (key: string) => {
		setSelectedTechs((prev) =>
			prev.includes(key) ? prev.filter((t) => t !== key) : [...prev, key]
		);
	};

	const fadeUp = {
		hidden: { opacity: 0, y: 30 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: count > 8 ? 0 : i * 0.1,
				duration: 0.45,
				ease: "easeOut",
			},
		}),
		exit: { opacity: 0, y: 20, transition: { duration: 0.25 } },
	};

	return (
		<div className={styles.PageProjects}>
			<div className={styles.projectsContainer}>

				{/* 🌟 Featured Project */}
				<motion.section
					className={styles.sectionWrapper}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
					}}
				>
					<h2 className={styles.sectionTitle}>Latest Project</h2>

					<motion.div
						className={styles.highlightContent}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<motion.img
							src={highlight.thumbnail}
							alt={highlight.title}
							className={styles.highlightImage}
							loading="lazy"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.6 }}
						/>

						<div className={styles.highlightInfo}>
							<h3>{highlight.title}</h3>
							<div className={styles.highlightTags}>
								{highlight.tags.map((tag, idx) => (
									<motion.span
										key={idx}
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: idx * 0.05 }}
									>
										{tag}
									</motion.span>
								))}
							</div>
							<motion.p
								className={styles.highlightDescription}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.2 }}
							>
								{`${highlight.description.slice(0, 197)}...`}
							</motion.p>

							{/* 🎮 Play + ℹ️ More Info Buttons */}
							<div className={styles.highlightButtons}>
								{highlight.link && (
									<motion.a
										href={highlight.link}
										target="_blank"
										rel="noopener noreferrer"
										className={`${styles.highlightBtn} ${styles.playBtn}`}
										whileHover={{ scale: 1.07 }}
										whileTap={{ scale: 0.96 }}
									>
										🎮 Play on Itch.io
									</motion.a>
								)}

								<motion.div
									whileHover={{ scale: 1.07 }}
									whileTap={{ scale: 0.96 }}
								>
									<Link
										to={`${BASE_PATH}/projects/${highlight.id}`}
										className={`${styles.highlightBtn} ${styles.infoBtn}`}
									>
										ℹ️ More Info
									</Link>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</motion.section>

				{/* 🔍 Search + Filters */}
				<motion.section
					className={styles.sectionWrapper}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<h2 className={styles.sectionTitle}>All Projects</h2>
					<SearchBar onValueChanged={(v) => setSearchedText(v)} />

					{/* 🎯 Multi-select Filters */}
					<div className={styles.filtersContainer}>
						{Object.entries(technologies).map(([key, tech]) => {
							const active = selectedTechs.includes(key);
							return (
								<motion.button
									key={key}
									onClick={() => toggleTech(key)}
									className={`${styles.filterBtn} ${active ? styles.activeFilter : ""}`}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									style={{
										borderColor: tech.color,
										backgroundColor: active ? tech.color : "transparent",
										color: active ? "#fff" : tech.color,
									}}
								>
									{tech.icon && (
										<img
											src={tech.icon}
											alt={tech.text}
											className={styles.techIcon}
										/>
									)}
									{tech.text}
								</motion.button>
							);
						})}
					</div>
				</motion.section>

				{/* 🧱 Projects Feed */}
				<section className={styles.sectionWrapper}>
					<motion.div className={styles.projectsFeed} initial="hidden" animate="visible">
						<AnimatePresence>
							{visibleProjects.map((project, idx) => (
								<motion.div
									key={project.id}
									className={styles.projectContainer}
									custom={idx}
									variants={fadeUp}
									initial="hidden"
									animate="visible"
									exit="exit"
									layout
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<Link
										to={`${BASE_PATH}/projects/${project.id}`}
										style={{
											backgroundImage: `url(${project.thumbnail})`,
											backgroundSize: "cover",
											backgroundPosition: "center",
											backgroundRepeat: "no-repeat",
										}}
									>
										<div className={styles.projectInfo}>
											<h3>{project.title}</h3>
											<div>
												{project.tags.map((t, tagIdx) => (
													<span key={tagIdx}>{t}</span>
												))}
											</div>
										</div>
									</Link>
								</motion.div>
							))}
						</AnimatePresence>
					</motion.div>

					{/* 🔘 Show More */}
					{visibleProjects.length < filteredProjects.length && (
						<motion.button
							onClick={() => setCount(count + 4)}
							className={styles.showMoreBtn}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
						>
							Show More
						</motion.button>
					)}
				</section>
			</div>
		</div>
	);
};

export default PageProjects;
