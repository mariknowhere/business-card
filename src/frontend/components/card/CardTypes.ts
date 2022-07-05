import {IImageProps} from "../image/ImageTypes";

export interface ICardProps {
    title: string;
    topic?: string;
    description?: string;
    image?: IImageProps;
    icon?: IImageProps;
    className?: string;
    classNameImage?: string;
    classNameIcon?: string;
    classNameHeader?: string;
}
