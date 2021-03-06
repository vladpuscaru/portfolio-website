import {React, Component, Fragment} from "react";
import FullHeight from "react-full-height";
import styles from "./Homepage.module.sass";
import {data} from "../../data/homepage_data";

import Header from "../../containers/Header/Header";
import Headline from "../../containers/Headline/Headline";
import Footer from "../../containers/Footer/Footer";
import Profile from "../../containers/Profile/Profile";
import Folder from "../../components/Folder/Folder";
import MatrixBackground from "../../components/MatrixBackground/MatrixBackground";
import Appear from "../../components/Appear/Appear";
import PaceCover from "../../components/PaceCover/PaceCover";
import FixedButton from "../../components/FixedButton/FixedButton";

export default class Homepage extends Component {
    constructor(props) {
        super();
        this.state = {
            isLoading: true,
        };
    }

    onPaceFinish() {
        this.setState({
            isLoading: false,
        });
    }

    render() {
        const {pace, headline, profile, folders, backgroundContent} = data;

        return (
            <FullHeight className={styles.homepage} canExceed>
                <MatrixBackground content={backgroundContent}/>
                {this.state.isLoading ? (
                    <PaceCover content={pace} onFinish={() => this.onPaceFinish()}/>
                ) : (
                    <Fragment>
                        <Header/>
                        <div className={styles.container}>
                            <Headline
                                title={headline.title}
                                info={headline.info}
                                counts={headline.counts}
                                contact={headline.contact}
                                profile={profile}
                            />

                            {
                                window.innerWidth > 992 ? <Profile
                                    btnSup={profile.btn.sup}
                                    btnTxt={profile.btn.txt}
                                    btnLink={profile.btn.link}
                                    profileImg={profile.profileImg}
                                    profileBg={profile.profileBg}
                                /> : ""
                            }

                        </div>

                        <Appear sourceDirection="down">
                            <div className={styles.folders}>
                                {folders.map((f, index) => (
                                    <Folder
                                        link={f.link}
                                        path={f.path}
                                        sub={f.sub}
                                        active={f.active}
                                        key={index}
                                    />
                                ))}
                            </div>
                        </Appear>

                        <Footer/>

                        {
                            window.innerWidth <= 992 ? <FixedButton
                                txt={profile.btn.sup + " " + profile.btn.txt}
                                link={profile.btn.link}/> : ""
                        }

                    </Fragment>
                )}
            </FullHeight>
        );
    }
}
