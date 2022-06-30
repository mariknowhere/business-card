import {ICardProps} from "../../components/card/CardTypes";
import {IBlockProps} from "../BlocksTypes";

export interface IExperienceBlockColumnProps {
    title: string;
    items: ICardProps[];
}

export interface IExperienceBlockProps extends IBlockProps {
    items: IExperienceBlockColumnProps[];
}
