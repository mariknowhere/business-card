import {IAboutBlockProps} from "../aboutBlock/AboutBlockTypes";
import {ISocialProps} from "../../components/social/SocialTypes";
import {IBlockProps} from "../BlocksTypes";

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
    nameInput: IInputProps;
    emailInput: IInputProps;
    text: ITextAreaProps;
}

export interface IContactsBlockProps extends Pick<IAboutBlockProps, 'image' | 'description'>, IBlockProps {
    form: IFormProps;
    subDescription?: string;
    socials?: ISocialProps[];
    buttonText?: string;
    emailSentSuccessfully?: string;
    emailSentUnsuccessfully?: string;
}
