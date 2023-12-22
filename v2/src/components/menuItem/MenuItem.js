import styles from "./MenuItem.module.sass"

const MenuItem = ({active, text, icon, onClick}) => {
    return (
        <div
            className={`
                ${styles.menuItem} 
                ${active ? `${styles.active}` : ""}
            `
            }
            onClick={onClick}>

            <img src={icon} alt={"menuItem"}/>

            <span>{text}</span>
        </div>
    )
}

export default MenuItem;