import styles from "./SectionProjects.module.sass";
import { Section } from "../../components/Section/Section";
import { getProjects } from "../../data/projects";
import { ProjectCardList } from "../../components/ProjectCardList/ProjectCardList";

export const SectionProjects = ({active}) => {
    const projects = getProjects();

    // "id": 0,
    //     "title": "Super Mario Bros. (Clone)",
    //     "technologies": [technologies.CPP, technologies.SFML],
    //     "github": "https://github.com/vladpuscaru/showcase.mario",
    //     "description": "" +
    // "" +
    // "",
    //     "slug": "A classic NES game programmed in C++, using the SFML library and a custom-built engine based on ECS.",
    //     "thumbnail": p10,
    //     "images": [p13, p11, p12, p10, p14],
    //     "tags": [tags.GAME]

    return (
        <Section active={active}>
            <ProjectCardList projects={projects} />
        </Section>
    );
}