import styles from "./SectionAffiliations.module.sass"
import { Parser } from "html-to-react";

const SectionAffiliations = ({active, affiliations}) => {
    const parser = new Parser();

    return active ? (
        <section className={styles.affiliations}>
            {
                affiliations.map((af, idx) => (
                    <div key={idx} className={styles.item}>
                        <div className={styles.company}>
                            <div className={styles.title}>
                                <h3>{af.club.name}</h3>
                                <h4>{af.position}</h4>
                                <div className={styles.date}>
                                    <p>{af.startDate} - {af.endDate}</p>
                                </div>
                                <p className={styles.description}>{parser.parse(af.description)}</p>
                            </div>
                            <div className={styles.logo}>
                                <img src={af.club.logo}/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    ) : ""
}

export default SectionAffiliations;