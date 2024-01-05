import styles from "./ProjectItem.module.sass"
import icGithub from "../../common/images/icons8-github.svg"
import { ReactSVG } from "react-svg";
import Appear from "../Appear/Appear";

const ProjectItem = ({project, inversed, onClick}) => {
    return (
        <div className={`${styles.projectItem} ${inversed ? styles.inversed : ""}`} onClick={onClick}>
            <div className={styles.thumbnail}>
                <img src={project.thumbnail}/>
            </div>


            <div className={styles.content}>
                <div className={styles.title}>
                    <div className={styles.tags}>
                        {
                            project.tags.map((tag, idx) => (
                                <span key={idx}>{tag}</span>
                            ))
                        }
                    </div>
                    <h2>{project.title}</h2>
                </div>

                <div className={styles.description}>
                    <p>{project.slug}</p>
                </div>

                <div className={styles.technologies}>
                    {
                        project.technologies.map((tech, idx) => (
                            <span key={idx} className={styles.technology}>
                                {tech.text}
                            </span>
                        ))
                    }
                </div>

                <div className={styles.links}>
                    <a href={project.github} target={"_blank"}>
                        <ReactSVG src={icGithub}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;