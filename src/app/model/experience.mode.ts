export interface IExperience {
    label: string;
    value: Eexperience
}

export enum Eexperience {
    Beginner = 'beginner',
    Junior = 'junior',
    Intermediate = 'intermediate',
    Senior = 'senior',
    Expert = 'expert'
}
export const experience: IExperience[] = [
    { label: 'Beginner (0-1 years)', value: Eexperience.Beginner },
    { label: 'Junior (1-3 years)', value: Eexperience.Junior },
    { label: 'Intermediate (3-5 years)', value: Eexperience.Intermediate },
    { label: 'Senior (5-8 years)', value: Eexperience.Senior },
    { label: 'Expert (8+ years)', value: Eexperience.Expert }
];