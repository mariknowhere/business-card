export interface IItemsProps {
    topic: string;
    title: string;
    description: string;
}

export interface IExperienceBlockColumnProps {
    title: string;
    items: IItemsProps[];
}

export interface IExperienceBlockProps {
    topic: string;
    title: string;
    items: IExperienceBlockColumnProps[];
}
