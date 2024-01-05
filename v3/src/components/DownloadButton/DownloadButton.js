import styles from "./DownloadButton.module.sass"
import { ReactSVG } from "react-svg";
import icPDF from "../../common/images/ic_pdf.svg";

const DownloadButton = () => {
    return (
        <a className={styles.download}>
            <ReactSVG src={icPDF}/>
            Download
        </a>
    )
}

export default DownloadButton;