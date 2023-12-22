import "./common/sass/_general.sass"
import styles from "./App.module.sass"
import Header from "./containers/header/Header";
import Main from "./containers/main/Main";
import Footer from "./containers/footer/Footer";

function App() {
    return (
        <div className={styles.app}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
