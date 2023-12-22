import styles from "./SectionResume.module.sass"

const SectionResume = ({active}) => {
    return active ?
        <div className={styles.resume}>
            resume
        </div>
        :
        ""
}

export default SectionResume;