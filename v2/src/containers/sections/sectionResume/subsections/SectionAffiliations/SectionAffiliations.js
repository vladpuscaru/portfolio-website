import styles from "./SectionAffiliations.module.sass"

const SectionAffiliations = ({active, affiliations}) => {
    return active ? (
        <section className={styles.affiliations}>
            Affiliations
        </section>
    ) : ""
}

export default SectionAffiliations;