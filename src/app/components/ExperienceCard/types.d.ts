interface ITag {
    title: string;
}

export interface IExperienceCard {
    dateRange: string;
    title: string;
    desc: string;
    link: string;
    tags: ITag[];
}