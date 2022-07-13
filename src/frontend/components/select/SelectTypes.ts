import {IImageProps} from "../image/ImageTypes";

export interface IOptionProps {
    content: string;
    value: string;
}

export interface ISelectProps {
    options: IOptionProps[];
    imageDown: IImageProps;
    imageUp: IImageProps;
    className?: string;
}