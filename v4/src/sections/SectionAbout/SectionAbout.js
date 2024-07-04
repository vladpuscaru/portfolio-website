import styles from "./SectionAbout.module.sass";
import { Section } from "../../components/Section/Section";
import githubAvatar from "../../common/images/github_avatar.jpeg";
import { education } from "../../data/resume/education";
import { affiliations } from "../../data/resume/affiliations";
import { experience } from "../../data/resume/experience";
import { Parser } from "html-to-react";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import DownloadButton from "../../components/DownloadButton/DownloadButton";

/**
 * https://mui.com/material-ui/react-tabs/
 */

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{paddingLeft: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export const SectionAbout = ({active}) => {
    const parser = new Parser();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <Section active={active}>
            <div className={styles.header}>

                <div className={styles.top}>
                    <div className={styles.avatar}>
                        <img src={githubAvatar} alt={"Github Avatar"}/>
                    </div>

                    <div className={styles.info}>
                        <h3>Software Developer</h3>
                        <p>5+ years of demonstrated experience in building custom enterprise solutions</p>
                    </div>
                </div>

                <DownloadButton/>

            </div>

            <Box
                sx={{flexGrow: 1, display: 'flex'}}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{borderRight: 1, borderColor: 'divider'}}
                >
                    <Tab sx={{color: "#ffffff"}} label="Experience" {...a11yProps(0)} />
                    <Tab sx={{color: "#ffffff"}} label="Education" {...a11yProps(1)} />
                    <Tab sx={{color: "#ffffff"}} label="Affiliations" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <div className={styles.experience}>

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
                                                skill.icon ?
                                                    <img className={styles.icon} src={skill.icon} alt={skill.text}/>
                                                    :
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
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className={styles.education}>
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
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className={styles.affiliations}>
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
                    </div>
                </TabPanel>
            </Box>
        </Section>
    );
}