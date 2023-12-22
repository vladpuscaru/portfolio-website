import styles from "./Menu.module.sass"

const Menu = ({ children, vertical }) => {
    return (
        <div className={`${styles.menu} ${ vertical ? styles.vertical : "" }`}>
            { children }
        </div>
    )
}

export default Menu;