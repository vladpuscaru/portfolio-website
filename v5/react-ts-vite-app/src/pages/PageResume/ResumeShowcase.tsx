import { motion } from "framer-motion";
import { Download } from "lucide-react";
import styles from "./ResumeShowcase.module.sass";

interface LinkItem { label: string; href: string; }
interface ExperienceItem {
	period: string;
	role: string;
	company: string;
	location?: string;
	bullets: string[];
	tech?: string[];
}
interface EducationItem {
	period: string;
	degree: string;
	school: string;
	location?: string;
	bullets?: string[];
}
interface OrgItem {
	period: string;
	org: string;
	location?: string;
	bullets?: string[];
}

interface ResumeShowcaseProps {
	pdfUrl: string;
}

// ---- DATA ----
const PROFILE = {
	name: "Vlad-Cristian Puscaru",
	title: "Senior Software Developer",
	location: "München, Germany",
	email: "vlad.cpuscaru@gmail.com",
	phone: "+40 736 167 606",
};

const LINKS: LinkItem[] = [
	// { label: "Portfolio", href: "https://vladpuscaru.github.io/portfolio-website/" },
	{ label: "LinkedIn", href: "https://linkedin.com/in/vlad-cristian-puscaru-2399b6123" },
];

const SUMMARY = `I'm a Software Engineer from Romania with over 6 years of experience and a strong track record across various areas of development. While my career has primarily focused on web applications, I am now eager to transition towards my passions in game development and low-level programming. I am particularly interested in roles that involve working with languages like C and C++, and offer opportunities to deepen my expertise in these areas.`;

const EXPERIENCE: ExperienceItem[] = [
	{
		period: "11/2024 – Present",
		role: "Software Architect and Developer",
		company: "Econowind",
		location: "remote",
		bullets: [
			"Architecting, developing and maintaining a new software solution responsible for data transfer and centralization.",
			"Developing and managing DevOps processes (AWS & Linux).",
		],
		tech: ["NodeJs", "Typescript", "ReactJS", "AWS", "Linux", "Terraform", "Git", "Python"],
	},
	{
		period: "04/2022 – 04/2023",
		role: "Software Developer",
		company: "EPAM Systems",
		location: "remote",
		bullets: [
			"Building solutions and conducting maintenance for one of the biggest video game companies in the world (Epic Games).",
			"Led a team of 5 developers.",
			"Mentor and technology expert.",
		],
		tech: ["NodeJs", "Typescript", "ReactJS", "AWS"],
	},
	{
		period: "04/2022 – 07/2022",
		role: "Video Game Developer",
		company: "MetaWander",
		location: "remote",
		bullets: [
			"Built a VR video game for an upcoming cryptocurrency.",
			"Created and managed multiple aspects of game development (gameplay, networking, avatar rigging and animation).",
		],
		tech: ["Unity", "C#"],
	},
	{
		period: "04/2020 – 04/2022",
		role: "Software Developer",
		company: "Deloitte Digital Romania",
		location: "Bucharest, Romania",
		bullets: [
			"Key developer in a national impact project – COVID-19 digital solution for the NHS UK.",
			"Led a team of 7 developers.",
		],
		tech: ["NodeJs", "Typescript", "AWS", "Terraform", "Java", "Spring", "Docker"],
	},
	{
		period: "09/2018 – 03/2019",
		role: "Software Developer",
		company: "Quart Creative Agency",
		location: "Bucharest, Romania",
		bullets: [
			"Delivered custom web solutions based on design mockups.",
			"Created in-house tools used by the entire team.",
		],
		tech: ["PHP", "WordPress", "HTML", "CSS", "Javascript"],
	},
];

const EDUCATION: EducationItem[] = [
	{
		period: "09/2023 – Present",
		degree: "Master of Science in Game and Media Technology",
		school: "Utrecht University",
		location: "Utrecht, The Netherlands (remote thesis)",
		bullets: [
			"Specialising and researching game development-related areas such as graphics, physics, crowd simulation.",
			"Currently working remotely on final thesis.",
		],
	},
	{
		period: "09/2017 – 07/2020",
		degree: "BSc in Economic Informatics",
		school: "Academy of Economic Studies Bucharest",
		location: "Bucharest, Romania",
		bullets: [
			"Computer Science curriculum with applied knowledge in Economics.",
			"Final Thesis: IoT Solution for Smart Home – Air Quality measuring system in a decentralized architecture.",
		],
	},
	{
		period: "09/2018 – 09/2019",
		degree: "Computer Programming Courses",
		school: "STEP IT Academy Bucharest",
		location: "Bucharest, Romania",
		bullets: ["Curricula included: C, C++, C#, Algorithms, and Design Patterns."],
	},
];

const TOOLSET = [
	"C/C++",
	"AWS",
	"Java",
	"Python",
	"React",
	"Javascript/Typescript",
	"C#",
	"Linux",
	"Unity",
	"NodeJS",
];

