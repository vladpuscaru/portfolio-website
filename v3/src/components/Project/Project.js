import styles from "./Project.module.sass"
import { Parser } from "html-to-react";
import { ReactSVG } from "react-svg";
import icGithub from "../../common/images/icons8-github.svg";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import { Gallery } from "react-grid-gallery";

const Project = ({project, active}) => {
    const [index, setIndex] = useState(-1);

    const images = project.images.map(img => ({
        src: img,
        original: img,
        width: 320,
        height: 180,
        caption: project.title
    }));

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index, item) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

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
                            {!!currentImage && (
                                <Lightbox
                                    enableZoom={false}
                                    mainSrc={currentImage.original}
                                    imageTitle={currentImage.caption}
                                    mainSrcThumbnail={currentImage.src}
                                    nextSrc={nextImage.original}
                                    nextSrcThumbnail={nextImage.src}
                                    prevSrc={prevImage.original}
                                    prevSrcThumbnail={prevImage.src}
                                    onCloseRequest={handleClose}
                                    onMovePrevRequest={handleMovePrev}
                                    onMoveNextRequest={handleMoveNext}
                                />
                            )}
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