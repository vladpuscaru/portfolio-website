import styles from "./SectionEducation.module.sass"
import { Parser } from "html-to-react";

const SectionEducation = ({active, education}) => {
    const parser = new Parser();

    return active ? (
        <section className={styles.education}>
            {
                education.map((ed, idx) => (
                    <div key={idx} className={styles.item}>
                        <div className={styles.company}>
                            <div className={styles.title}>
                                <h3>{ed.university.name}</h3>
                                <h4>{ed.degree} - <span>{ed.university.faculty}</span></h4>
                                <div className={styles.date}>
                                    <p>{ed.startDate} - {ed.endDate}</p>
                                </div>
                                <p className={styles.description}>{parser.parse(ed.description)}</p>
                            </div>
                            <div className={styles.logo}>
                                <img src={ed.university.logo}/>
                            </div>
                        </div>


                    </div>
                ))
            }
        </section>
    ) : ""
}

export default SectionEducation;