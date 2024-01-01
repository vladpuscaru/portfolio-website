import "./common/sass/general.sass";
import Menu from "./components/Menu/Menu";
import { useState } from "react";

function App() {
    const [active, setActive] = useState({
        section: -1
    });

    const onMenuItemClick = (section) => {
        setActive({
            ...active,
            section
        })
    }

    return (
        <div className="App">
            <Menu activeSection={active.section} onMenuItemClick={onMenuItemClick} />
        </div>
    );
}

export default App;
