import "./common/sass/general.sass";
import Menu from "./components/Menu/Menu";
import { useState } from "react";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
    const [active, setActive] = useState({
        section: -1,
        menu: true,
        main: false,
        footer: false
    });

    const onMenuItemClick = (section) => {
        if (section === undefined) {
            setActive({
                ...active,
                menu: !active.menu,
                main: !active.main,
                footer: !active.footer
            })
        } else {
            setActive({
                ...active,
                menu: false,
                main: true,
                footer: true,
                section
            });
        }
    }

    return (
        <div className="App">
            <Menu active={active.menu} activeSection={active.section} onMenuItemClick={onMenuItemClick}/>
            <div className={"content"}>
                <div className={"main"}>
                    <Main active={active.main} activeSection={active.section}/>
                </div>
                <div className={"footer"}>
                    <Footer active={active.footer} activeSection={active.section} onMenuItemClick={onMenuItemClick}/>
                </div>
            </div>
        </div>
    );
}

export default App;
