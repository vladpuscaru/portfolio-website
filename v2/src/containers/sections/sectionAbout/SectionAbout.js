import styles from "./SectionAbout.module.sass"

const SectionAbout = ({active}) => {
    return active ?
        <div className={styles.about}>
            <h1>Hi, I'm Vlad</h1>
            <p>I am a Software Developer</p>
        </div>
        :
        ""
}

export default SectionAbout;