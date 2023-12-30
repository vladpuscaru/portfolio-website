import styles from "./ProjectItem.module.sass"
import Project from "../../containers/project/Project";

const ProjectItem = ({title, thumbnail, slug, technologies, onDisplay, hidden, onClick}) => {
    return (
        <div
            className={`${styles.projectItem} ${hidden && !onDisplay ? styles.hidden : ""} ${onDisplay ? styles.onDisplay : ""}`}
            onClick={onClick}>
            <div className={styles.thumbnail}>
                <img src={thumbnail} alt={"projectImg"}/>
            </div>
            <div className={styles.meta}>
                <div className={styles.description}>
                    <h2>{title}</h2>
                    <p>{slug}</p>
                </div>
                <div className={styles.technologies}>
                    {technologies.map((technology, idx) => (
                        <div
                            key={idx}
                            className={styles.technology}
                            style={{backgroundColor: technology.color, border: `1px solid ${technology.color}`}}>
                            {technology.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;