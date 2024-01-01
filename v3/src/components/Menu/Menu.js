import styles from "./Menu.module.sass"

const Menu = ({activeSection, onMenuItemClick}) => {
    return (
        <nav className={`${styles.menu} ${activeSection === -1 ? styles.active : ""}`}>
            <div onClick={() => onMenuItemClick(0)}
                 className={`${styles.cell} ${activeSection === 0 ? styles.active : ""}`}>
                <a href="#">about</a>
            </div>
            <div onClick={() => onMenuItemClick(1)}
                 className={`${styles.cell} ${activeSection === 1 ? styles.active : ""}`}>
                <div className={styles.shape}></div>
                <a href="#">projects</a>
            </div>
            <div onClick={() => onMenuItemClick(2)}
                 className={`${styles.cell} ${activeSection === 2 ? styles.active : ""}`}>
                <div className={styles.shape}></div>
                <a href="#">resume</a>
            </div>
            <div onClick={() => onMenuItemClick(3)}
                 className={`${styles.cell} ${activeSection === 3 ? styles.active : ""}`}>
                <div className={styles.shape2}></div>
                <div className={styles.shape}></div>
                <a href="#">contact</a>
            </div>
            <div onClick={() => onMenuItemClick(-1)}
                 className={`${styles.back} ${activeSection !== -1 ? styles.active : ""}`}>
                <a href="#">x</a>
            </div>
        </nav>
    )
}

export default Menu;