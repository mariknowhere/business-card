import {IImageProps} from "../image/ImageTypes";

export interface ICardProps {
    title: string;
    topic?: string;
    description?: string;
    image?: IImageProps;
    className?: string;
    classNameImage?: string;
}
