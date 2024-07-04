import styles from "./SectionProjects.module.sass";
import { Section } from "../../components/Section/Section";
import { getProjects } from "../../data/projects";
import { ProjectCardList } from "../../components/ProjectCardList/ProjectCardList";

export const SectionProjects = ({active}) => {
    const projects = getProjects();

    return (
        <Section active={active}>
            <div className={styles.header}>
                <p>This is a list with some of the latest projects/prototypes which I have worked on</p>
                <p>The list is curated so that it showcase my determination, passion, skills and knowledge, relevant
                    to a position as a programmer for game engine/graphics/game systems and tools.
                </p>
            </div>
            <ProjectCardList projects={projects} />
        </Section>
    );
}