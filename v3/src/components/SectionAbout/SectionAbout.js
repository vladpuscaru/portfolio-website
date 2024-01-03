import styles from "./SectionAbout.module.sass"

const SectionAbout = ({ active }) => {
    return (
        <section className={`${styles.about} ${ active ? styles.active : "" }`}>
            About
        </section>
    )
}

export default SectionAbout;