import styles from "./SectionAbout.module.sass"

const SectionAbout = ({ active }) => {
    return (
        <section id={"about"} className={`${styles.about} ${active ? styles.active : ""}`}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h2>Formerly a Team Lead, now back to being a student...</h2>
                    <span>My journey as I found my passion of programming, lost it, and now searching for it once again</span>
                </div>
            </div>
            <div className={styles.main}>

            </div>
        </section>
    )
}

export default SectionAbout;