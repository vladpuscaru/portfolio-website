import styles from "./SectionEducation.module.sass"

const SectionEducation = ({active, education}) => {
    return active ? (
        <section className={styles.education}>
            Education
        </section>
    ) : ""
}

export default SectionEducation;