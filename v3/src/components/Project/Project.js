import styles from "./Project.module.sass"
import { Parser } from "html-to-react";
import { ReactSVG } from "react-svg";
import icArrow from "../../common/images/ic_arrow.svg";
import icGithub from "../../common/images/icons8-github.svg";
import { useState } from "react";

// {
//     "id": 0,
//     "title": "Mario Clone",
//     "technologies": [technologies.CPP, technologies.SFML],
//     "github": "google.com",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     "slug": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     "thumbnail": MarioCloneImg,
// "images": [],
//     "tags": [tags.GAME]
// },

const Project = ({project, active}) => {
    const [gallery, setGallery] = useState({
        onDisplayIdx: project.images && project.images.length > 0 ? 0 : null,
        images: project.images && project.images.length > 0 ? project.images : null
    });
    const {onDisplayIdx, images} = gallery;
    const parser = new Parser();

    const onGalleryClick = (idx) => {
        if (images && images.length > 0) {
            if (idx > gallery.images.length - 1) {
                idx = 0;
            }

            if (idx < 0) {
                idx = gallery.images.length - 1;
            }

            setGallery({
                ...gallery,
                onDisplayIdx: idx
            });
        }
    }

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
                        <div className={styles.gallery}>
                            <div className={styles.onDisplay}>
                                <img src={images[onDisplayIdx]}/>
                                <div className={styles.controls}>
                                    <div className={styles.btnLeft} onClick={() => onGalleryClick(onDisplayIdx - 1)}>
                                        <ReactSVG src={icArrow}/>
                                    </div>
                                    <div className={styles.btnRight} onClick={() => onGalleryClick(onDisplayIdx + 1)}>
                                        <ReactSVG src={icArrow}/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.track}>
                                {
                                    images.map((img, idx) => (
                                        <div key={idx} className={`${styles.img} ${idx === onDisplayIdx ? styles.active : ""}`} onClick={() => onGalleryClick(idx)}>
                                            <img src={img}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        :
                        ""
                }
            </div>

            <div className={styles.footer}>
                <h1>Check it on
                    <a href={project.github} target={"_blank"}>
                        <ReactSVG src={icGithub} />
                    </a>
                </h1>
            </div>
        </div>
    )
}

export default Project;