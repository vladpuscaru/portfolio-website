import styles from "./SectionExperience.module.sass"
import { Parser } from "html-to-react";

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

const SectionExperience = ({active, experience}) => {
    const parser = new Parser();

    return active ? (
        <section className={styles.experience}>
            {
                experience.map((exp, idx) => (
                    <div key={idx} className={styles.item}>

                        <div className={styles.row}>
                            <div className={styles.meta}>
                                <div className={styles.company}>
                                    <div className={styles.title}>
                                        <h3>{exp.company.name} - <span>{exp.position}</span></h3>
                                        <div className={styles.date}>
                                            <p>{exp.startDate} - {exp.endDate}</p>
                                        </div>
                                    </div>
                                </div>
                                <p className={styles.description}>{parser.parse(exp.description)}</p>
                            </div>

                            <div className={styles.logo}>
                                <img src={exp.company.logo}/>
                            </div>
                        </div>

                        <div className={styles.skills}>
                            {
                                exp.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className={styles.skill}
                                        style={{
                                            backgroundColor: skill.color,
                                            border: `1px solid ${skill.color}`
                                        }}>
                                        {skill.text}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </section>
    ) : ""
}

export default SectionExperience;