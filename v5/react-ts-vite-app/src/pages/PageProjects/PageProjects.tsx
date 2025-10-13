import ProjectHighlight from "../../components/ProjectHighlight/ProjectHighlight.tsx";
import SearchBar from "../../components/SearchBar/SearchBar.tsx";
import useEmblaCarousel from 'embla-carousel-react'
import styles from "./PageProjects.module.sass";

import type { Project } from "../../common/types.ts";
import { Link } from "react-router";

const chunk = <T, >(arr: T[], size: number) =>
	Array.from({length: Math.ceil(arr.length / size)}, (_, i) =>
		arr.slice(i * size, i * size + size)
	)

interface PageProjectsProps {
	projects: Project[];
	highlight: Project;
}

const PageProjects = (props: PageProjectsProps) => {
	const {projects, highlight} = props;
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'start',
		dragFree: true
	});

	const columns = chunk(projects, 2) // each column will hold 2 projects

	return <>
		<div className={styles.PageProjects}>
			<ProjectHighlight project={highlight}/>

			<div className={styles.projectsContainer}>

				<SearchBar/>

				<section className={styles.projectsFeed}>
					<div className={styles.embla} ref={emblaRef}>
						<div className={styles.embla__container}>
							{columns.map((col, idx) => (
								<div key={idx} className={styles.embla__slide}>
									<div className={styles.projectColumn}>
										{col.map((project) => (
											<div key={project.id} className={styles.projectContainer}>
												<Link to={`/projects/${project.id}`}>
													<img src={project.thumbnail} alt={project.title}/>
												</Link>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

			</div>
		</div>
	</>
}

export default PageProjects;
