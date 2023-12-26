import styles from "./SectionExperience.module.sass"

const SectionExperience = ({active, experience}) => {
    return active ? (
        <section className={styles.experience}>
            Experience
        </section>
    ) : ""
}

export default SectionExperience;