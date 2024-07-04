import "./common/sass/general.sass";
import { Menu } from "./components/Menu/Menu";
import { useState } from "react";
import { SectionAbout } from "./sections/SectionAbout/SectionAbout";
import { SectionProjects } from "./sections/SectionProjects/SectionProjects";

const App = () => {
    const [activeSection, setActiveSection] = useState(0);

    return (
        <div className="App">
            <header className="App__header">
                <h1>Vlad Puscaru</h1>
            </header>

            <main className="App__main">
                <SectionAbout active={activeSection === 0} />
                <SectionProjects active={activeSection === 1} />
            </main>

            <footer className="App__footer">
                <Menu
                    activeSection={activeSection}
                    onSectionClick={setActiveSection}
                />
            </footer>
        </div>
    );
}

export default App;
