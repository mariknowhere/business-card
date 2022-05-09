import {ICardProps} from "../../components/card/CardTypes";
import {IAboutBlockProps} from "../aboutBlock/AboutBlockTypes";

export interface ISkillsBlockProps extends Pick<IAboutBlockProps, 'blockId' | 'topic' | 'title'>{
    cards: ICardProps[];
}
