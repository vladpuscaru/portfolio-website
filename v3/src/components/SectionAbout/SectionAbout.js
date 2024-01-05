import styles from "./SectionAbout.module.sass"
import { ReactSVG } from "react-svg";
import icRomania from "../../common/images/ic_romania.svg";
import icCrossfit from "../../common/images/ic_crossfit.svg";
import icGuitar from "../../common/images/ic_guitar.svg";
import { useState } from "react";
import { technologies } from "../../common/data/technologies";

const SectionAbout = ({active, onMenuItemClick}) => {
    const [revealBio, setRevealBio] = useState(false);

    const onRevealClick = () => {
        setRevealBio(!revealBio);
    }

    return (
        <section id={"about"} className={`${styles.about} ${active ? styles.active : ""}`}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h2>Hi! I'm Vlad <ReactSVG wrapper={"span"} src={icRomania}/></h2>
                    <span>I enjoy writing the code for this website more than writing the content</span>
                </div>
            </div>
            <div className={styles.main}>
                <div className={`${styles.bio} ${revealBio ? styles.active : ""}`}>
                    <div onClick={onRevealClick} className={styles.head}>
                        Formerly a Team Lead, now back to being a student.
                        <br/>
                        Read my story.
                    </div>

                    <div className={styles.content}>
                        <p>
                            I am one of the fortunate people that find their passions early on in life. Mine
                            was <strong>computers</strong>.
                            When I think about my childhood, I often relive the moments when I was exploring my PC and,
                            more
                            specifically, games.
                            <strong>Video Games</strong> were a big part of my life back then and I always appreciated
                            and
                            was
                            amazed by the possibility of
                            forging a new reality.
                            <br/>
                            Spending most of my free time on the computer, it came as a shock when I enrolled myself in
                            The
                            Faculty of Law. Nevertheless, after just 1 year I quickly
                            realised that I want to spend the rest of my life doing the things I really enjoy. I wanted
                            to
                            have
                            a reason to get up in the morning. At that point, I didn't
                            know how to program a computer. I was just intrigued by the "fancy colors and texts" that
                            were
                            popping on my programmer friends' monitors.
                            <br/>
                            So I did it. I dropped Law and everything that I did for the last 4 years at that point to
                            prepare
                            for that path and started to learn programming.
                            Immediately, I was hooked. My journey started with the C Programming Language and I'm very
                            grateful
                            for that because it basically thought me not just the language
                            but how computers work.
                            <br/>
                            <br/>
                            After spending years working in the corporate life, this passion of mine started to fade
                            away,
                            little by little. I was lead into the web development sector and I worked
                            mainly as a back-end engineer for diverse companies and projects. As a personal achievement,
                            I
                            managed to open my own company 2 years ago and I've been working as a contractor.
                            Because of this, I could safely explore other industries while also keeping a decent stream
                            of
                            income from my web contracts.
                            <br/>
                            Soon after, I realised why computers were so dear to me back when i first received one. It
                            was <strong>video games</strong>.
                            <br/>
                            That's why now I am a <strong>student</strong> once again. I decided, once again, to take a
                            big
                            leap
                            for my career and "start over". Dropped all my contracts and took a break from working in
                            order
                            to
                            focus solely on game development and rediscover my passion for programming.
                            <br/>
                        </p>
                        <p>
                            Of course, I'm not only a robot that sits and program all day.
                            <br/>
                            I also enjoy learning new skills and at the moment, I'm into <strong>playing
                            guitar <ReactSVG
                                wrapper={"span"}
                                src={icGuitar}/></strong> and <strong>CrossFit <ReactSVG wrapper={"span"}
                                                                                         src={icCrossfit}/></strong>
                        </p>
                    </div>
                    <div className={styles.links}>
                        <p>
                            Check out my <span onClick={() => onMenuItemClick(2)}>experience</span> to see who I worked
                            for
                            :).
                        </p>
                        <p>
                            Check out my <span onClick={() => onMenuItemClick(2)}>education</span> to see how this is
                            going
                            :).
                        </p>
                    </div>
                </div>

                <div className={styles.tldr}>
                    <div className={styles.title}>
                        <h2>TLDR</h2>
                        <span>You want to see what I know, right?</span>
                    </div>
                    <div className={styles.content}>
                        <p>
                            When it comes to programming, I pride myself for being <strong>language and technology agnostic</strong>.
                            <br/>
                            Technology advances and new trends appear every day. I believe it is more important in learning and understanding concepts and techniques rather than tools.
                            <br/>
                            Nevertheless, as everyone, I do have a fondness for particular tools.

                            <ul>
                                { technologies.map((tech, idx) => (
                                    <li key={idx}>
                                        <div className={styles.hover}>
                                            <h3>{tech.name}</h3>
                                        </div>
                                        <img src={tech.logo} />
                                    </li>
                                )) }
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionAbout;