import styles from "./Avatar.module.sass"

const Avatar = ({ path }) => {
    return (
        <div className={styles.avatar}>
            <img src={path} alt={"avatar"}/>
        </div>
    )
}

export default Avatar;