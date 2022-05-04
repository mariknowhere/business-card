import { ICardProps } from "../../components/card/CardTypes";
import { IImageProps } from "../../components/image/ImageTypes";

export interface IAboutBlockProps {
    image: IImageProps;
    title: string;
    topic?: string;
    description?: string;
    cards?: ICardProps[];
}