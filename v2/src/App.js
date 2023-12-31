import "./common/sass/_general.sass"
import styles from "./App.module.sass"
import Header from "./containers/header/Header";
import Main from "./containers/main/Main";
import Footer from "./containers/footer/Footer";
import { getProjects } from "./data/projects/projects";
import { useState } from "react";

function App() {

    const [latestProject, setLatestProject] = useState({
        project: getProjects()[0],
        clicked: false
    });

    const onLatestProjectClick = () => {
        setLatestProject({
            ...latestProject,
            clicked: true
        });
    }

    const onBackClick = () => {
        setLatestProject({
            ...latestProject,
            clicked: false
        });
    }

    return (
        <div className={styles.app}>
            <Header />
            <Main selectedProject={latestProject.clicked ? latestProject.project : null} onBackClick={onBackClick} />
            <Footer project={latestProject.project} projectClicked={latestProject.clicked} onProjectClick={onLatestProjectClick} />
        </div>
    );
}

export default App;
