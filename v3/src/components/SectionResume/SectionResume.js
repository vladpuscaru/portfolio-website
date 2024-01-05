import styles from "./SectionResume.module.sass"
import { useState } from "react";
import SectionExperience from "./subsections/SectionExperience/SectionExperience";
import SectionEducation from "./subsections/SectionEducation/SectionEducation";
import SectionAffiliations from "./subsections/SectionAffiliations/SectionAffiliations";
import { experience } from "../../common/data/resume/experience";
import { affiliations } from "../../common/data/resume/affiliations";
import { education } from "../../common/data/resume/education";
import DownloadButton from "../DownloadButton/DownloadButton";
import me1 from "../../common/images/me_0.png";

const SectionResume = ({active, mobile}) => {
    const [activeSection, setActiveSection] = useState(0);

    const onListItemClick = (idx) => {
        setActiveSection(idx);
    }

    return (
        <section id={"resume"} className={`${styles.resume} ${active ? styles.active : ""}`}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h2>Software Developer</h2>
                    <span>Specialised in web development with the aim of transitioning to game/engine programming</span>
                </div>
                <p className={styles.description}>
                    I am a Software Engineer from Romania with <strong>5+ years of experience</strong> and demonstrated
                    abilities in multiple areas of development.
                    <br/>
                    My main interests revolve
                    around <strong>web</strong>, <strong>cloud</strong> and <string>games</string> programming.
                </p>
            </div>
            <div className={styles.main}>
                <div className={styles.menu}>
                    <ul>
                        <li className={`${activeSection === 0 ? styles.active : ""}`}
                            onClick={() => onListItemClick(0)}>Experience
                        </li>
                        <li className={`${activeSection === 1 ? styles.active : ""}`}
                            onClick={() => onListItemClick(1)}>Education
                        </li>
                        <li className={`${activeSection === 2 ? styles.active : ""}`}
                            onClick={() => onListItemClick(2)}>Affiliations
                        </li>
                    </ul>
                    {
                        mobile ? <div className={styles.download}><DownloadButton/></div> : <div className={styles.avatar}><img src={me1} /></div>
                    }
                </div>
                <div className={`${styles.section}`}>
                    <SectionExperience active={activeSection === 0} experience={experience}/>
                    <SectionEducation active={activeSection === 1} education={education}/>
                    <SectionAffiliations active={activeSection === 2} affiliations={affiliations}/>
                </div>
            </div>
        </section>
    )
}

export default SectionResume;