import {IAboutBlockProps} from "../aboutBlock/AboutBlockTypes";
import {ISocialProps} from "../../components/social/SocialTypes";

export interface IInputProps {
    name: string;
    content: string;
    id?: string;
    type?: string;
}

export interface ITextAreaProps {
    id: string;
    name: string;
    content: string;
}

export interface IFormProps {
    id: string;
    inputs: IInputProps[];
    text: ITextAreaProps;
}

export interface IContactsBlockProps extends IAboutBlockProps {
    form: IFormProps;
    subDescription?: string;
    socials?: ISocialProps[];
    buttonText?: string;
}