const ORGANISATIONS: OrgItem[] = [
	{
		period: "09/2023 – Present",
		org: "Utrecht University, Student Ambassador",
		location: "Utrecht & remote",
		bullets: [
			"Actively speak with prospect students, answering questions and providing guidance.",
			"Participate in public events, such as University Open Days.",
		],
	},
	{
		period: "07/2016 – Present",
		org: "Rotaract District 2241, Member / Treasurer / Vice President",
		location: "Romania",
		bullets: [
			"Active member of the Rotaract family since youth, helping local communities.",
			"Honorable mention: Logistics lead for district project \"O cana de fericire\".",
			"Currently acting as passive member while finishing studies.",
		],
	},
];

const fadeUp = {
	hidden: { opacity: 0, y: 16 },
	show: (i = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut", delay: i * 0.05 },
	}),
};

const card = {
	hidden: { opacity: 0, scale: 0.98 },
	show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

const ResumeShowcase = ({ pdfUrl }: ResumeShowcaseProps) => {
	const handleDownload = () => {
		if (pdfUrl) window.open(pdfUrl, "_blank");
	};

	return (
		<section className={styles.resume} aria-label="Resume">
			{/* Floating Download Button */}
			<motion.button
				className={styles.downloadBtn}
				onClick={handleDownload}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				<Download size={18} />
				<span>Download Resume</span>
			</motion.button>

			{/* Header */}
			<motion.header className={styles.header} variants={fadeUp} initial="hidden" animate="show">
				<div className={styles.identity}>
					<h1 className={styles.name}>{PROFILE.name}</h1>
					<p className={styles.title}>{PROFILE.title}</p>
					<p className={styles.location}>📍 {PROFILE.location}</p>
				</div>
				<div className={styles.actions}>
					<a className={styles.button} href={`mailto:${PROFILE.email}`}>✉️ Email</a>
					<a className={styles.button} href={`tel:${PROFILE.phone.replace(/\\s|\\+/g, "")}`}>📞 Call</a>
					{LINKS.map((l) => (
						<a key={l.href} className={styles.buttonGhost} href={l.href} target="_blank" rel="noreferrer noopener">
							{l.label}
						</a>
					))}
				</div>
			</motion.header>

			{/* Summary */}
			<motion.section className={styles.summary} variants={card} initial="hidden" whileInView="show" viewport={{ once: true }}>
				<h2 className={styles.sectionTitle}>About</h2>
				<p className={styles.lead}>{SUMMARY}</p>
			</motion.section>

			{/* Experience */}
			<section className={styles.grid2}>
				<h2 className={styles.sectionTitle}>Professional Experience</h2>
				<div className={styles.timeline}>
					{EXPERIENCE.map((job) => (
						<motion.article key={job.company + job.period} className={styles.card} variants={card} initial="hidden" whileInView="show" viewport={{ once: true }}>
							<header className={styles.cardHeader}>
								<div>
									<h3 className={styles.cardTitle}>{job.role}</h3>
									<p className={styles.cardSub}>{job.company} · {job.location}</p>
								</div>
								<time className={styles.cardTime}>{job.period}</time>
							</header>
							<ul className={styles.list}>
								{job.bullets.map((b, i) => (<li key={i}>{b}</li>))}
							</ul>
							{job.tech && (
								<div className={styles.badgeRow}>
									{job.tech.map((t) => (<span key={t} className={styles.badge}>{t}</span>))}
								</div>
							)}
						</motion.article>
					))}
				</div>
			</section>

			{/* Education */}
			<section className={styles.grid2}>
				<h2 className={styles.sectionTitle}>Education</h2>
				<div className={styles.cardsGroup}>
					{EDUCATION.map((ed) => (
						<motion.article key={ed.school + ed.period} className={styles.card} variants={card} initial="hidden" whileInView="show" viewport={{ once: true }}>
							<header className={styles.cardHeader}>
								<div>
									<h3 className={styles.cardTitle}>{ed.degree}</h3>
									<p className={styles.cardSub}>{ed.school} · {ed.location}</p>
								</div>
								<time className={styles.cardTime}>{ed.period}</time>
							</header>
							{ed.bullets && <ul className={styles.list}>{ed.bullets.map((b, i) => (<li key={i}>{b}</li>))}</ul>}
						</motion.article>
					))}
				</div>
			</section>

			{/* Toolset */}
			<motion.section className={styles.tools} variants={card} initial="hidden" whileInView="show" viewport={{ once: true }}>
				<h2 className={styles.sectionTitle}>Toolset</h2>
				<div className={styles.badgeCloud}>
					{TOOLSET.map((t) => (<span key={t} className={styles.badge}>{t}</span>))}
				</div>
			</motion.section>

			{/* Organisations */}
			<section className={styles.grid2}>
				<h2 className={styles.sectionTitle}>Organisations</h2>
				<div className={styles.cardsGroup}>
					{ORGANISATIONS.map((o) => (
						<motion.article key={o.org + o.period} className={styles.card} variants={card} initial="hidden" whileInView="show" viewport={{ once: true }}>
							<header className={styles.cardHeader}>
								<div>
									<h3 className={styles.cardTitle}>{o.org}</h3>
									<p className={styles.cardSub}>{o.location}</p>
								</div>
								<time className={styles.cardTime}>{o.period}</time>
							</header>
							{o.bullets && <ul className={styles.list}>{o.bullets.map((b, i) => (<li key={i}>{b}</li>))}</ul>}
						</motion.article>
					))}
				</div>
			</section>
		</section>
	);
};

export default ResumeShowcase;
