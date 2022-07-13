import { Dispatch, SetStateAction } from "react";
import {ISocialProps} from "../../social/SocialTypes";
import {IImageProps} from "../../image/ImageTypes";

export interface IItemProps {
    href: string;
    content: string;
}

export interface IMenuProps {
    socials?: ISocialProps[];
    items?: IItemProps[];
    menuActive?: boolean;
    setMenuActive?: Dispatch<SetStateAction<boolean>>;
    image?: IImageProps;
}
