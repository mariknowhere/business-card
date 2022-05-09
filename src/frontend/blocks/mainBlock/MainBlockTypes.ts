import {IAboutBlockProps} from "../aboutBlock/AboutBlockTypes";

export interface IMainBlockProps extends Pick<IAboutBlockProps, 'blockId' | 'title' | 'description'>{
    buttonText?: string;
}
