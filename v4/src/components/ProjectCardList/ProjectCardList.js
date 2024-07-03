import styles from "./ProjectCardList.module.sass";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { useState } from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { ReactSVG } from "react-svg";
import iconGithub from "../../common/icons/icons8-github.svg";

/**
 * Accordion Material UI
 * https://mui.com/material-ui/react-accordion/
 */

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        {...props}
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
    />
))(({theme}) => ({
    padding: 0,
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        margin: 0,
        display: 'flex',
        alignItems: 'center'
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export const ProjectCardList = ({projects}) => {
    const [expanded, setExpanded] = useState(0);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div className={styles.projectcardlist}>
            {
                projects.map((project, idx) => {
                    const {title, technologies, github, slug, description, images} = project;

                    return (
                        <Accordion className={styles.project} key={project.id} expanded={expanded === idx}
                                   onChange={handleChange(idx)}>
                            <AccordionSummary aria-controls={`${idx}-content`} id={`${idx}-header`}>
                                <div className={`${styles.projectHeadImg} ${expanded === idx ? styles.active : ""}`}>
                                    <img src={images[0]} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                {
                                    technologies.map((technology, i) => {
                                        const {text, color} = technology;

                                        return <span
                                            key={i}
                                            style={{backgroundColor: color}}
                                        >{text}</span>
                                    })
                                }
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={styles.detailsHeader}>
                                    <a href={github} target={"_blank"}>
                                        <ReactSVG src={iconGithub}/>
                                        Check it on GitHub!
                                    </a>
                                    <p>{slug}</p>
                                </div>

                                <div className={styles.detailsDescription}>
                                    {description}
                                </div>

                                <div className={styles.detailsImages}>

                                    <Box>
                                        <ImageList variant="masonry" cols={3} gap={8}>
                                            {images.map((image, iidx) => (
                                                <ImageListItem key={iidx}>
                                                    <img
                                                        src={image}
                                                        alt={`${title}-${iidx}`}
                                                        loading="lazy"
                                                    />
                                                </ImageListItem>
                                            ))}
                                        </ImageList>
                                    </Box>

                                </div>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </div>
    );
}