import styles from "./MenuItem.module.sass"

const MenuItem = ({active, text, isBreadcrumb, appendText, blocked, onClick}) => {
    return (
        <div
            className={`
                ${styles.menuItem} 
                ${active ? `${styles.active}` : ""}
                ${blocked ? `${styles.blocked}` : ""}
                ${isBreadcrumb ? `${styles.breadcrumb}` : ""}
            `
            }
            onClick={onClick}>

            <a>
                <div className={styles.background}></div>
                <span className={styles.text}>{text}</span>
            </a>
            {
                appendText ?
                    <a className={styles.appendText}>
                        <div className={styles.b_background}></div>
                        <span className={styles.b_text}>{appendText}</span>
                    </a>
                    :
                    ""
            }

        </div>
    )
}

export default MenuItem;