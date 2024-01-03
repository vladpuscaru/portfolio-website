import styles from "./SectionResume.module.sass"
import { useState } from "react";
import SectionExperience from "./subsections/SectionExperience/SectionExperience";
import SectionEducation from "./subsections/SectionEducation/SectionEducation";
import SectionAffiliations from "./subsections/SectionAffiliations/SectionAffiliations";
import icDownload from "../../common/images/ic_download.svg";
import { experience } from "../../common/data/resume/experience";
import { affiliations } from "../../common/data/resume/affiliations";
import { education } from "../../common/data/resume/education";
import { ReactSVG } from "react-svg";

const SectionResume = ({ active }) => {
    const [activeSection, setActiveSection] = useState(0);

    const onListItemClick = (idx) => {
        setActiveSection(idx);
    }

    return (
        <section className={`${styles.resume} ${ active ? styles.active : "" }`}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h2>Software Developer</h2>
                    <span>Specialised in web development with the aim of transitioning to game/engine programming</span>
                </div>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
                    sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit
                    amet lorem ipsum dolor sit amet
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
                    <a className={styles.download}>
                        <ReactSVG src={icDownload}/>
                        PDF
                    </a>
                </div>
                <div className={`${styles.section} scrollable`}>
                    <SectionExperience active={activeSection === 0} experience={experience}/>
                    <SectionEducation active={activeSection === 1} education={education}/>
                    <SectionAffiliations active={activeSection === 2} affiliations={affiliations}/>
                </div>
            </div>
        </section>
    )
}

export default SectionResume;