import React from "react"
import styles from "./PageResume.module.sass"

interface PdfViewerProps {
	src: string           // path or URL to the PDF file
	title?: string        // optional label for accessibility
	className?: string    // optional styling hook
}

const PageResume: React.FC<PdfViewerProps> = ({src, title = "PDF Viewer"}) => {
	return (
		<div className={styles.PageResume}>
			<object
				data={src}
				type="application/pdf"
				width="100%"
				height="100%"
				aria-label={title}
			>
				<iframe
					src={src}
					width="100%"
					height="100%"
					title={title}
				/>
				<p>
					Your browser doesn’t support embedded PDFs.
					<a href={src} target="_blank" rel="noopener noreferrer">Download the file</a>.
				</p>
			</object>
		</div>
	)
}

export default PageResume
