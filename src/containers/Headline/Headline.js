import {React, Component, Fragment} from "react";
import styles from "./Headline.module.sass";

import Count from "../../components/Count/Count";
import CTAButton from "../../components/CTAButton/CTAButton";

import Appear from "../../components/Appear/Appear";
import Profile from "../Profile/Profile";

export default class Headline extends Component {
    constructor(props) {
        super();
        this.state = {
            title: props.title,
            info: props.info,
            counts: [...props.counts],
            image: props.image,
            contact: props.contact,
        };
    }

    render() {
        const {superscript, firstName, lastName} = this.state.title;
        const info = this.state.info;
        const counts = this.state.counts;
        const {text, ctabuttons} = this.state.contact;
        const {profile} = this.props;

        return (
            <div>
                <div className={styles.title}>
                    {
                        window.innerWidth <= 992 ?
                            <Fragment>
                                <Appear sourceDirection="up">
                                    <h3 className={styles.title__super}>{superscript}</h3>
                                </Appear>
                                <Appear sourceDirection="left">
                                    <div className={styles.title__left}>
                                        <h1 className={styles.title__firstName}>{firstName}</h1>
                                        <h1 className={styles.title__lastName}>{lastName}</h1>
                                    </div>
                                </Appear>
                            </Fragment> :
                            <Fragment>
                                <Appear sourceDirection="left">
                                    <div className={styles.title__left}>
                                        <h3 className={styles.title__super}>{superscript}</h3>
                                        <h1 className={styles.title__firstName}>{firstName}</h1>
                                    </div>
                                </Appear>

                                <Appear sourceDirection="right">
                                    <div className={styles.title__right}>
                                        <h1 className={styles.title__lastName}>{lastName}</h1>
                                    </div>
                                </Appear>
                            </Fragment>
                    }

                </div>

                {
                    window.innerWidth <= 992 ? <Profile
                        btnSup={profile.btn.sup}
                        btnTxt={profile.btn.txt}
                        btnLink={profile.btn.link}
                        profileImg={profile.profileImg}
                        profileBg={profile.profileBg}
                        isMobile={true}
                    /> : ""
                }

                <Appear sourceDirection="up">
                    <div className={styles.info}>
                        <p>{info}</p>
                    </div>
                </Appear>

                <Appear sourceDirection="down">
                    <div className={styles.counts}>
                        {counts.map((c, index) => (
                            <Count number={c.number} name={c.name} key={index}/>
                        ))}
                    </div>
                </Appear>

                <Appear className={styles.ctabuttonsContainer} sourceDirection="up">
                    <h3 className={styles.ctabuttonsText}>{text}</h3>
                    <div className={styles.ctabuttons}>
                        {ctabuttons.map((cta, index) => (
                            <CTAButton
                                text={text}
                                icon={cta.icon}
                                hover={cta.hover}
                                link={cta.link}
                                key={index}
                            />
                        ))}
                    </div>
                </Appear>
            </div>
        );
    }
}
