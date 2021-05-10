import { React, Component } from "react";
import FullHeight from "react-full-height";
import styles from "./Homepage.module.sass";
import { data } from "../../data/homepage_data";

import Header from "../../containers/Header/Header";
import Headline from "../../containers/Headline/Headline";
import Footer from "../../containers/Footer/Footer";
import Profile from "../../containers/Profile/Profile";
import Folder from "../../components/Folder/Folder";
import MatrixBackground from "../../components/MatrixBackground/MatrixBackground";

export default class Homepage extends Component {
	render() {
		const { headline, profile, folders, backgroundContent } = data;

		return (
			<FullHeight className={styles.homepage} canExceed>
				<MatrixBackground content={backgroundContent} />
				<Header />
				<div className={styles.container}>
					<Headline
						title={headline.title}
						info={headline.info}
						counts={headline.counts}
						ctabuttons={headline.ctabuttons}
					/>
					<Profile
						btnSup={profile.btn.sup}
						btnTxt={profile.btn.txt}
						btnLink={profile.btn.link}
					/>
				</div>
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
				<Footer />
			</FullHeight>
		);
	}
}
