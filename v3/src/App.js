import "./common/sass/general.sass";
import Menu from "./components/Menu/Menu";
import { useState } from "react";

function App() {
    const [active, setActive] = useState({
        section: -1,
        menu: true
    });

    const onMenuItemClick = (section) => {
        if (section === undefined) {
            setActive({
                ...active,
                menu: !active.menu
            })
        } else {
            setActive({
                ...active,
                menu: false,
                section
            });
        }
    }

    return (
        <div className="App">
            <Menu active={active.menu} activeSection={active.section} onMenuItemClick={onMenuItemClick}/>
        </div>
    );
}

export default App;
