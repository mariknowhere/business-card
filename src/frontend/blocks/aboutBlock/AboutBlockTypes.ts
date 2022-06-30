import { ICardProps } from "../../components/card/CardTypes";
import { IImageProps } from "../../components/image/ImageTypes";
import {IBlockProps} from "../BlocksTypes";

export interface IAboutBlockProps extends IBlockProps {
    image: IImageProps;
    description?: string;
    cards?: ICardProps[];
}
