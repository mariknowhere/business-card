import {ICardProps} from "../../components/card/CardTypes";
import {IAboutBlockProps} from "../aboutBlock/AboutBlockTypes";

export interface IExperienceBlockColumnProps {
    title: string;
    items: ICardProps[];
}

export interface IExperienceBlockProps extends Pick<IAboutBlockProps, 'blockId' | 'topic' | 'title'> {
    items: IExperienceBlockColumnProps[];
}
