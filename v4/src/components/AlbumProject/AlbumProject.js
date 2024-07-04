import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";
import "yet-another-react-lightbox/styles.css";
import styles from "./AlbumProject.module.sass";

export const AlbumProject = ({images}) => {
    const [open, setOpen] = useState(-1);

    return (
        <Box>
            <ImageList variant="masonry" cols={3} gap={8}>
                {images.map((image, iidx) => (
                    <ImageListItem key={iidx}>
                        <img
                            className={styles.img}
                            onClick={() => setOpen(iidx)}
                            src={image.src}
                            alt={`${image.title}-${iidx}`}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <Lightbox
                open={open !== -1}
                close={() => setOpen(-1)}
                slides={images.map(img => img.src).map(src => ({ src }))}
                index={open}
            />
        </Box>
    );
}