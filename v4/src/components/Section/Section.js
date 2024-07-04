import styles from "./Section.module.sass";

export const Section = ({ children, active }) => {
    return (
      <section className={`${styles.section} ${active ? styles.active : ""}`}>
          <div className={`${styles.container} container`}>
              {children}
          </div>
      </section>
    );
}