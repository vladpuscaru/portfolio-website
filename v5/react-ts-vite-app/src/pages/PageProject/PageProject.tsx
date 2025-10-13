import { useParams } from "react-router";
import styles from "./PageProject.module.sass";
import type { Project } from "../../common/types.ts";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

interface PageProjectProps {
	projects: Project[];
}

const PageProject = ({ projects }: PageProjectProps) => {
	const { projectId } = useParams();
	const project = projects.find((p) => p.id === Number(projectId));
	const [open, setOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);

	if (!project) {
		return <div className={styles.notFound}>Project not found.</div>;
	}

	const slides = project.images.map((img) => ({ src: img }));

	return (
		<div className={styles.PageProjectDetail}>
			{/* LEFT: IMAGES */}
			<div className={styles.imageSection}>
				<motion.img
					src={project.thumbnail}
					alt={project.title}
					className={styles.mainImage}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6 }}
					onClick={() => {
						setPhotoIndex(0);
						setOpen(true);
					}}
				/>

				{/* IMAGE GRID */}
				<div className={styles.imageGrid}>
					{project.images.map((img, i) => (
						<img
							key={i}
							src={img}
							alt={`${project.title} ${i}`}
							className={styles.thumbnail}
							onClick={() => {
								setPhotoIndex(i);
								setOpen(true);
							}}
						/>
					))}
				</div>
			</div>

			{/* RIGHT: INFO */}
			<motion.div
				className={styles.infoSection}
				initial={{ x: 40, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<h1>{project.title}</h1>

				<div className={styles.technologies}>
					{project.technologies.map((tech, i) => (
						<span key={i}>{tech.text || tech}</span>
					))}
				</div>

				<p className={styles.description}>{project.slug}</p>

				{project.github && (
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.githubLink}
					>
						View on GitHub
					</a>
				)}

				<div className={styles.tags}>
					{project.tags.map((t, i) => (
						<span key={i}>{t}</span>
					))}
				</div>

				<Link to="/projects" className={styles.backLink}>
					← Back to Projects
				</Link>
			</motion.div>

			{/* LIGHTBOX */}
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				index={photoIndex}
				slides={slides}
				carousel={{ finite: true }}
			/>
		</div>
	);
};

export default PageProject;
