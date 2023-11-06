import { Component } from 'react';
import { JobExperience } from '../model/JobExperienceType';
import { Card, CardContent, Chip, Typography } from '@mui/material';
import { getJobExperienceService } from '../model/services/JobExperienceService';
import { JobExperienceDescription } from '../components/ExperienceDescriptionComponent';
import Grid from '@mui/material/Unstable_Grid2';
import { PageSection } from '../components/PageSessionComponent';

interface State {
    jobExperiences: JobExperience[]
}

/**
 * This is a section of the website that contains all my job experiences
 */
export class JobExperienceSection extends Component<{}, State> {

    state = {
        jobExperiences: []
    }

    componentDidMount() {
        getJobExperienceService()
            .then((jobExperiences: JobExperience[]) => {
                this.setState({
                    jobExperiences
                })
            })
    }

    render() {
        const { jobExperiences } = this.state
        return (
        <PageSection title="Experiência Profissional">
            <Grid container spacing={2}>
            {jobExperiences.map((jobExperience: JobExperience) => {
                return (
                <Grid xs={6}>
                    <Card>
                        <CardContent >
                            <Typography variant='h5' >{jobExperience.institution}</Typography>
                            <Typography style={{ color: "#777" }} variant="body1" >{jobExperience.position}</Typography>
                            <Typography style={{ color: "#777" }} variant="body1">
                                {`
                                    ${jobExperience.fromDate.toLocaleDateString()} - 
                                    ${jobExperience.toDate.toLocaleDateString()}
                                `}
                            </Typography>

                            <Grid style={{ margin: 5 }} container spacing={1}>
                                {jobExperience.skills?.map((skill) => {
                                    return (<Grid>
                                        <Chip label={skill} />
                                        </Grid>)
                                })}
                            </Grid>

                            { !jobExperience.description || !jobExperience.description.summary
                                ? null
                                : (
                                    <JobExperienceDescription 
                                        experienceDescription={jobExperience.description} />
                                )
                            }
                            
                        </CardContent>
                    </Card>
                </Grid>)
            })}
            </Grid>
        </PageSection>
        );
    }
}