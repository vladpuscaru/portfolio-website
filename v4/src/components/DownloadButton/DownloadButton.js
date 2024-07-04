import styles from "./DownloadButton.module.sass"
import { ReactSVG } from "react-svg";
import icPDF from "../../common/icons/ic_pdf.svg"
import resume from "../../data/documents/Puscaru_Vlad_Cristian-Resume.pdf";

const DownloadButton = () => {
    return (
        <a href={resume} download className={styles.download}>
            <ReactSVG src={icPDF}/>
            See Resume PDF
        </a>
    )
}

export default DownloadButton;