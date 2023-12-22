import styles from "./SectionProjects.module.sass"

const SectionProjects = ({active}) => {
    return active ?
        <div className={styles.projects}>
            project
        </div>
        :
        ""
}

export default SectionProjects;