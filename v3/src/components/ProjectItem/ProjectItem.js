import styles from "./ProjectItem.module.sass"
import icGithub from "../../common/images/icons8-github.svg"
import { ReactSVG } from "react-svg";

// {
//     "id": 0,
//     "title": "Mario Clone",
//     "technologies": [technologies.CPP, technologies.SFML],
//     "github": "google.com",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     "slug": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     "thumbnail": MarioCloneImg,
//     "tags": [tags.GAME]
// },

const ProjectItem = ({project, inversed, onClick}) => {
    return (
        <div className={`${styles.projectItem} ${ inversed ? styles.inversed : "" }`} onClick={onClick}>
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
                    <p>{project.description}</p>
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