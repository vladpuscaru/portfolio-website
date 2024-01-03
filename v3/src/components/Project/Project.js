import styles from "./Project.module.sass"

const Project = ({ project, active }) => {
    return (
        <div className={`${styles.project} ${ active ? styles.active : "" }`}>
            <div className={styles.header}>
                <h1>{ project.title }</h1>
                <img src={project.thumbnail} />
            </div>

            <div className={styles.main}>
                Project main
            </div>

            <div className={styles.footer}>
                Project footer
            </div>
        </div>
    )
}

export default Project;