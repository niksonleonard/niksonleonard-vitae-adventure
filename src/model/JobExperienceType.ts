export type JobExperience = {
    language: string,
    institution: string,
    position: string,
    fromDate: Date,
    toDate: Date,
    mainSkills?: string[],
    description?: {
        summary?: string,
        details?: string[]
    }
}