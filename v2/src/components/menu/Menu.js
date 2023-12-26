import styles from "./Menu.module.sass"
import MenuItem from "../menuItem/MenuItem";
import { ReactSVG } from "react-svg";
import icBack from "../../images/ic_back.svg";

const Menu = ({sections, activeSection, isBreadcrumb, breadcrumb, onMenuItemClick}) => {
    return (
        <div className={`${styles.menu} ${isBreadcrumb ? styles.breadcrumb : ""}`}>
            <div className={styles.back} onClick={() => {
                onMenuItemClick(-1);
            }}>
                <img src={icBack} />
            </div>
            {
                sections.map((section, idx) => (isBreadcrumb && activeSection === idx) || !isBreadcrumb ? (
                    <MenuItem
                        key={idx}
                        text={section.text}
                        blocked={section.blocked}
                        isBreadcrumb={isBreadcrumb}
                        appendText={breadcrumb}
                        onClick={() => {
                            onMenuItemClick(idx);
                        }}/>
                ) : "")
            }
        </div>
    )
}

export default Menu;