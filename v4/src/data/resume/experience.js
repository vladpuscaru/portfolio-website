import { technologies } from "../projects";
import logoEPAM from "../../common/icons/logo_epam.png";
import logoMetawander from "../../common/icons/logo_metawander.png";
import logoDeloitte from "../../common/icons/logo_deloitte.png";
import logoQuart from "../../common/icons/logo_quart.svg";

export const experience = [
    {
        company: {
            name: "EPAM Systems",
            logo: logoEPAM
        },
        startDate: "April 2022",
        endDate: "August 2023",
        time: "1 year 4 months",
        position: "Software Developer",
        type: "Contractor",
        skills: [technologies.NODEJS, technologies.TYPESCRIPT, technologies.JAVASCRIPT, technologies.AWS, technologies.REACTJS],
        description:
            "<ul>" +
            "<li>Building solutions and conducting maintenance for one of the biggest video game companies in the world (Epic Games)</li>" +
            "<li><strong>Leading</strong> a team of 5 developers</li>" +
            "<li>Being a <strong>mentor</strong> and <strong>technology expert</strong></li>" +
            "</ul>"
    },
    {
        company: {
            name: "MetaWander",
            logo: logoMetawander
        },
        startDate: "April 2022",
        endDate: "June 2022",
        time: "3 months",
        position: "Game Developer",
        type: "Contractor",
        skills: [technologies.UNITY, technologies.CSHARP],
        description:
            "<ul>" +
            "<li>Building a <strong>Virtual Reality</strong> video game for an upcoming cryptocurrency</li>" +
            "<li>Creating and managing multiple aspects of game development (<strong>gameplay</strong>, <strong>networking</strong>, avatar rigging and animation)</li>" +
            "</ul>"
    },
    {
        company: {
            name: "Deloitte Digital",
            logo: logoDeloitte
        },
        startDate: "April 2020",
        endDate: "April 2022",
        type: "Employee",
        time: "2 years",
        position: "Software Developer",
        skills: [technologies.NODEJS, technologies.TYPESCRIPT, technologies.JAVASCRIPT, technologies.AWS, technologies.JAVA, technologies.SPRINGBOOT, technologies.DOCKER],
        description:
            "<ul>" +
            "<li>Key developer in one of the impactful projects at a national level - COVID-19 digital solution for the National Health Service (NHS) UK</li>" +
            "<li><strong>Leading</strong> a team of 7 developers</li>" +
            "</ul>"
    },
    {
        company: {
            name: "Quart Creative Agency",
            logo: logoQuart
        },
        startDate: "September 2018",
        endDate: "March 2019",
        type: "Employee",
        position: "Software Developer",
        skills: [technologies.NODEJS, technologies.JAVASCRIPT, technologies.HTML, technologies.CSS, technologies.WORDPRESS, technologies.PHP],
        description:
            "<ul>" +
            "<li>Delivering custom web solutions, based on given design mock-ups</li>" +
            "<li>Creating in-house tools used by the entire team</li>" +
            "</ul>"
    },
]