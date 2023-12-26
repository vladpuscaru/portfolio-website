import styles from "./SectionResume.module.sass"
import { useState } from "react";
import SectionExperience from "./subsections/SectionExperience/SectionExperience";
import SectionEducation from "./subsections/SectionEducation/SectionEducation";
import SectionAffiliations from "./subsections/SectionAffiliations/SectionAffiliations";
import { experience } from "../../../data/resume/experience";
import { education } from "../../../data/resume/education";
import { affiliations } from "../../../data/resume/affiliations";
import icDownload from "../../../images/ic_download.svg";
import { ReactSVG } from "react-svg";

// {
//     company: {
//         name: "Freelancer",
//             logo: ""
//     },
//     startDate: "April 2022",
//         endDate: "Present",
//     position: "Software Developer",
//     skills: [technologies.NODEJS, technologies.UNITY, technologies.TYPESCRIPT, technologies.CPP, technologies.JAVASCRIPT, technologies.AWS, technologies.REACTJS, technologies.CSHARP],
//     description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."
// },

const SectionResume = ({active}) => {
    const [activeSection, setActiveSection] = useState(0);

    const onListItemClick = (idx) => {
        setActiveSection(idx);
    }

    return active ?
        <div className={styles.resume}>
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
                <div className={styles.section}>
                    <SectionExperience active={activeSection === 0} experience={experience}/>
                    <SectionEducation active={activeSection === 1} education={education}/>
                    <SectionAffiliations active={activeSection === 2} affiliations={affiliations}/>
                </div>
            </div>
        </div>
        :
        ""
}

export default SectionResume;