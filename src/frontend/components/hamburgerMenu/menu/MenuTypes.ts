import { Dispatch, SetStateAction } from "react";
import {ISocialProps} from "../../social/SocialTypes";

export interface IItemProps {
    href: string;
    content: string;
}

export interface IMenuProps {
    socials?: ISocialProps[];
    items?: IItemProps[];
    menuActive?: boolean;
    setMenuActive?: Dispatch<SetStateAction<boolean>>;
}
