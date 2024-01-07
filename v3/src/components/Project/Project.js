import styles from "./Project.module.sass"
import { Parser } from "html-to-react";
import { ReactSVG } from "react-svg";
import icGithub from "../../common/images/icons8-github.svg";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Gallery } from "react-grid-gallery";

const Project = ({project, active}) => {
    const [open, setOpen] = useState(false);

    const images = project.images.map(img => ({
        src: img,
        original: img,
        width: 1080,
        height: 720,
        caption: project.title
    }));

    const handleClick = (index, item) => setOpen(true);

    const parser = new Parser();

    return (
        <div className={`${styles.project} ${active ? styles.active : ""}`}>
            <div className={styles.header} style={{backgroundImage: `url(${project.thumbnail})`}}>
                <div className={styles.inner}>
                    <div className={styles.tags}>
                        {
                            project.tags.map((tag, idx) => (
                                <span key={idx}>{tag}</span>
                            ))
                        }
                    </div>
                    <h1>{project.title}</h1>
                    <div className={styles.technologies}>
                        {
                            project.technologies.map((tech, idx) => (
                                <span key={idx} className={styles.technology}>
                                {tech.text}
                            </span>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.description}>
                    {parser.parse(project.description)}
                </div>
                {
                    images && images.length > 0 ?
                        <div>
                            <Gallery
                                images={images}
                                onClick={handleClick}
                                enableImageSelection={false}
                            />
                            {
                                <Lightbox
                                    open={open}
                                    close={() => setOpen(false)}
                                    slides={images}
                                />
                            }
                        </div>
                        :
                        ""
                }
            </div>

            <div className={styles.footer}>
                <h1>Check it on
                    <a href={project.github} target={"_blank"}>
                        <ReactSVG src={icGithub}/>
                    </a>
                </h1>
            </div>
        </div>
    )
}

export default Project;