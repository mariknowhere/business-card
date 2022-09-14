import {IImageProps} from "../image/ImageTypes";

export interface IDutyProps {
    text: string;
}

export interface IInfoProps {
    title: string;
    topic?: string;
    responsibilities: IDutyProps[];
    bottom?: string;
}

export interface ICardProps {
    title: string;
    topic?: string;
    description?: string;
    info?: IInfoProps;
    image?: IImageProps;
    icon?: IImageProps;
    className?: string;
    classNameImage?: string;
    classNameIcon?: string;
    classNameHeader?: string;
    classNameIconWrapper?: string;
    classNameImageWrapper?: string;
    classNameDescription?: string;
    classNameTitle?: string;
}
