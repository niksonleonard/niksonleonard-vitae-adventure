import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { Component } from "react";
import { JobExperience } from "../model/JobExperienceType";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Props = {
    expanded?: boolean
    experienceDescription?: JobExperience["description"]
}

export class JobExperienceDescription extends Component<Props>
{
    render() {
        const { experienceDescription } = this.props
        if (!experienceDescription) {
            return null
        }

        return (
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                </AccordionSummary>

                <AccordionDetails>
                { !experienceDescription.summary
                    ? null
                    : (<Typography variant="body1" textAlign="left">
                        {experienceDescription.summary}
                    </Typography>)
                }

                { !experienceDescription.details
                    ? null
                    : (<ul style={{ textAlign: "left" }}>
                        {experienceDescription.details.map((detail: string) => {
                            return (<li>
                                <Typography>{detail}</Typography>
                                </li>)
                        })}
                    </ul>)
                }
                </AccordionDetails>
            </Accordion>
        )
    }
}