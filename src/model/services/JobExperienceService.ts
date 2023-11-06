import { jobExperienceData } from "../../data/JobExperienceData";
import { JobExperience } from "../JobExperienceType";

/**
 * An interface layer that make get data more flexible. If we would like to
 * get data from a database or a remote server, we can just change here
 * @returns 
 */
export function getJobExperienceService(): Promise<JobExperience[]>
{
    // For now just get the data from the data file.
    const data = jobExperienceData;
    return Promise.resolve(data);
}