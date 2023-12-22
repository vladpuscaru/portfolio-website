import styles from "./Menu.module.sass"

const Menu = ({ children }) => {
    return (
        <div className={styles.menu}>
            { children }
        </div>
    )
}

export default Menu;