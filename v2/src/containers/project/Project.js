import styles from "./Project.module.sass"

const Project = ({projectData, active}) => {
    return (
        <div className={`${styles.project} ${active ? styles.active : ""}`}>
            <div className={styles.header}>
                {/*  This is just for spacing. The thumbnail from the list will come here  */}
                <div className={styles.thumbnailSpace}></div>
                <div className={styles.description}>
                    <h2>{projectData.title}</h2>
                </div>
            </div>
            <div className={styles.main}>
                <p>{projectData.description}</p>
            </div>
        </div>
    )
}

export default Project;