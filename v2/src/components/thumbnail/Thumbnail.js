import styles from "./Thumbnail.module.sass"

const Thumbnail = ({image, text, onClick}) => {
    return (
        <div className={styles.thumbnail}>
            <div className={styles.image}>
                <img src={image} alt={"image"}/>
            </div>
            <div className={styles.inner}>
                <h2>{text}</h2>
            </div>
        </div>
    )
}

export default Thumbnail;