import styles from "./Menu.module.sass"
import { generateMenuShapesStyles } from "../../util/util";

const Menu = () => {
    const shapesStyles = generateMenuShapesStyles();
    return (
        <nav className={styles.menu}>
            <div className={styles.cell}>
                <a href="#">about</a>
            </div>
            <div className={styles.cell}>
                <div className={styles.shape}></div>
                <a href="#">projects</a>
            </div>
            <div className={styles.cell}>
                <div className={styles.shape}></div>
                <a href="#">resume</a>
            </div>
            <div className={styles.cell}>
                <div className={styles.shape2}></div>
                <div className={styles.shape}></div>
                <a href="#">contact</a>
            </div>
        </nav>
    )
}

export default Menu;