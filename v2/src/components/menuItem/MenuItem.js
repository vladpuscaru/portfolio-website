import styles from "./MenuItem.module.sass"

const MenuItem = ({active, icon, onClick}) => {
    return (
        <div
            className={`
                ${styles.menuItem} 
                ${active ? `${styles.active}` : ""}
            `
            }
            onClick={onClick}>

            <img src={icon} alt={"menuItem"}/>
        </div>
    )
}

export default MenuItem;