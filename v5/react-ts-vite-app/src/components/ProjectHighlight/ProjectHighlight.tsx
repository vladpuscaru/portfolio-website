import styles from "./ProjectHighlight.module.sass";
import type { Project } from "../../common/types.ts";

interface ProjectHighlightProps {
	project: Project
}

const ProjectHighlight = (props: ProjectHighlightProps) => {
	const {project} = props;

	return <>
		<div className={styles.ProjectHighlight}>

			<h1>Latest Project</h1>

			<div className={styles.container}>
				<img src={project.thumbnail} alt={project.title}/>

				<div className={styles.info}>
					<h2>{project.title}</h2>
					<p>{project.slug}</p>
				</div>
			</div>

		</div>
	</>
}

export default ProjectHighlight;