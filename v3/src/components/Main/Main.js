import styles from "./Main.module.sass"

const Main = ({ active, activeSection }) => {
    return <main className={`${styles.main} ${ active ? styles.active : "" }`}>
        <div className="container">
            Main
        </div>
    </main>
}

export default Main;