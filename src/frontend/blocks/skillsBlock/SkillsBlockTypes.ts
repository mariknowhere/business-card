import {ICardProps} from "../../components/card/CardTypes";
import {IBlockProps} from "../BlocksTypes";

export interface ISkillsBlockProps extends IBlockProps {
    cards: ICardProps[];
}
