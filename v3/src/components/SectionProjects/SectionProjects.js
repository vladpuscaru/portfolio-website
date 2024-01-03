import styles from "./SectionProjects.module.sass"

const SectionProjects = ({ active }) => {
    return (
        <section className={`${styles.projects} ${ active ? styles.active : "" }`}>
            Projects
        </section>
    )
}

export default SectionProjects;